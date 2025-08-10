"use client"

import { motion } from "framer-motion"
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
    name: "Michael Rodriguez",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export function AnimatedTeam() {
  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our talented team of developers and designers are passionate about creating exceptional software solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(16, 185, 129, 0)",
                          "0 0 0 10px rgba(16, 185, 129, 0.1)",
                          "0 0 0 0 rgba(16, 185, 129, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      className="rounded-full"
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {member.name}
                  </motion.h3>

                  <motion.p
                    className="text-emerald-600 font-medium mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    {member.role}
                  </motion.p>

                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    {member.bio}
                  </motion.p>

                  <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    {[Github, Linkedin, Twitter].map((Icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        whileHover={{
                          scale: 1.3,
                          rotate: 360,
                          color: "#10b981",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
