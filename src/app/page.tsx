// Force Vercel deploy
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { StatsBanner } from '@/components/sections/StatsBanner'
import { Capabilities } from '@/components/sections/Capabilities'
import { Process } from '@/components/sections/Process'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { Philosophy } from '@/components/sections/Philosophy'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-secondary/30">
      <Navbar />
      <Hero />
      <StatsBanner />
      <Capabilities />
      <Process />
      <TrustSignals />
      <Contact />
      <Footer />
    </main>
  )
}
