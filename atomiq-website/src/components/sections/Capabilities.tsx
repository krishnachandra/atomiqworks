'use client'
import { motion } from 'framer-motion'
import { TrendingUp, Headset, Zap, Handshake } from 'lucide-react'

import { AtomiqLogo } from '@/components/ui/AtomiqLogo'

const capabilities = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: 'Consistent, Proven Results',
        description: 'Our success stories speak volumes. Join a roster of satisfied clients who\'ve witnessed remarkable growth with our tailored strategies.'
    },
    {
        icon: <Headset className="w-6 h-6" />,
        title: 'Dedicated Experts',
        description: 'A team of seasoned professionals dedicated to understanding your unique business needs and crafting strategies that resonate with your target audience.'
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Enterprise-Grade Technology',
        description: 'Stay ahead of the curve with our innovative use of AI and the latest industry tools, ensuring you\'re always steps ahead in the dynamic digital landscape.'
    },
    {
        icon: <Handshake className="w-6 h-6" />,
        title: 'Your Trusted Growth Partner',
        description: 'More than a vendor, we are your growth partners. We provide end-to-end support dedicated to scaling your business and driving long-term success.'
    }
]

export function Capabilities() {
    return (
        <section id="why-us" className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-light relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <span>Why choose</span>
                        <div className="flex items-center gap-2">
                            <AtomiqLogo size={42} />
                            <span className="tracking-tight">
                                <span className="font-semibold text-brand-dark">AtomIQ</span><span className="font-bold text-brand-primary">Works</span>?
                            </span>
                        </div>
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
                            className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm border border-brand-primary/10 group-hover:border-transparent">
                                {capability.icon}
                            </div>

                            <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                                {capability.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed text-sm">
                                {capability.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
