"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Star, Calendar, Users, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const portfolioCategories = ["All", "Web Apps", "Mobile Apps", "E-commerce", "SaaS", "AI/ML"]

const portfolioItems = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Platform",
    category: "Web Apps",
    description:
      "A comprehensive platform for tracking and managing environmental impact with real-time analytics and reporting.",
    image: "/portfolio-ecotrack.png",
    technologies: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
    features: ["Real-time Analytics", "Carbon Footprint Tracking", "Team Collaboration", "Custom Reports"],
    stats: { users: "10K+", rating: 4.9, duration: "6 months" },
    links: { live: "#", github: "#" },
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "FinanceFlow - Banking App",
    category: "Mobile Apps",
    description: "Modern mobile banking application with advanced security features and intuitive user experience.",
    image: "/portfolio-financeflow.png",
    technologies: ["React Native", "TypeScript", "Firebase", "Stripe", "Biometrics"],
    features: ["Biometric Auth", "Real-time Transactions", "Budget Planning", "Investment Tracking"],
    stats: { users: "50K+", rating: 4.8, duration: "8 months" },
    links: { live: "#", github: "#" },
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "ShopSphere - E-commerce Platform",
    category: "E-commerce",
    description: "Full-featured e-commerce platform with AI-powered recommendations and seamless checkout experience.",
    image: "/portfolio-shopsphere.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Redis"],
    features: ["AI Recommendations", "Multi-vendor Support", "Advanced Search", "Analytics Dashboard"],
    stats: { users: "25K+", rating: 4.7, duration: "10 months" },
    links: { live: "#", github: "#" },
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "CloudSync - File Management",
    category: "SaaS",
    description: "Enterprise-grade file management and collaboration platform with advanced sharing capabilities.",
    image: "/portfolio-cloudsync.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3", "WebRTC"],
    features: ["Real-time Collaboration", "Version Control", "Advanced Permissions", "Video Calls"],
    stats: { users: "15K+", rating: 4.9, duration: "7 months" },
    links: { live: "#", github: "#" },
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 5,
    title: "MindAI - Chatbot Platform",
    category: "AI/ML",
    description: "Intelligent chatbot platform powered by advanced AI for customer service automation.",
    image: "/portfolio-mindai.png",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
    features: ["Natural Language Processing", "Multi-language Support", "Analytics", "Custom Training"],
    stats: { users: "5K+", rating: 4.8, duration: "9 months" },
    links: { live: "#", github: "#" },
    color: "from-orange-500 to-red-600",
  },
  {
    id: 6,
    title: "HealthHub - Medical Platform",
    category: "Web Apps",
    description: "Comprehensive healthcare management system for patients and medical professionals.",
    image: "/portfolio-healthhub.png",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
    features: ["Appointment Scheduling", "Medical Records", "Telemedicine", "Prescription Management"],
    stats: { users: "30K+", rating: 4.9, duration: "12 months" },
    links: { live: "#", github: "#" },
    color: "from-teal-500 to-green-600",
  },
]

export function AnimatedPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="outline" className="px-4 py-2 text-purple-600 border-purple-200 bg-purple-50">
              <Eye className="w-4 h-4 mr-2" />
              Our Work
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Portfolio
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our latest projects and see how we've helped businesses transform their digital presence with
            innovative solutions and cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {portfolioCategories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden group h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${item.color}`}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  />

                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/placeholder_image.png?height=300&width=400&text=${encodeURIComponent(item.title)}`}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex space-x-2">
                          <motion.button
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4 text-gray-700" />
                          </motion.button>
                          <motion.button
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-4 h-4 text-gray-700" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <motion.div
                    className="mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Badge variant="secondary" className="text-xs font-medium">
                      {item.category}
                    </Badge>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-4 flex-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    className="flex items-center justify-between text-xs text-gray-500 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{item.stats.users}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span>{item.stats.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.stats.duration}</span>
                    </div>
                  </motion.div>

                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-300`}
                      size="sm"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p
              className="text-lg mb-6 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's discuss how we can bring your vision to life with our expertise and creativity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
