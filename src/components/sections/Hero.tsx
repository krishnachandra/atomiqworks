'use client'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { PortfolioCarousel } from '@/components/ui/PortfolioCarousel'
import Image from 'next/image'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-brand-light">
            {/* 3D Space Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    transform: 'perspective(500px) rotateX(2deg) scale(1.1)',
                    transformOrigin: 'top center'
                }}
            >
                {/* Vignette Mask for Depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
            </div>

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.15, 0.05],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
                >
                    {/* Left Column: Text Content */}
                    <div className="max-w-2xl">


                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark leading-[1.05] mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Digital Experiences <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Engineered for Impact</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            We design and build high-performance <span className="font-bold text-slate-800">websites, platforms, and experiences</span> for ambitious brands.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 mb-8 text-lg font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {["Design.", "Engineer.", "Launch.", "Scale."].map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.2), duration: 0.5 }}
                                    className={`${i === 3 ? "text-brand-primary font-bold" : "text-slate-700"}`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Button size="md" variant="primary">Let's Talk</Button>
                        </motion.div>

                        {/* Contact Icons */}
                        <motion.div
                            className="flex items-center gap-10 mt-10"
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
