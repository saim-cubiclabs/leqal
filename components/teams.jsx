import { Linkedin, Mail } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      title: "Senior Partner",
      specialty: "Corporate Law",
      image: "/professional-female-lawyer-in-suit.jpg",
    },
    {
      name: "James Anderson",
      title: "Managing Partner",
      specialty: "Criminal Defense",
      image: "/professional-male-lawyer.png",
    },
    {
      name: "Emily Rodriguez",
      title: "Partner",
      specialty: "Family Law",
      image: "/female-attorney-business.png",
    },
    {
      name: "Michael Chen",
      title: "Senior Associate",
      specialty: "Real Estate Law",
      image: "/professional-male-attorney.png",
    },
  ]

  return (
    <section id="team" className="py-20 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Meet Our <span className="text-[#B8956A]">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced attorneys are dedicated to providing exceptional legal representation and personalized
            service to every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-[#B8956A] hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-[#B8956A] hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-[#B8956A] font-medium mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
