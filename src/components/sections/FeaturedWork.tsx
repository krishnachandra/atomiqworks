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
        id: '1',
        title: 'Mirafra',
        description: "Revamped Mirafra's website to showcase a vast array of cutting-edge engineering solutions with an attractive, user-friendly design.",
        image: '/portfolio/mirafra.png' // Placeholder path
    },
    {
        id: '2',
        title: 'Idcube systems',
        description: "Crafted IDCUBE's new website to heighten brand awareness and drive sales through compelling, strategically presented security solutions.",
        image: '/portfolio/idcube.png'
    },
    {
        id: '3',
        title: 'Livprotec',
        description: "Crafted a sleek website to exhibit Livprotec's environmental solutions, highlighting their innovative approach using cutting-edge science.",
        image: '/portfolio/livprotec.png'
    },
    {
        id: '4',
        title: 'Resil',
        description: "Designed a modern digital presence for Resil to communicate their material science innovations and global impact effectively.",
        image: '/portfolio/resil.png'
    },
    {
        id: '5',
        title: 'CORD',
        description: "Developed a comprehensive platform for CORD to streamline their community outreach programs and enhance donor engagement.",
        image: '/portfolio/cord.png'
    },
    {
        id: '6',
        title: 'Scalene',
        description: "Built a robust corporate website for Scalene that reflects their leadership in energy and technology sectors with a professional aesthetic.",
        image: '/portfolio/scalene.png'
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
                                {/* In a real scenario, use Image component:
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                    {project.title} Preview
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col items-start">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-4">
                                    <button className="text-sm font-semibold text-brand-primary flex items-center gap-2 group/btn">
                                        View Case Study
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
