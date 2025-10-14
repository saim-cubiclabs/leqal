"use client"

import { Scale, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#2A2A2A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              
              <span className="text-2xl font-serif font-bold">
                Leqal<span className="text-[#B8956A]">Firm</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Providing exceptional legal services with integrity and dedication since 1998.
            </p>
            <div className="flex gap-4">
         
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#B8956A] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-[#B8956A] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-[#B8956A] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-400 hover:text-[#B8956A] transition-colors"
                >
                  Meet our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-[#B8956A] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Practice Areas</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Civil Litigation</li>
              <li>Corporate Law</li>
              <li>Family Law</li>
              <li>Real Estate</li>
              <li>Estate Planning</li>
              <li>Criminal Defense</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Kuwait City</li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Leqal Law Firm. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#B8956A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#B8956A] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
