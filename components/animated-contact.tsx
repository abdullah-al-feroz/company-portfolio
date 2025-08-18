"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Globe, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

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
    value: "+88 017xxxxxx",
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

export function AnimatedContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus("error")
      setStatusMessage("Please fill in all required fields (Name, Email, and Message)")
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error")
      setStatusMessage("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      debugger
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result: any = {};
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        result = { error: await response.text() }; // fallback for HTML/text errors
      }

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(result.message || "Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.error || `Server error (${response.status}): ${result.details || "Please try again"}`
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleProjectTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }))
  }

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
                    className="group h-full"
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden h-full">
                      <CardContent className="p-6 h-full flex items-center">
                        <div className="flex items-center space-x-4 w-full">
                          <motion.div
                            className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0`}
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
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors text-lg">
                              {info.title}
                            </h4>
                            <p className="text-gray-800 font-medium text-base truncate">{info.value}</p>
                            <p className="text-sm text-gray-500 mt-1 leading-tight">{info.description}</p>
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
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Calendar className="w-8 h-8 mr-3 text-emerald-600" />
                    Start Your Project
                  </CardTitle>
                  <p className="text-gray-600 mt-2">Tell us about your vision and we'll bring it to life</p>
                </CardHeader>

                <CardContent className="space-y-6 flex-1">
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
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleInputChange}
                            placeholder={field.placeholder}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                            required
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
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleInputChange}
                            placeholder={field.placeholder}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300"
                            required={field.id === "email"}
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
                        value={formData.company}
                        onChange={handleInputChange}
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
                            className={`cursor-pointer transition-all duration-300 ${formData.projectType === type
                              ? "bg-emerald-100 border-emerald-500 text-emerald-700"
                              : "hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700"
                              }`}
                            onClick={() => handleProjectTypeSelect(type)}
                          >
                            {type}
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
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Project Details
                    </Label>
                    <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements, goals, timeline, and any specific features you have in mind..."
                        rows={5}
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 resize-none"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  {submitStatus !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center space-x-2 ${submitStatus === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleSubmit}
                    >
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
                        {isSubmitting ? "Sending..." : "Send Message"}
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
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
