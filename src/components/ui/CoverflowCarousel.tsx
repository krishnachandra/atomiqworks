'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
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

    // Touch handling
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
        // Reset
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Auto-scroll every 3 seconds
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % extendedLandscapes.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isHovered, extendedLandscapes.length]);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % extendedLandscapes.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + extendedLandscapes.length) % extendedLandscapes.length);

    const getStyle = (i: number) => {
        const length = extendedLandscapes.length;
        let diff = (i - activeIndex + length) % length;
        if (diff > length / 2) diff -= length;

        const isActive = diff === 0;
        const isRight = diff === 1;
        const isLeft = diff === -1;

        // Base style
        let style: any = {
            zIndex: 0,
            x: '0%',
            scale: 0.5,
            opacity: 0,
            filter: 'brightness(0)',
            rotate: 0,
            pointerEvents: 'none'
        }

        if (isActive) {
            style = {
                zIndex: 50,
                x: '0%',
                scale: 1,
                opacity: 1,
                filter: 'brightness(1)',
                rotate: 0,
                pointerEvents: 'auto'
            }
        } else if (isRight) {
            style = {
                zIndex: 40,
                x: '15%', // Increased slightly for visibility on mobile
                scale: 0.85,
                opacity: 1,
                filter: 'brightness(0.6)',
                rotate: 5,
                pointerEvents: 'auto'
            }
        } else if (isLeft) {
            style = {
                zIndex: 40,
                x: '-15%', // Increased slightly for visibility on mobile
                scale: 0.85,
                opacity: 1,
                filter: 'brightness(0.6)',
                rotate: -5,
                pointerEvents: 'auto'
            }
        } else {
            // Hidden slides
            style = {
                zIndex: 30,
                x: diff > 0 ? '75%' : '-75%', // Push further away
                scale: 0.7,
                opacity: 0, // Hide completely to save rendering
                filter: 'brightness(0.4)',
                rotate: diff > 0 ? 10 : -10,
                pointerEvents: 'none'
            }
        }

        return style;
    }

    return (
        <div
            className="w-full flex flex-col items-center justify-center relative overflow-visible py-8 md:py-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Carousel Container */}
            <div
                className="relative w-full max-w-7xl h-[300px] md:h-[480px] flex items-center justify-center touch-pan-y"
                style={{ perspective: '1000px' }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >

                {/* Navigation Arrows (Hidden on Mobile for cleaner look, swipe enabled) */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-[60]">
                    <div className="w-[850px] flex justify-between px-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform pointer-events-auto text-brand-dark"
                        >
                            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform pointer-events-auto text-brand-dark"
                        >
                            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Slides Container */}
                <div
                    className="relative w-full h-full flex items-center justify-center perspective-[1000px]"
                >
                    {extendedLandscapes.map((slide, i) => (
                        <motion.div
                            key={slide.id}
                            className="absolute w-[85%] md:w-[640px] aspect-video rounded-xl overflow-hidden shadow-2xl origin-center border border-white/10 bg-slate-900"
                            initial={false}
                            animate={getStyle(i)}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 25,
                                mass: 0.8 // Lower mass feels lighter/faster on mobile
                            }}
                            onClick={() => setActiveIndex(i)}
                            style={{
                                transformStyle: 'preserve-3d',
                                willChange: 'transform, opacity' // Hardware acceleration hint
                            }}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 85vw, 640px" // Optimize image loading
                                priority={i === activeIndex} // prioritize current slide
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="absolute -bottom-6 md:bottom-4 z-50 flex gap-2">
                    {extendedLandscapes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-brand-primary' : 'bg-slate-300 hover:bg-slate-400'}`}
                        />
                    ))}
                </div>
            </div>

            {/* INFO SECTION */}
            <div className="w-full flex flex-col items-center z-50 mt-10 md:mt-8 pointer-events-none relative px-4 text-center">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 pointer-events-auto"
                >
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-md text-xs font-bold uppercase tracking-wide">
                        {extendedLandscapes[activeIndex].type}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800">{extendedLandscapes[activeIndex].title}</h3>
                </motion.div>
            </div>

        </div>
    )
}
