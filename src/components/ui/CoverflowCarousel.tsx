'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// --- REAL PORTFOLIO DATA ---
const landscapes = [
    { id: 1, title: "Krishna Portfolio", type: "Personal Branding", src: "/portfolio/krishna-new.png" },
    { id: 2, title: "EZ Cut Media", type: "Video Production Agency", src: "/portfolio/ez-cut-new.png" },
    { id: 3, title: "Stirling Interiors", type: "Corporate Interior Design", src: "/portfolio/stirling.png" },
    { id: 4, title: "FooRor Events", type: "Event Management Platform", src: "/portfolio/fooror.png" },
    { id: 5, title: "Jaeco", type: "Corporate Team Page", src: "/portfolio/jaeco.png" }
]

export const CoverflowCarousel = () => {
    // Use the real data directly
    const extendedLandscapes = landscapes;

    const [activeIndex, setActiveIndex] = useState(2);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % extendedLandscapes.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isHovered]);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % extendedLandscapes.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + extendedLandscapes.length) % extendedLandscapes.length);

    const getStyle = (i: number) => {
        const length = extendedLandscapes.length;
        let diff = (i - activeIndex + length) % length;
        if (diff > length / 2) diff -= length;

        const isActive = diff === 0;
        const isRight = diff === 1;
        const isLeft = diff === -1;

        let style: any = { zIndex: 0, x: '0%', scale: 0.5, opacity: 0, filter: 'brightness(0)', rotate: 0 }

        if (isActive) {
            style = {
                zIndex: 50,
                x: '0%',
                scale: 1,
                opacity: 1,
                filter: 'brightness(1)',
                rotate: 0
            }
        } else if (isRight) {
            style = {
                zIndex: 40,
                x: '12%',
                scale: 0.85,
                opacity: 1,
                filter: 'brightness(0.6)',
                rotate: 5
            }
        } else if (isLeft) {
            style = {
                zIndex: 40,
                x: '-12%',
                scale: 0.85,
                opacity: 1,
                filter: 'brightness(0.6)',
                rotate: -5
            }
        } else {
            style = {
                zIndex: 30,
                x: diff > 0 ? '12%' : '-12%',
                scale: 0.8,
                opacity: 0,
                filter: 'brightness(0.4)',
                rotate: diff > 0 ? 5 : -5
            }
        }

        return style;
    }

    return (
        <div
            className="w-full flex flex-col items-center justify-center relative overflow-visible h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* INFO SECTION (MOVED TO TOP) */}
            <div className="absolute top-0 w-full flex flex-col items-center z-50 mb-8 pointer-events-none">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-2 pointer-events-auto"
                >
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">{extendedLandscapes[activeIndex].type}</p>
                    <h3 className="text-2xl font-bold text-slate-800">{extendedLandscapes[activeIndex].title}</h3>
                </motion.div>

                <Link href="/work" className="pointer-events-auto group flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-brand-primary transition-colors mt-2">
                    View All Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="relative w-full max-w-7xl h-[480px] flex items-center justify-center mt-20" style={{ perspective: '1000px' }}>

                {/* Navigation Arrows (Widened Spacing) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[60]">
                    <div className="w-[750px] flex justify-between">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform pointer-events-auto -translate-x-1/2 text-black"
                        >
                            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform pointer-events-auto translate-x-1/2 text-black"
                        >
                            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Slides */}
                <div
                    className="relative w-[720px] h-[400px] flex items-center justify-center"
                    style={{ perspective: '1000px' }}
                >
                    {extendedLandscapes.map((slide, i) => (
                        <motion.div
                            key={slide.id}
                            className="absolute w-[640px] aspect-video rounded-xl overflow-hidden shadow-2xl origin-center border border-white/5"
                            initial={false}
                            animate={getStyle(i)}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={() => setActiveIndex(i)}
                            style={{
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <Image src={slide.src} alt={slide.title} fill className="object-cover" />
                        </motion.div>
                    ))}
                </div>

                {/* Pagination (Dots Only - At Bottom) */}
                <div className="absolute bottom-0 z-50 flex gap-3 translate-y-full pt-4">
                    {extendedLandscapes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-brand-primary scale-125' : 'bg-slate-300 hover:bg-slate-400'}`}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
