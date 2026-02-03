'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

// Data for portfolio items
const portfolioItems = [
    {
        id: 1,
        title: "EZ Cut Media",
        category: "Media Production",
        color: "from-orange-500 to-amber-600",
        image: "/portfolio/ez-cut-media.png"
    },
    {
        id: 2,
        title: "Krishna Chandra Nuti",
        category: "Personal Portfolio",
        color: "from-blue-600 to-slate-800",
        image: "/portfolio/krishna-portfolio.png"
    },
    {
        id: 3,
        title: "Health & Wellness App",
        category: "Healthcare",
        color: "from-rose-400 to-pink-600",
        image: null
    },
    {
        id: 4,
        title: "Real Estate Portal",
        category: "Property",
        color: "from-amber-400 to-orange-600",
        image: null
    },
    {
        id: 5,
        title: "SaaS Analytics",
        category: "Technology",
        color: "from-violet-500 to-purple-700",
        image: null
    }
]

export function PortfolioCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % portfolioItems.length)
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
    }

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-lg h-[300px] md:h-[350px]">
                <AnimatePresence initial={false}>
                    {portfolioItems.map((item, index) => {
                        // Calculate relative position based on active index
                        let offset = (index - activeIndex + portfolioItems.length) % portfolioItems.length;

                        // Adjust offset to be centered around 0 (-2, -1, 0, 1, 2)
                        if (offset > 2) offset -= portfolioItems.length;

                        const isActive = offset === 0;
                        const isNext = offset === 1;
                        const isPrev = offset === -1;
                        const isFarNext = offset === 2;
                        const isFarPrev = offset === -2;

                        // Configure styles based on position
                        let zIndex = 0;
                        let x = '0%';
                        let scale = 0.6;
                        let opacity = 0;
                        let rotateY = 0;

                        if (isActive) {
                            zIndex = 30;
                            scale = 1;
                            opacity = 1;
                            x = '0%';
                        } else if (isNext) {
                            zIndex = 20;
                            scale = 0.7; // Reduced neighbor scale
                            opacity = 0.6;
                            x = '25%'; // Much tighter spacing
                            rotateY = -15;
                        } else if (isPrev) {
                            zIndex = 20;
                            scale = 0.7; // Reduced neighbor scale
                            opacity = 0.6;
                            x = '-25%'; // Much tighter spacing (pulls away from text)
                            rotateY = 15;
                        } else if (isFarNext) {
                            zIndex = 10;
                            scale = 0.5;
                            opacity = 0.3;
                            x = '50%';
                            rotateY = -30;
                        } else if (isFarPrev) {
                            zIndex = 10;
                            scale = 0.5;
                            opacity = 0.3;
                            x = '-50%';
                            rotateY = 30;
                        }

                        return (
                            <motion.div
                                key={item.id}
                                className="absolute top-0 left-0 right-0 mx-auto w-full h-full rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                                initial={false}
                                animate={{
                                    zIndex,
                                    x,
                                    scale,
                                    opacity,
                                    rotateY
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    width: '100%',
                                    maxWidth: '100%', // ensure it doesn't overflow container
                                }}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Card Content */}
                                <div className={`w-full h-full relative group bg-gradient-to-br ${!item.image ? item.color : 'from-slate-800 to-slate-900'} p-6 flex flex-col justify-end text-white overflow-hidden`}>

                                    {/* Background Image */}
                                    {item.image && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 500px"
                                            />
                                            {/* Dark Overlay for readability */}
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                                        </div>
                                    )}

                                    {/* Glassmorphism Overlay (Bottom Text) */}
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

                                    {/* Mock Browser UI Top Bar */}
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center px-4 gap-1.5 rounded-t-2xl z-20 border-b border-white/10">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                    </div>

                                    <div className="relative z-20 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                                        <span className="inline-block px-3 py-1 bg-brand-primary/80 backdrop-blur-md rounded-full text-xs font-semibold mb-3 border border-white/10 shadow-lg">
                                            {item.category}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{item.title}</h3>
                                        <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-secondary">
                                            View Case Study <ExternalLink className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-4 z-40">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-colors text-slate-800"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-colors text-slate-800"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                {portfolioItems.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-brand-primary' : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
