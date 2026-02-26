'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Project {
    id: string
    title: string
    description: string
    image: string
    link?: string
}

const projects: Project[] = [
    {
        id: '7',
        title: 'EZ Cut Media',
        description: "A dynamic and visually-driven web experience tailored for EZ Cut Media to highlight their world-class media production and creative capabilities.",
        image: '/portfolio/ezcutmedia.png',
        link: 'https://www.ezcutmedia.com'
    },
    {
        id: '8',
        title: 'Paratpara Satakam',
        description: "A serene, beautifully structured website developed for Paratpara Satakam, focusing on cultural depth, easy navigation, and elegant aesthetics.",
        image: '/portfolio/paratparasatakam.png',
        link: 'https://www.paratparasatakam.com'
    },
    {
        id: '9',
        title: 'Feedback India',
        description: "A seamless and functional platform engineered for Feedback India to streamline user insights and data collection efficiently.",
        image: '/portfolio/feedbackindia.png',
        link: 'https://www.feedbackindia.in'
    },
    {
        id: '10',
        title: 'Telugu Voice',
        description: "A modern and engaging news portal designed for Telugu Voice, featuring robust content delivery and an intuitive reading experience.",
        image: '/portfolio/teluguvoice.png',
        link: 'https://www.teluguvoice.com'
    },
    {
        id: '11',
        title: 'DavinciOps',
        description: "A high-performance corporate site crafted for DavinciOps, showcasing their advanced cloud solutions and technical expertise.",
        image: '/portfolio/davinciops.png',
        link: 'https://www.davinciops.com'
    },
    {
        id: '12',
        title: 'Moody Mushrooms',
        description: "An earthy, engaging e-commerce and informational hub dedicated to premium mushroom products with a seamless shopping experience.",
        image: '/portfolio/moodymushrooms.png',
        link: 'https://www.moodymushrooms.com'
    }
]

export function FeaturedWork() {
    return (
        <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-brand-dark mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Work
                    </motion.h2>
                    <motion.p
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        We build digital experiences that drive results.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                {/* Using a placeholder gradient if image fails/is missing for now */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-500" />

                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium z-10">
                                        {project.title} Preview
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col items-start">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto pt-4 group/link">
                                        <span className="text-sm font-semibold text-brand-primary flex items-center gap-2">
                                            Visit Website
                                            <ArrowRight className="w-4 h-4 group-hover/link:-rotate-45 transition-transform" />
                                        </span>
                                    </a>
                                ) : null}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
