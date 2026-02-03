'use client'

import { motion } from 'framer-motion'

interface ColorConfig {
    nucleus: {
        from: string;
        to: string;
    };
    continent: string;
    electrons: [
        { light: string; main: string; dark: string },
        { light: string; main: string; dark: string },
        { light: string; main: string; dark: string }
    ];
}

interface AtomiqLogoProps {
    size?: number
    className?: string
    colors?: ColorConfig
}

export function AtomiqLogo({ size = 32, className = '', colors }: AtomiqLogoProps) {
    const containerSize = size * 2
    const nucleusSize = size * 0.35
    const electronSize = size * 0.25
    const orbitRadiusX = size * 0.85
    const orbitRadiusY = size * 0.35

    // Default Configuration (Current Brand)
    const defaultConfig: ColorConfig = {
        nucleus: { from: 'from-red-500', to: 'to-red-700' },
        continent: 'transparent',
        electrons: [
            { light: '#fcd980', main: '#fba721', dark: '#d68a15' }, // Orange
            { light: '#4fdcd0', main: '#1db9a4', dark: '#148f7f' }, // Teal
            { light: '#c2e66e', main: '#a2cc46', dark: '#7fa332' }  // Green
        ]
    };

    const config = colors || defaultConfig;

    const numberOfPoints = 60
    const points = Array.from({ length: numberOfPoints }, (_, i) => {
        const theta = (i / numberOfPoints) * 2 * Math.PI
        return {
            x: orbitRadiusX * Math.cos(theta),
            y: orbitRadiusY * Math.sin(theta)
        }
    })
    points.push(points[0])

    const xKeyframes = points.map(p => p.x)
    const yKeyframes = points.map(p => p.y)

    return (
        <div
            className={`relative ${className}`}
            style={{
                width: `${containerSize}px`,
                height: `${containerSize}px`
            }}
        >
            {/* LAYER 1: ORBIT PATHS (Background) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Orbit 1 Path (Vertical 90°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(90deg)' }}>
                    <svg viewBox={`0 0 ${containerSize} ${containerSize}`} className="absolute inset-0 opacity-50">
                        <ellipse cx={containerSize / 2} cy={containerSize / 2} rx={orbitRadiusX} ry={orbitRadiusY} fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
                {/* Orbit 2 Path (Diagonal 30°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(30deg)' }}>
                    <svg viewBox={`0 0 ${containerSize} ${containerSize}`} className="absolute inset-0 opacity-50">
                        <ellipse cx={containerSize / 2} cy={containerSize / 2} rx={orbitRadiusX} ry={orbitRadiusY} fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
                {/* Orbit 3 Path (Diagonal -30°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(-30deg)' }}>
                    <svg viewBox={`0 0 ${containerSize} ${containerSize}`} className="absolute inset-0 opacity-50">
                        <ellipse cx={containerSize / 2} cy={containerSize / 2} rx={orbitRadiusX} ry={orbitRadiusY} fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </div>

            {/* LAYER 2: NUCLEUS (Middle) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                    className={`relative rounded-full overflow-hidden shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.3)] box-content`}
                    style={{
                        width: `${nucleusSize}px`,
                        height: `${nucleusSize}px`,
                        background: config.nucleus.to.startsWith('#') ? config.nucleus.to : undefined // Fallback for pure hex
                    }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.nucleus.from} ${config.nucleus.to}`} />
                    <motion.div
                        className="absolute inset-0 flex"
                        style={{ width: '200%' }}
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        {[0, 1].map((i) => (
                            <div key={i} className="w-1/2 h-full relative">
                                <svg viewBox="0 0 200 100" className="w-full h-full opacity-90" preserveAspectRatio="none">
                                    <path
                                        d="M20,25 Q30,20 40,25 T50,45 Q40,60 30,55 T20,80 Q10,70 15,50 T10,30 Z 
                                           M70,20 Q90,10 110,20 T130,15 Q150,15 160,25 T170,40 Q150,55 130,50 T110,60 Q90,70 80,50 T70,30 Z
                                           M90,60 Q100,75 110,70 T120,80 Q110,90 100,85 T90,60 Z
                                           M150,60 Q160,65 170,60 T180,75 Q160,85 150,75 T150,60 Z"
                                        fill={config.continent}
                                        className="drop-shadow-sm"
                                    />
                                </svg>
                            </div>
                        ))}
                    </motion.div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-black/30 pointer-events-none" />
                </div>
            </div>

            {/* LAYER 3: ELECTRONS (Foreground) */}
            <div className="absolute inset-0 pointer-events-none z-20">
                {/* Electron 1 (Vertical 90°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(90deg)' }}>
                    <motion.div
                        className="absolute top-1/2 left-1/2 rounded-full shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.3),1px_1px_3px_rgba(0,0,0,0.4)]"
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            marginLeft: `-${electronSize / 2}px`,
                            marginTop: `-${electronSize / 2}px`,
                            background: `linear-gradient(135deg, ${config.electrons[0].light}, ${config.electrons[0].main}, ${config.electrons[0].dark})`
                        }}
                        animate={{ x: xKeyframes, y: yKeyframes }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                    </motion.div>
                </div>

                {/* Electron 2 (Diagonal 30°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(30deg)' }}>
                    <motion.div
                        className="absolute top-1/2 left-1/2 rounded-full shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.3),1px_1px_3px_rgba(0,0,0,0.4)]"
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            marginLeft: `-${electronSize / 2}px`,
                            marginTop: `-${electronSize / 2}px`,
                            background: `linear-gradient(135deg, ${config.electrons[1].light}, ${config.electrons[1].main}, ${config.electrons[1].dark})`
                        }}
                        animate={{ x: xKeyframes, y: yKeyframes }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                    </motion.div>
                </div>

                {/* Electron 3 (Diagonal -30°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(-30deg)' }}>
                    <motion.div
                        className="absolute top-1/2 left-1/2 rounded-full shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.3),1px_1px_3px_rgba(0,0,0,0.4)]"
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            marginLeft: `-${electronSize / 2}px`,
                            marginTop: `-${electronSize / 2}px`,
                            background: `linear-gradient(135deg, ${config.electrons[2].light}, ${config.electrons[2].main}, ${config.electrons[2].dark})`
                        }}
                        animate={{ x: xKeyframes, y: yKeyframes }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
