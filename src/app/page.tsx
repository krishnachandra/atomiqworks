// Force Vercel deploy
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Capabilities } from '@/components/sections/Capabilities'
import { Process } from '@/components/sections/Process'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { Philosophy } from '@/components/sections/Philosophy'
import { Contact } from '@/components/sections/Contact'

import { StatsBanner } from '@/components/sections/StatsBanner'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-secondary/30">
      <Navbar />
      <Hero />
      <StatsBanner />
      <FeaturedWork />
      <Capabilities />
      <Process />
      <TrustSignals />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}
