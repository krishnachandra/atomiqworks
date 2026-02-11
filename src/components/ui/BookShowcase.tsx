'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const books = [
    {
        id: 1,
        title: "EZ Cut Media",
        author: "Video Production",
        image: "/portfolio/ez-cut-media.png",
        color: "bg-slate-900",
        spineColor: "bg-slate-800"
    },
    {
        id: 2,
        title: "Krishna Portfolio",
        author: "Personal Brand",
        image: "/portfolio/krishna-portfolio.png",
        color: "bg-indigo-900",
        spineColor: "bg-indigo-800"
    },
    {
        id: 3,
        title: "Neon Flux",
        author: "SaaS Platform",
        image: "/portfolio/ez-cut-media.png",
        color: "bg-emerald-900",
        spineColor: "bg-emerald-800"
    },
    {
        id: 4,
        title: "Velvet Space",
        author: "Architecture",
        image: "/portfolio/krishna-portfolio.png",
        color: "bg-amber-900",
        spineColor: "bg-amber-800"
    }
]

export function BookShowcase() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="w-full min-h-[600px] flex items-center justify-center bg-slate-50 py-20 overflow-hidden">
            <div className="relative w-full max-w-5xl flex gap-8 justify-center items-center perspective-[2000px]">
                {books.map((book, index) => {
                    const isActive = index === activeIndex

                    return (
                        <motion.div
                            key={book.id}
                            className={`relative cursor-pointer transition-all duration-500 will-change-transform`}
                            style={{
                                transformStyle: 'preserve-3d',
                                zIndex: isActive ? 50 : 10,
                            }}
                            initial={false}
                            animate={{
                                rotateY: isActive ? -25 : 0,
                                z: isActive ? 100 : 0,
                                scale: isActive ? 1.1 : 0.9,
                                x: isActive ? 0 : (index - activeIndex) * 40
                            }}
                            onClick={() => setActiveIndex(index)}
                            whileHover={{
                                y: -20,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* BOOK STRUCTURE */}
                            <div className="relative w-[280px] h-[400px]" style={{ transformStyle: 'preserve-3d' }}>

                                {/* FRONT COVER */}
                                <div
                                    className={`absolute inset-0 rounded-r-lg shadow-2xl origin-left overflow-hidden ${book.color}`}
                                    style={{
                                        transform: 'translateZ(15px)',
                                        backfaceVisibility: 'hidden'
                                    }}
                                >
                                    {/* Cover Image/Texture */}
                                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>

                                    {/* Content */}
                                    <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white/90">
                                        <div className="border border-white/20 p-4 h-full flex flex-col items-center justify-center text-center">
                                            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-70">
                                                {book.author}
                                            </span>
                                            <h2 className="text-3xl font-serif font-bold leading-tight mb-2">
                                                {book.title}
                                            </h2>
                                            <div className="w-8 h-[2px] bg-white/30 my-6"></div>
                                            <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-white/20 shadow-inner">
                                                <Image
                                                    src={book.image}
                                                    alt={book.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lighting/Sheen */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>

                                    {/* Spine Highlight (Left edge) */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-white/30 to-transparent"></div>
                                </div>

                                {/* SPINE */}
                                <div
                                    className={`absolute left-0 top-0 bottom-0 w-[30px] ${book.spineColor} rounded-l-sm`}
                                    style={{
                                        transform: 'rotateY(-90deg) translateZ(-15px)',
                                        transformOrigin: 'left',
                                        width: '30px'
                                    }}
                                >
                                    <div className="w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max -rotate-90 text-white/60 text-xs font-bold tracking-widest uppercase">
                                        {book.title}
                                    </span>
                                </div>

                                {/* BACK COVER */}
                                <div
                                    className={`absolute inset-0 rounded-l-lg ${book.color}`}
                                    style={{
                                        transform: 'translateZ(-15px) rotateY(180deg)',
                                        backfaceVisibility: 'hidden'
                                    }}
                                ></div>

                                {/* PAGES (Side View) */}
                                <div
                                    className="absolute right-0 top-[2%] bottom-[2%] w-[26px] bg-[#fdfbf6] shadow-inner"
                                    style={{
                                        transform: 'rotateY(90deg) translateZ(-266px)', // Adjusted for width
                                        background: 'linear-gradient(to right, #e3e3e3 0%, #fdfbf6 20%, #fdfbf6 100%)'
                                    }}
                                >
                                    {/* Page lines effect */}
                                    <div className="w-full h-full" style={{
                                        backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, #ddd 3px)'
                                    }}></div>
                                </div>

                                {/* SHADOW (Bottom) */}
                                <div
                                    className="absolute -bottom-8 inset-x-4 h-4 bg-black/40 blur-xl rounded-[100%]"
                                    style={{ transform: 'rotateX(90deg) translateZ(-40px)' }}
                                ></div>

                            </div>
                        </motion.div>
                    )
                })}
            </div>

            <div className="absolute bottom-8 flex gap-2">
                {books.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${i === activeIndex ? 'bg-slate-800' : 'bg-slate-300'}`}
                    />
                ))}
            </div>
        </div>
    )
}
