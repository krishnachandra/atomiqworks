'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'

interface Project {
    id: string
    title: string
    category: string
    description: string
    metrics: Array<{ label: string; value: string; icon: React.ReactNode }>
    tags: string[]
    imagePlaceholder: string
}

const projects: Project[] = [
    {
        id: '1',
        title: 'Fintech Dashboard Redesign',
        category: 'Finance',
        description: 'Enterprise-grade data visualization platform for real-time market analysis and portfolio management.',
        metrics: [
            { label: 'Faster Load', value: '3.2x', icon: <Zap className="w-4 h-4" /> },
            { label: 'User Growth', value: '+245%', icon: <Users className="w-4 h-4" /> },
            { label: 'Engagement', value: '+180%', icon: <TrendingUp className="w-4 h-4" /> }
        ],
        tags: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
        imagePlaceholder: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
    },
    {
        id: '2',
        title: 'Global Logistics Architecture',
        category: 'SaaS',
        description: 'Scalable tracking and route optimization system for international supply chain operations.',
        metrics: [
            { label: 'System Uptime', value: '99.9%', icon: <Zap className="w-4 h-4" /> },
            { label: 'Cost Reduction', value: '-40%', icon: <TrendingUp className="w-4 h-4" /> }
        ],
        tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        imagePlaceholder: 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500'
    }
]

const categories = ['All', 'Finance', 'SaaS', 'E-commerce', 'Healthcare']

export function FeaturedWork() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <section id="work" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
                    <div>
                        <motion.span
                            className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our Work
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-brand-dark"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Featured Work
                        </motion.h2>
                    </div>

                    <motion.div
                        className="flex flex-wrap gap-3 mt-6 lg:mt-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                        ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="space-y-12">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-brand-light rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10"
                        >
                            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                                {/* Image Placeholder */}
                                <div className={`${project.imagePlaceholder} rounded-xl h-80 lg:h-96 relative overflow-hidden flex items-center justify-center`}>
                                    <div className="absolute inset-0 bg-black/10" />
                                    <div className="relative z-10 text-white text-center p-6">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                            <ArrowRight className="w-10 h-10" />
                                        </div>
                                        <p className="text-sm font-medium opacity-80">View Full Case Study</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center">
                                    <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-3">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                        {project.metrics.map((metric, i) => (
                                            <div key={i} className="bg-white rounded-lg p-4 border border-slate-100">
                                                <div className="flex items-center gap-2 text-brand-primary mb-1">
                                                    {metric.icon}
                                                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                        {metric.label}
                                                    </span>
                                                </div>
                                                <div className="text-2xl font-bold text-brand-dark">
                                                    {metric.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
