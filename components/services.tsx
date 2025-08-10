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

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
