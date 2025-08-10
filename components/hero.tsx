import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Innovative Software
                <span className="text-emerald-600"> Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We craft cutting-edge software solutions that transform businesses and drive digital innovation. From
                web applications to mobile apps, we bring your ideas to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/software-team-coding.png"
                alt="ZenByte Software Development"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
