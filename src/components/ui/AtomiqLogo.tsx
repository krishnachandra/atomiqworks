'use client'

import { motion } from 'framer-motion'

interface AtomiqLogoProps {
    size?: number
    className?: string
}

export function AtomiqLogo({ size = 32, className = '' }: AtomiqLogoProps) {
    const orbitSize = size * 1.8
    const nucleusSize = size * 0.45
    const electronSize = size * 0.25

    return (
        <div
            className={`relative ${className}`}
            style={{
                width: `${orbitSize}px`,
                height: `${orbitSize}px`
            }}
        >
            {/* Central rotating nucleus (orange/coral) */}
            <motion.div
                className="absolute top-1/2 left-1/2 rounded-full bg-gradient-to-br from-orange-400 to-orange-500"
                style={{
                    width: `${nucleusSize}px`,
                    height: `${nucleusSize}px`,
                    marginLeft: `-${nucleusSize / 2}px`,
                    marginTop: `-${nucleusSize / 2}px`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Inner glow for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
            </motion.div>

            {/* Orbit 1 - Teal electron (120° offset) */}
            <motion.div
                className="absolute top-1/2 left-1/2"
                style={{
                    width: `${orbitSize}px`,
                    height: `${orbitSize}px`,
                    marginLeft: `-${orbitSize / 2}px`,
                    marginTop: `-${orbitSize / 2}px`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Orbit path (ellipse) */}
                <svg
                    className="absolute inset-0 opacity-20"
                    viewBox={`0 0 ${orbitSize} ${orbitSize}`}
                >
                    <ellipse
                        cx={orbitSize / 2}
                        cy={orbitSize / 2}
                        rx={orbitSize * 0.45}
                        ry={orbitSize * 0.25}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-slate-700"
                    />
                </svg>

                {/* Teal electron */}
                <motion.div
                    className="absolute rounded-full bg-gradient-to-br from-teal-400 to-teal-500 shadow-lg"
                    style={{
                        width: `${electronSize}px`,
                        height: `${electronSize}px`,
                        top: `${orbitSize / 2 - orbitSize * 0.25}px`,
                        left: `${orbitSize / 2 - electronSize / 2}px`,
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                </motion.div>
            </motion.div>

            {/* Orbit 2 - Green electron (0° offset) */}
            <motion.div
                className="absolute top-1/2 left-1/2"
                style={{
                    width: `${orbitSize}px`,
                    height: `${orbitSize}px`,
                    marginLeft: `-${orbitSize / 2}px`,
                    marginTop: `-${orbitSize / 2}px`,
                    transform: 'rotate(-60deg)',
                }}
                animate={{ rotate: 360 - 60 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Orbit path (ellipse) */}
                <svg
                    className="absolute inset-0 opacity-20"
                    viewBox={`0 0 ${orbitSize} ${orbitSize}`}
                >
                    <ellipse
                        cx={orbitSize / 2}
                        cy={orbitSize / 2}
                        rx={orbitSize * 0.45}
                        ry={orbitSize * 0.25}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-slate-700"
                    />
                </svg>

                {/* Green electron */}
                <motion.div
                    className="absolute rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-lg"
                    style={{
                        width: `${electronSize}px`,
                        height: `${electronSize}px`,
                        top: `${orbitSize / 2 - orbitSize * 0.25}px`,
                        left: `${orbitSize / 2 - electronSize / 2}px`,
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                </motion.div>
            </motion.div>

            {/* Orbit 3 - Orange electron (240° offset) */}
            <motion.div
                className="absolute top-1/2 left-1/2"
                style={{
                    width: `${orbitSize}px`,
                    height: `${orbitSize}px`,
                    marginLeft: `-${orbitSize / 2}px`,
                    marginTop: `-${orbitSize / 2}px`,
                    transform: 'rotate(60deg)',
                }}
                animate={{ rotate: 360 + 60 }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Orbit path (ellipse) */}
                <svg
                    className="absolute inset-0 opacity-20"
                    viewBox={`0 0 ${orbitSize} ${orbitSize}`}
                >
                    <ellipse
                        cx={orbitSize / 2}
                        cy={orbitSize / 2}
                        rx={orbitSize * 0.45}
                        ry={orbitSize * 0.25}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-slate-700"
                    />
                </svg>

                {/* Yellow/Orange electron */}
                <motion.div
                    className="absolute rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg"
                    style={{
                        width: `${electronSize}px`,
                        height: `${electronSize}px`,
                        top: `${orbitSize / 2 - orbitSize * 0.25}px`,
                        left: `${orbitSize / 2 - electronSize / 2}px`,
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                </motion.div>
            </motion.div>
        </div>
    )
}
