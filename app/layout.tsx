import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingScreen } from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZenByte - Innovative Software Solutions",
  description: "We craft cutting-edge software solutions that transform businesses and drive digital innovation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
