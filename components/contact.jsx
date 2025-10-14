"use client"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState("idle") // new state to show form status

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("https://formspree.io/f/mjkapddw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to discuss your legal needs? Contact us today for a consultation. We're here to help you navigate your
            legal challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Info Section */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#F5F1E8] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#B8956A]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+965 55003434</p>
                <p className="text-muted-foreground">Sun - Thurs: 8AM - 4PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#F5F1E8] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#B8956A]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">leqal@info.com</p>
               
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#F5F1E8] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#B8956A]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Office</h3>
                <p className="text-muted-foreground">
                  
                  <br />
                  Kuwait City
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#B8956A] focus:border-transparent"
                placeholder="Khalid "
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#B8956A] focus:border-transparent"
                placeholder="Khalid@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#B8956A] focus:border-transparent"
                placeholder="+965 68645123"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#B8956A] focus:border-transparent resize-none"
                placeholder="Tell us about your legal needs..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#B8956A] text-white px-8 py-4 rounded-lg hover:bg-[#A07D54] transition-all font-medium flex items-center justify-center gap-2 group"
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {status === "error" && (
              <p className="text-red-500 text-center">Something went wrong. Please try again later.</p>
            )}
            {status === "success" && (
              <p className="text-green-600 text-center">Your message has been sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
