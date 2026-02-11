import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Philosophy } from '@/components/sections/Philosophy'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-secondary/30">
            <Navbar />
            <div className="pt-20"> {/* Offset for fixed navbar */}
                <Philosophy />
            </div>
            <Footer />
        </main>
    )
}
