'use client'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { PortfolioCarousel } from '@/components/ui/PortfolioCarousel'
import Image from 'next/image'

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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Text Content */}
                    <div className="max-w-2xl">
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
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark leading-[1.05] mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Engineering the <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Future of Digital</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed"
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

                        {/* Contact Icons */}
                        <motion.div
                            className="flex items-center gap-6 mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/918074535932"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group hover:opacity-80 transition-opacity"
                            >
                                <div className="relative w-12 h-12 hover:scale-110 transition-transform duration-300 drop-shadow-md">
                                    <Image
                                        src="/icons/whatsapp.png"
                                        alt="WhatsApp"
                                        fill
                                        className="object-contain"
                                        sizes="48px"
                                    />
                                </div>
                            </a>

                            {/* Call (Horizontal Flip + Clockwise Rotation) */}
                            <a
                                href="tel:+918074535932"
                                className="group hover:opacity-80 transition-opacity"
                            >
                                <div className="hover:scale-110 transition-transform duration-300">
                                    <div className="relative w-8 h-8 drop-shadow-md rotate-12">
                                        <Image
                                            src="/icons/phone.png"
                                            alt="Call"
                                            fill
                                            className="object-contain mix-blend-multiply"
                                            sizes="32px"
                                        />
                                    </div>
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:atomiqworks@gmail.com"
                                className="group hover:opacity-80 transition-opacity"
                            >
                                <div className="relative w-12 h-12 hover:scale-110 transition-transform duration-300 drop-shadow-md">
                                    <Image
                                        src="/icons/email.png"
                                        alt="Email"
                                        fill
                                        className="object-contain"
                                        sizes="48px"
                                    />
                                </div>
                            </a>
                        </motion.div>

                        {/* Stats - moved inside left column for layout balance */}
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-slate-200/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div>
                                <div className="text-2xl font-bold text-brand-dark mb-0.5">150+</div>
                                <div className="text-xs text-slate-500 font-medium tracking-wide">Projects</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-brand-dark mb-0.5">98%</div>
                                <div className="text-xs text-slate-500 font-medium tracking-wide">Retention</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-brand-dark mb-0.5">40%</div>
                                <div className="text-xs text-slate-500 font-medium tracking-wide">ROI Increase</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: 3D Carousel */}
                    <motion.div
                        className="relative z-20 h-[500px] flex items-center justify-center lg:justify-end lg:pl-16"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Decorative background element behind carousel */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5 rounded-full blur-3xl -z-10" />

                        <PortfolioCarousel />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
