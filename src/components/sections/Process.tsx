'use client'
import { motion } from 'framer-motion'
import { Search, Palette, Code2, Rocket, ExternalLink } from 'lucide-react'

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
    const services = [
        "Websites", "Mobile Apps", "Portfolios", "SAAS", "Tools", "Softwares"
    ]

    return (
        <section id="process" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-brand-dark mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        What We Do?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We take every step of your digital journey strictly seriously.
                    </motion.p>
                </div>

                <div className="flex flex-col xl:flex-row items-center justify-center gap-10 mb-24 max-w-7xl mx-auto">
                    <div className="xl:w-48 flex-shrink-0 text-center xl:text-left">
                        <h3 className="text-2xl font-bold text-brand-dark">
                            Our Philosophy
                        </h3>
                    </div>

                    <div className="relative flex-grow w-full">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 bg-slate-100" />
                        {/* Animated Line Overlay */}
                        <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 overflow-hidden">
                            <motion.div
                                className="h-full w-full bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    className="relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group z-10 text-left"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center text-brand-primary shadow-sm group-hover:border-brand-primary group-hover:scale-110 transition-all duration-300 z-10 shrink-0">
                                                {step.icon}
                                            </div>

                                            <h3 className="text-xl font-bold text-brand-dark">
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services List */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-brand-dark shrink-0">
                            We Build
                        </h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.05) }}
                                    className="px-6 py-3 rounded-full bg-white border border-slate-200 text-brand-dark font-bold text-lg hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300 cursor-default"
                                >
                                    {service}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Partner Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-2xl p-8 border border-slate-100"
                >
                    <p className="text-lg text-slate-600 mb-2">
                        We also do <span className="font-semibold text-brand-dark">Social Media Marketing</span> with our partner agency
                    </p>
                    <a
                        href="https://ezcutmedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-80 transition-opacity"
                    >
                        EZ Cut Media <ExternalLink className="w-5 h-5 text-blue-600" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
