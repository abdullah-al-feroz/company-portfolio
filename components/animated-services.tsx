"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Robust database architecture and optimization for high-performance data management and analytics.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation of best practices to protect your digital assets.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful and GraphQL APIs that enable seamless integration and communication between systems.",
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
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function AnimatedServices() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
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
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We offer comprehensive software development services to help your business thrive in the digital age
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{
                      rotate: 360,
                      backgroundColor: "#10b981",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                      <service.icon className="h-6 w-6 text-emerald-600" />
                    </motion.div>
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
