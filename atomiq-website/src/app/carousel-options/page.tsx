'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUp, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { BookShowcase } from '@/components/ui/BookShowcase'

// --- MOCK DATA FOR SHEET STACK ---
const projects = [
    { id: 1, title: 'EZ Cut Media', category: 'Video Production', image: '/portfolio/ez-cut-media.png', color: '#1a1a1a' },
    { id: 2, title: 'Krishna Portfolio', category: 'Personal Brand', image: '/portfolio/krishna-portfolio.png', color: '#0f172a' },
    { id: 3, title: 'Neon Flux', category: 'SaaS Platform', image: '/portfolio/ez-cut-media.png', color: '#064e3b' },
    { id: 4, title: 'Velvet Space', category: 'Architecture', image: '/portfolio/krishna-portfolio.png', color: '#451a03' },
]

// --- MOCK DATA FOR CINEMATIC LANDSCAPE ---
const landscapes = [
    { id: 1, title: "Rugged Coastline", src: "/landscapes/coastline.png" },
    { id: 2, title: "Starry Night", src: "/landscapes/starry.png" },
    { id: 3, title: "Rocky Stacks", src: "/landscapes/stacks.png" },
]

// [OPTION 1] THE SHEET STACK
const SheetStackSlider = () => {
    const [index, setIndex] = useState(0);
    const nextCard = () => setIndex((prev) => (prev + 1) % projects.length);
    useEffect(() => { const t = setInterval(nextCard, 3500); return () => clearInterval(t); }, []);

    return (
        <div className="h-[600px] w-full flex items-center justify-center relative overflow-hidden bg-slate-100 rounded-3xl border border-slate-200">
            <div className="relative w-[340px] md:w-[450px] aspect-[3/4] md:h-[450px]">
                {projects.map((project, i) => {
                    const isCurrent = i === index;
                    const isPrev = i === (index - 1 + projects.length) % projects.length;

                    let zIndex = 0;
                    let initial = {};
                    let animate = {};

                    if (isCurrent) {
                        zIndex = 30;
                        animate = { y: 0, scale: 1, opacity: 1 };
                        initial = { y: '100%' };
                    } else if (isPrev) {
                        zIndex = 10;
                        animate = { scale: 0.95, y: -20, opacity: 1 };
                        initial = { y: 0, scale: 1 };
                    } else {
                        zIndex = 40;
                        animate = { opacity: 0 };
                        initial = { y: '100%' };
                    }

                    return (
                        <motion.div
                            key={project.id}
                            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-[#0f1115]"
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{ zIndex: isCurrent ? 30 : isPrev ? 10 : 0 }}
                        >
                            <Image src={project.image} alt={project.title} fill className="object-cover opacity-90" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">Project 0{project.id}</p>
                                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <button onClick={nextCard} className="absolute bottom-10 z-50 bg-white text-black px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                Next Slide <ArrowUp size={16} />
            </button>
        </div>
    )
}

// [OPTION 2] CINEMATIC LANDSCAPE CAROUSEL
const CinematicLandscapeCarousel = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % landscapes.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + landscapes.length) % landscapes.length);

    return (
        <div className="w-full bg-black py-20 px-4 md:px-0 flex flex-col items-center justify-center relative overflow-hidden rounded-3xl">
            <div className="flex items-center gap-4 md:gap-12 relative z-10 max-w-7xl w-full justify-center">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all bg-black/50 backdrop-blur-sm shrink-0"
                >
                    <ChevronLeft size={32} />
                </button>
                <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={index}
                            className="relative w-full h-full"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Image src={landscapes[index].src} alt={landscapes[index].title} fill className="object-cover" priority />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-8">
                                <h3 className="text-white font-light text-2xl tracking-widest uppercase opacity-80">{landscapes[index].title}</h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all bg-black/50 backdrop-blur-sm shrink-0"
                >
                    <ChevronRight size={32} />
                </button>
            </div>
            <div className="mt-8 flex gap-3">
                {landscapes.map((_, i) => (
                    <button key={i} onClick={() => setIndex(i)} className={`transition-all duration-300 rounded-full h-2 ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`} />
                ))}
            </div>
        </div>
    )
}

// [OPTION 3] COVEFLOW DEPTH STACK (FIXED: Refined UI)
const CoverflowCarousel = () => {
    // Extended data for 5 items
    const extendedLandscapes = [
        ...landscapes,
        { id: 4, title: "Deep Forest", src: "/landscapes/coastline.png" },
        { id: 5, title: "Desert Dunes", src: '/landscapes/starry.png' }
    ];

    const [activeIndex, setActiveIndex] = useState(2);

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
        <div className="w-full bg-[#111] py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden rounded-3xl min-h-[800px]">

            <div className="relative w-full max-w-7xl h-[600px] flex items-center justify-center" style={{ perspective: '1000px' }}>

                {/* Navigation Arrows (Docked to Edges) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                    <div className="w-[800px] flex justify-between">
                        <button
                            onClick={prevSlide}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform pointer-events-auto -translate-x-1/2 text-black"
                        >
                            <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform pointer-events-auto translate-x-1/2 text-black"
                        >
                            <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Slides */}
                <div
                    className="relative w-[900px] h-[500px] flex items-center justify-center"
                    style={{ perspective: '1000px' }}
                >
                    {extendedLandscapes.map((slide, i) => (
                        <motion.div
                            key={slide.id}
                            className="absolute w-[800px] aspect-video rounded-xl overflow-hidden shadow-2xl origin-center border border-white/5"
                            initial={false}
                            animate={getStyle(i)}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }} // SHUFFLE SPRING ANIMATION
                            onClick={() => setActiveIndex(i)}
                            style={{
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <Image src={slide.src} alt={slide.title} fill className="object-cover" />
                        </motion.div>
                    ))}
                </div>

                {/* Pagination (Overlay - Moved Up) */}
                <div className="absolute bottom-28 z-50 flex gap-3">
                    {extendedLandscapes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 shadow-sm ${i === activeIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default function CarouselShowcase() {
    return (
        <main className="min-h-screen bg-white text-slate-900 py-20 px-4 space-y-32">

            <section className="max-w-7xl mx-auto space-y-8 text-center">
                <div>
                    <span className="text-brand-primary font-bold uppercase tracking-widest">Option 1</span>
                    <h2 className="text-4xl font-bold mt-2">The Sheet Stack</h2>
                    <p className="text-slate-500">Vertical sliding stack. Tactile and fast.</p>
                </div>
                <SheetStackSlider />
            </section>

            <hr className="bg-slate-200 border-none h-[1px]" />

            <section className="max-w-7xl mx-auto space-y-8 text-center">
                <div>
                    <span className="text-brand-primary font-bold uppercase tracking-widest">Option 2</span>
                    <h2 className="text-4xl font-bold mt-2">Cinematic Landscape</h2>
                    <p className="text-slate-500">Dark mode immersive theater. Horizontal navigation.</p>
                </div>
                <CinematicLandscapeCarousel />
            </section>

            <hr className="bg-slate-200 border-none h-[1px]" />

            <section className="max-w-7xl mx-auto space-y-8 text-center">
                <div>
                    <span className="text-brand-primary font-bold uppercase tracking-widest">Option 3</span>
                    <h2 className="text-4xl font-bold mt-2">3D Depth-Stack (Coverflow)</h2>
                    <p className="text-slate-500">Refined Controls. Fan Layout.</p>
                </div>
                <CoverflowCarousel />
            </section>

            <section className="max-w-7xl mx-auto space-y-8 text-center">
                <div>
                    <span className="text-brand-primary font-bold uppercase tracking-widest">Option 4</span>
                    <h2 className="text-4xl font-bold mt-2">3D Book Showcase</h2>
                    <p className="text-slate-500">Elegant 3D presentation with realistic depth and lighting.</p>
                </div>
                <BookShowcase />
            </section>

        </main>
    )
}
