'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

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
    },
    {
        quote: "Their deep understanding of enterprise systems helped us modernize our legacy platform seamlessly. Truly world-class delivery.",
        author: "Rajesh Sharma",
        role: "Director of Engineering, FinServe India",
        rating: 5
    },
    {
        quote: "AtomIQWorks brought our vision to life with a stunning UI and rock-solid backend. The project was delivered ahead of schedule.",
        author: "Priya Nair",
        role: "Co-Founder, HealthBridge",
        rating: 5
    },
    {
        quote: "From ideation to deployment, the team was hands-on and proactive. They anticipated challenges before we even saw them.",
        author: "David Park",
        role: "Head of Digital, NovaRetail",
        rating: 5
    },
    {
        quote: "We needed a partner who could scale fast without compromising quality. AtomIQWorks exceeded every benchmark we set.",
        author: "Ananya Desai",
        role: "VP of Technology, CloudNine Solutions",
        rating: 5
    },
    {
        quote: "Their expertise in building high-performance web applications is second to none. Our platform handles 10x the traffic now.",
        author: "Vikram Mehta",
        role: "CTO, QuickCommerce",
        rating: 5
    },
    {
        quote: "A rare combination of creative design and solid engineering. AtomIQWorks delivered a product our customers genuinely love.",
        author: "Laura Kim",
        role: "Product Lead, EduSpark",
        rating: 5
    }
]


export function TrustSignals() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
            <div className="max-w-7xl mx-auto">
                {/* Testimonials */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-brand-dark"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            What Our Clients Think?
                        </motion.h2>
                    </div>

                    {/* Scrollable container with nav buttons */}
                    <div className="relative">
                        {/* Left Button */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Right Button */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Scrollable row */}
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-2 snap-x snap-mandatory"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {testimonials.map((testimonial, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[340px] md:w-[380px] snap-start"
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

            </div>
        </section >
    )
}
