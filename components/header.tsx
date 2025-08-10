"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">ZenByte</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Services
              </Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                About
              </Link>
              <Link href="#team" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Team
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
