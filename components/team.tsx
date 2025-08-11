import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Lead Developer",
    image: "/testimonial-avatar-4.png",
    bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
  },
  {
    name: "Sarah Johnson",
    role: "CTO & System Architect",
    image: "/placeholder-jom6f.png",
    bio: "Expert in cloud architecture and distributed systems with a passion for innovative solutions.",
  },
  {
    name: "Rashed Sarder",
    role: "Senior Frontend Developer",
    image: "/placeholder-fdxel.png",
    bio: "UI/UX focused developer specializing in React, Next.js, and modern frontend technologies.",
  },
  {
    name: "Emily Davis",
    role: "Mobile App Developer",
    image: "/placeholder-1gwa5.png",
    bio: "Cross-platform mobile development expert with expertise in React Native and Flutter.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of developers and designers are passionate about creating exceptional software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <Github className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
