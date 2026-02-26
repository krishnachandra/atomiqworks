'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
    {
        quote: "AtomIQWorks transformed our entire digital presence. The team's attention to detail and technical expertise is unmatched.",
        author: "Sarah Chen",
        role: "VP of Product, TechFlow",
        rating: 5
    },
    {
        quote: "Working with AtomIQWorks felt like having an extension of our own team. They delivered beyond expectations.",
        author: "Michael Rodriguez",
        role: "CTO, PayScale Systems",
        rating: 5
    },
    {
        quote: "The results speak for themselves - 3x performance improvement and our users love the new experience.",
        author: "Emily Thompson",
        role: "Founder, GreenRoute",
        rating: 5
    }
]

const clientLogos = [
    { src: "/clients/verizon.png", alt: "Verizon" },
    { src: "/clients/Allianz.png", alt: "Allianz" },
    { src: "/clients/axa.png", alt: "AXA" },
    { src: "/clients/future.png", alt: "Future Generali" },
    { src: "/clients/ABG.png", alt: "Aditya Birla Group" },
    { src: "/clients/ML.png", alt: "MetLife" },
    { src: "/clients/AIA.png", alt: "AIA" },
    { src: "/clients/Cigna.png", alt: "Cigna" },
    { src: "/clients/TCS.png", alt: "TCS" },
    { src: "/clients/TW.jpg", alt: "Thoughtworks" },
    { src: "/clients/PE.png", alt: "PE" },
    { src: "/clients/LP.png", alt: "LP" },
    { src: "/clients/ST.webp", alt: "ST" },
    { src: "/clients/SU.png", alt: "SU" },
    { src: "/clients/AS.jpg", alt: "AS" },
    { src: "/clients/V.jpg", alt: "V" },
    { src: "/clients/VH.webp", alt: "VH" },
    { src: "/clients/WFM.png", alt: "WFM" },
    { src: "/clients/freshersworld.png", alt: "Freshersworld" },
]


export function TrustSignals() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
            <div className="max-w-7xl mx-auto">

                {/* Client Logo Marquee */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <motion.span
                            className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our Clients
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-brand-dark"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Brands We've Worked With
                        </motion.h2>
                    </div>

                    {/* Infinite Scroll Marquee */}
                    <div className="relative overflow-hidden py-8">
                        {/* Gradient fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none" />

                        <div className="flex animate-marquee gap-16 items-center">
                            {/* First set */}
                            {clientLogos.map((logo, idx) => (
                                <div
                                    key={`a-${idx}`}
                                    className="flex-shrink-0 w-24 h-16 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {clientLogos.map((logo, idx) => (
                                <div
                                    key={`b-${idx}`}
                                    className="flex-shrink-0 w-24 h-16 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-24">
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300"
                            >
                                <Quote className="w-8 h-8 text-brand-primary/20 mb-4" />

                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                                    ))}
                                </div>

                                <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                                    "{testimonial.quote}"
                                </p>

                                <div>
                                    <div className="font-bold text-brand-dark">{testimonial.author}</div>
                                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section >
    )
}
