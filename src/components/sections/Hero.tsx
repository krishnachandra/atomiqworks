'use client'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-light">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            >
                {/* Fading Mask */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-light" />
            </div>

            {/* Abstract Gradient Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-8 tracking-wide">
                            PREMIUM DIGITAL AGENCY
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-dark leading-[1.05] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Engineering the <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Future of Digital</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We build scalable, high-performance digital experiences for ambitious brands that demand excellence.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button size="lg" variant="primary">Start a Project</Button>
                        <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm">View Our Work</Button>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-slate-200/60 pt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div>
                        <div className="text-3xl font-bold text-brand-dark mb-1">150+</div>
                        <div className="text-sm text-slate-500 font-medium tracking-wide">Projects Delivered</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-brand-dark mb-1">98%</div>
                        <div className="text-sm text-slate-500 font-medium tracking-wide">Client Retention</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-brand-dark mb-1">40%</div>
                        <div className="text-sm text-slate-500 font-medium tracking-wide">Avg. ROI Increase</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-brand-dark mb-1">12+</div>
                        <div className="text-sm text-slate-500 font-medium tracking-wide">Industry Awards</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
