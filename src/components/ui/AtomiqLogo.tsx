'use client'

import { motion } from 'framer-motion'

interface AtomiqLogoProps {
    size?: number
    className?: string
}

export function AtomiqLogo({ size = 32, className = '' }: AtomiqLogoProps) {
    const containerSize = size * 2
    const nucleusSize = size * 0.45
    const electronSize = size * 0.25
    const orbitRadiusX = size * 0.85  // horizontal radius
    const orbitRadiusY = size * 0.35   // vertical radius (creates ellipse)

    return (
        <div
            className={`relative ${className}`}
            style={{
                width: `${containerSize}px`,
                height: `${containerSize}px`
            }}
        >
            {/* Central rotating nucleus (orange/coral) */}
            <motion.div
                className="absolute top-1/2 left-1/2 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-md"
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
            </motion.div>

            {/* Orbit 1 - Horizontal (0°) with Green electron */}
            <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                    width: `${containerSize}px`,
                    height: `${containerSize}px`,
                    marginLeft: `-${containerSize / 2}px`,
                    marginTop: `-${containerSize / 2}px`,
                    transform: 'rotate(90deg)',
                }}
            >
                {/* Fixed orbit path */}
                <svg
                    className="absolute inset-0 opacity-25"
                    viewBox={`0 0 ${containerSize} ${containerSize}`}
                >
                    <ellipse
                        cx={containerSize / 2}
                        cy={containerSize / 2}
                        rx={orbitRadiusX}
                        ry={orbitRadiusY}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-black"
                    />
                </svg>

                {/* Rotating container for electron */}
                <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        width: `${orbitRadiusX * 2}px`,
                        height: `${orbitRadiusY * 2}px`,
                        marginLeft: `-${orbitRadiusX}px`,
                        marginTop: `-${orbitRadiusY}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Green electron positioned at edge */}
                    <div
                        className="absolute rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-lg"
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            top: `-${electronSize / 2}px`,
                            left: `50%`,
                            marginLeft: `-${electronSize / 2}px`,
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                    </div>
                </motion.div>
            </div>

            {/* Orbit 2 - Tilted -60° with Teal electron */}
            <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                    width: `${containerSize}px`,
                    height: `${containerSize}px`,
                    marginLeft: `-${containerSize / 2}px`,
                    marginTop: `-${containerSize / 2}px`,
                    transform: 'rotate(30deg)',
                }}
            >
                {/* Fixed orbit path */}
                <svg
                    className="absolute inset-0 opacity-25"
                    viewBox={`0 0 ${containerSize} ${containerSize}`}
                >
                    <ellipse
                        cx={containerSize / 2}
                        cy={containerSize / 2}
                        rx={orbitRadiusX}
                        ry={orbitRadiusY}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-400"
                    />
                </svg>

                {/* Rotating container for electron */}
                <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        width: `${orbitRadiusX * 2}px`,
                        height: `${orbitRadiusY * 2}px`,
                        marginLeft: `-${orbitRadiusX}px`,
                        marginTop: `-${orbitRadiusY}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Teal electron positioned at edge */}
                    <div
                        className="absolute rounded-full bg-gradient-to-br from-teal-400 to-teal-500 shadow-lg"
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            top: `-${electronSize / 2}px`,
                            left: `50%`,
                            marginLeft: `-${electronSize / 2}px`,
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                    </div>
                </motion.div>
            </div>

            {/* Orbit 3 - Tilted 60° with Orange/Yellow electron */}
            <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                    width: `${containerSize}px`,
                    height: `${containerSize}px`,
                    marginLeft: `-${containerSize / 2}px`,
                    marginTop: `-${containerSize / 2}px`,
                    transform: 'rotate(-30deg)',
                }}
            >
                {/* Fixed orbit path */}
                <svg
                    className="absolute inset-0 opacity-25"
                    viewBox={`0 0 ${containerSize} ${containerSize}`}
                >
                    <ellipse
                        cx={containerSize / 2}
                        cy={containerSize / 2}
                        rx={orbitRadiusX}
                        ry={orbitRadiusY}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-blue-500"
                    />
                </svg>

                {/* Rotating container for electron */}
                <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        width: `${orbitRadiusX * 2}px`,
                        height: `${orbitRadiusY * 2}px`,
                        marginLeft: `-${orbitRadiusX}px`,
                        marginTop: `-${orbitRadiusY}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Orange/Yellow electron positioned at edge */}
                    <div
                        className="absolute rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg"
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            top: `-${electronSize / 2}px`,
                            left: `50%`,
                            marginLeft: `-${electronSize / 2}px`,
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
