'use client'
import { motion } from 'framer-motion'
import { Palette, Code, Zap, LineChart } from 'lucide-react'

const capabilities = [
    {
        icon: <Palette className="w-6 h-6" />,
        title: 'Design',
        description: 'User-first design systems, brand identity, and interface engineering for exceptional experiences.',
        skills: ['UI/UX Design', 'Design Systems', 'Branding', 'Prototyping']
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: 'Engineering',
        description: 'Scalable web applications, mobile solutions, and custom platforms built with cutting-edge tech.',
        skills: ['React/Next.js', 'TypeScript', 'Node.js', 'Cloud Infrastructure']
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Performance',
        description: 'Lightning-fast load times, optimized code, and technical SEO for maximum impact.',
        skills: ['Core Web Vitals', 'SEO', 'Optimization', 'Analytics']
    },
    {
        icon: <LineChart className="w-6 h-6" />,
        title: 'Strategy',
        description: 'Data-driven product strategy, conversion optimization, and growth roadmapping.',
        skills: ['Product Strategy', 'A/B Testing', 'Analytics', 'Growth Hacking']
    }
]

export function Capabilities() {
    return (
        <section id="capabilities" className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-light relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-brand-dark mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Capabilities
                    </motion.h2>
                    <motion.p
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Full-stack digital excellence across design, engineering, and strategy
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((capability, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                {capability.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                                {capability.title}
                            </h3>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {capability.description}
                            </p>

                            <div className="space-y-2">
                                {capability.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 text-sm text-slate-500"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
