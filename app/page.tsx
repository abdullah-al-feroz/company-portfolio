import { AnimatedHeader } from "@/components/animated-header"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedServices } from "@/components/animated-services"
import { AnimatedAbout } from "@/components/animated-about"
import { AnimatedPortfolio } from "@/components/animated-portfolio"
import { AnimatedTeam } from "@/components/animated-team"
import { AnimatedContact } from "@/components/animated-contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />
      <main>
        <AnimatedHero />
        <AnimatedServices />
        <AnimatedAbout />
        <AnimatedPortfolio />
        <AnimatedTeam />
        <AnimatedContact />
      </main>
      <Footer />
    </div>
  )
}
