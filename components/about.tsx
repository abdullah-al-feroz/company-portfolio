import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Agile development methodology",
  "24/7 technical support",
  "Scalable and maintainable code",
  "Regular progress updates",
  "Post-launch maintenance",
  "Competitive pricing",
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/modern-dev-collaboration.png"
              alt="ZenByte Team at Work"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">About ZenByte</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between innovative ideas and cutting-edge technology, ZenByte
                has been at the forefront of software development for over 5 years.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced developers, designers, and project managers work collaboratively to deliver
                solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
