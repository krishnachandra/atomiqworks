'use client'

import { motion } from 'framer-motion'

const words = [
    "INNOVATION AT SCALE",
    "PRECISION ENGINEERING",
    "PRODUCT THINKING",
    "PREMIUM CREDIBILITY"
]

export const MarqueeScroller = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/50 border-t border-slate-200 py-3 z-30 backdrop-blur-sm">
            {/* Gradient Masks for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-light to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-light to-transparent z-10" />

            <div className="flex select-none">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {/* Repeat the list multiple times to ensure seamless loop on large screens */}
                    {[...Array(8)].map((_, groupIndex) => (
                        <div key={groupIndex} className="flex items-center">
                            {words.map((word, i) => (
                                <div key={i} className="flex items-center mx-4 md:mx-6">
                                    <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
                                        {word}
                                    </span>
                                    <span className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-slate-300 block" />
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
