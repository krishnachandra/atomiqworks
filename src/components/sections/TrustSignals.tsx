'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

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


export function TrustSignals() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
            <div className="max-w-7xl mx-auto">
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
