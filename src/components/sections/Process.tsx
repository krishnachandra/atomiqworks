'use client'
import { motion } from 'framer-motion'
import { Search, Palette, Code2, Rocket } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: <Search className="w-6 h-6" />,
        title: 'Discover',
        description: 'Deep dive into your business, users, and competitive landscape to uncover opportunities.',
        details: ['Stakeholder interviews', 'User research', 'Market analysis', 'Technical audit']
    },
    {
        number: '02',
        icon: <Palette className="w-6 h-6" />,
        title: 'Design',
        description: 'Craft thoughtful, user-centered interfaces aligned with your brand and business goals.',
        details: ['Wireframing', 'Visual design', 'Prototyping', 'User testing']
    },
    {
        number: '03',
        icon: <Code2 className="w-6 h-6" />,
        title: 'Build',
        description: 'Engineer robust, scalable solutions with clean code and modern best practices.',
        details: ['Frontend development', 'Backend architecture', 'API integration', 'Quality assurance']
    },
    {
        number: '04',
        icon: <Rocket className="w-6 h-6" />,
        title: 'Scale',
        description: 'Launch with confidence, monitor performance, and iterate based on real-world data.',
        details: ['Deployment', 'Performance monitoring', 'Analytics setup', 'Ongoing optimization']
    }
]

export function Process() {
    return (
        <section id="process" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span
                        className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-brand-dark mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        A proven framework that delivers results, every time
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                {/* Step Card */}
                                <div className="bg-brand-light rounded-2xl p-8 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                                    {/* Number Badge */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xl mb-6 relative z-10">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-brand-primary mb-4 shadow-sm">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-brand-dark mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Details List */}
                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-slate-500"
                                            >
                                                <div className="w-1 h-1 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
