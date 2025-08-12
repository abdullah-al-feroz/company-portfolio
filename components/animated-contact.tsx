"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Globe } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "zenbytesolutionsbd@gmail.com",
    description: "Drop us a line anytime",
    color: "bg-blue-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 5pm",
    color: "bg-green-500",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Dhaka, Bangladesh",
    description: "Come say hello at our HQ",
    color: "bg-purple-500",
  },
  {
    icon: Globe,
    title: "Remote",
    value: "Worldwide",
    description: "We work with global clients",
    color: "bg-orange-500",
  },
]

const projectTypes = ["Web Application", "Mobile App", "E-commerce", "API Development", "Cloud Migration", "Other"]

const budgetRanges = ["$5K - $10K", "$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K+"]

export function AnimatedContact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Let's Start a Conversation
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get In{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Touch
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help
            you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ways to Reach Us
              </motion.h3>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                    }}
                    className="group"
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center relative overflow-hidden`}
                            whileHover={{
                              rotate: 360,
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/20"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                            <info.icon className="h-6 w-6 text-white relative z-10" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-gray-800 font-medium">{info.value}</p>
                            <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold mb-4">Why Choose ZenByte?</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "24h", label: "Response Time" },
                  { number: "50+", label: "Projects Done" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "5+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="text-2xl font-bold"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255, 255, 255, 0)",
                          "0 0 20px rgba(255, 255, 255, 0.8)",
                          "0 0 0px rgba(255, 255, 255, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
                <motion.div
                  className="h-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-gray-900 flex items-center">
                    <Calendar className="w-8 h-8 mr-3 text-emerald-600" />
                    Start Your Project
                  </CardTitle>
                  <p className="text-gray-600 mt-2">Tell us about your vision and we'll bring it to life</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "firstName", label: "First Name", placeholder: "John" },
                      { id: "lastName", label: "Last Name", placeholder: "Doe" },
                    ].map((field, index) => (
                      <motion.div
                        key={field.id}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      >
                        <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                          {field.label}
                        </Label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            id={field.id}
                            placeholder={field.placeholder}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
                      { id: "phone", label: "Phone Number", placeholder: "+1 (555) 123-4567", type: "tel" },
                    ].map((field, index) => (
                      <motion.div
                        key={field.id}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                          {field.label}
                        </Label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Company Information */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company Name
                    </Label>
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Project Type Selection */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Label className="text-sm font-medium text-gray-700">Project Type</Label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type, index) => (
                        <motion.div
                          key={type}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300"
                          >
                            {type}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Budget Range */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Label className="text-sm font-medium text-gray-700">Budget Range</Label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range, index) => (
                        <motion.div
                          key={range}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                          >
                            {range}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Project Details
                    </Label>
                    <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements, goals, timeline, and any specific features you have in mind..."
                        rows={5}
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 resize-none"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <motion.span
                        className="flex items-center justify-center"
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(255, 255, 255, 0)",
                            "0 0 10px rgba(255, 255, 255, 0.8)",
                            "0 0 0px rgba(255, 255, 255, 0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        Send Message
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </motion.span>
                    </Button>
                  </motion.div>

                  {/* Response Time Notice */}
                  <motion.div
                    className="text-center text-sm text-gray-500 bg-gray-50 rounded-lg p-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <Clock className="w-4 h-4 inline mr-2" />
                    We typically respond within 24 hours
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
