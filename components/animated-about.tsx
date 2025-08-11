"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Zap, Target, Heart, Code2, Rocket } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Agile Development",
    description: "Fast, iterative development cycles",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Scalable and maintainable solutions",
  },
  {
    icon: Target,
    title: "On-Time Delivery",
    description: "Regular updates and milestone tracking",
  },
  {
    icon: Heart,
    title: "Post-Launch Care",
    description: "Ongoing maintenance and support",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and optimization",
  },
]

const achievements = [
  {
    number: "50+",
    label: "Projects Completed",
    description: "Successful deliveries across industries",
    color: "from-emerald-500 to-teal-600",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Happy clients who return for more",
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "5+",
    label: "Years Experience",
    description: "Proven track record in software development",
    color: "from-purple-500 to-pink-600",
  },
  {
    number: "24h",
    label: "Response Time",
    description: "Quick turnaround on all communications",
    color: "from-orange-500 to-red-600",
  },
]

const values = [
  {
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
    icon: "🚀",
  },
  {
    title: "Client Partnership",
    description: "Your success is our success. We work as an extension of your team.",
    icon: "🤝",
  },
  {
    title: "Quality Excellence",
    description: "Every line of code is crafted with precision and tested thoroughly.",
    icon: "⭐",
  },
  {
    title: "Transparent Process",
    description: "Clear communication and regular updates throughout the development journey.",
    icon: "🔍",
  },
]

export function AnimatedAbout() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
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
          className="text-center space-y-6 mb-20"
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
            <Badge variant="outline" className="px-4 py-2 text-emerald-600 border-emerald-200 bg-emerald-50">
              <Rocket className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">ZenByte</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Images and Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-visible p-12">
              {/* Main Image */}
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}>
                <motion.div
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      "0 35px 60px -12px rgba(16, 185, 129, 0.4)",
                      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Image
                    src="/modern-dev-collaboration.png"
                    alt="ZenByte Team Collaboration"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-30"
                initial={{ opacity: 0, scale: 0, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)",
                }}
                style={{
                  zIndex: 30,
                  filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-emerald-600"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    5+
                  </motion.div>
                  <div className="text-sm text-gray-700 font-semibold">Years</div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl text-white z-30"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                }}
                style={{
                  zIndex: 30,
                  filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255, 255, 255, 0)",
                        "0 0 20px rgba(255, 255, 255, 0.8)",
                        "0 0 0px rgba(255, 255, 255, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    98%
                  </motion.div>
                  <div className="text-sm font-semibold opacity-95">Client</div>
                  <div className="text-xs opacity-80">Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.h3
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Crafting Digital Excellence Since 2019
              </motion.h3>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Founded with a vision to bridge the gap between innovative ideas and cutting-edge technology, ZenByte
                has evolved into a trusted partner for businesses seeking digital transformation. Our journey began with
                a simple belief: great software should be both powerful and elegant.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Today, we're a team of passionate developers, designers, and strategists who work collaboratively to
                deliver solutions that don't just meet expectations—they exceed them. Every project is an opportunity to
                push boundaries and create something extraordinary.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      backgroundColor: "#10b981",
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-5 w-5 text-emerald-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More About Our Process
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    >
                      {achievement.number}
                    </motion.div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {achievement.label}
                    </h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl font-bold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Core Values
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            These principles guide everything we do and shape how we work with our clients
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
              >
                <motion.div
                  className="text-3xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {value.icon}
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}