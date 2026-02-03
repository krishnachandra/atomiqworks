'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        quote: "AtomIQ Works transformed our entire digital presence. The team's attention to detail and technical expertise is unmatched.",
        author: "Sarah Chen",
        role: "VP of Product, TechFlow",
        rating: 5
    },
    {
        quote: "Working with AtomIQ Works felt like having an extension of our own team. They delivered beyond expectations.",
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
    'TechFlow', 'PayScale', 'GreenRoute', 'DataViz', 'CloudSync', 'FinanceX'
]

const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
    'AWS', 'Vercel', 'Tailwind', 'Framer Motion', 'GraphQL'
]

const metrics = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '12+', label: 'Industry Awards' },
    { value: '98%', label: 'Satisfaction Rate' }
]

export function TrustSignals() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
            <div className="max-w-7xl mx-auto">
                {/* Testimonials */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <motion.span
                            className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Client Voices
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-brand-dark"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Trusted by Industry Leaders
                        </motion.h2>
                    </div>

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

                {/* Client Logos */}
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8 font-semibold">
                        Trusted By
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {clientLogos.map((logo, idx) => (
                            <div
                                key={idx}
                                className="text-2xl font-bold text-slate-300 hover:text-brand-primary transition-colors"
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {metrics.map((metric, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 text-center border border-slate-100"
                        >
                            <div className="text-4xl font-bold text-brand-primary mb-2">
                                {metric.value}
                            </div>
                            <div className="text-sm text-slate-600 font-medium">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8 font-semibold">
                        Technologies We Master
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:border-brand-primary/30 hover:text-brand-primary transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
