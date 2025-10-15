import { Scale, FileText, Users, Briefcase, Home, Shield } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Civil Litigation",
    description:
      "Expert representation in civil disputes, ensuring your rights are protected throughout the legal process.",
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Comprehensive legal services for businesses, from formation to complex transactions and compliance.",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Compassionate guidance through divorce, custody, and other family matters with personalized attention.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Full-service real estate legal support for residential and commercial property transactions.",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Protect your legacy with thorough estate planning, wills, trusts, and probate services.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Aggressive defense strategies to protect your freedom and future in criminal proceedings.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4  text-white">Our Practice Areas</h2>
          <p className="text-lg text-muted-foreground leading-relaxed  text-white">
            We offer comprehensive legal services across multiple practice areas, delivering expert counsel and
            representation tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border hover:border-[#B8956A] hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-lg bg-[#F5F1E8] flex items-center justify-center mb-6 group-hover:bg-[#B8956A] transition-colors">
                  <Icon className="w-7 h-7 text-[#B8956A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
