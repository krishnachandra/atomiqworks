'use client'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FeaturedWork } from '@/components/sections/FeaturedWork'

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-secondary/30">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <FeaturedWork />
            </div>
            <Footer />
        </main>
    )
}
