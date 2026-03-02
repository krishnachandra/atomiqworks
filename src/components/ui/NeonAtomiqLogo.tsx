import { useMemo } from 'react'

interface NeonAtomiqLogoProps {
    size?: number
    className?: string
}

export function NeonAtomiqLogo({ size = 32, className = '' }: NeonAtomiqLogoProps) {
    const {
        containerSize,
        nucleusSize,
        electronSize,
        orbitRadiusX,
        orbitRadiusY,
    } = useMemo(() => {
        const containerSize = size * 2
        const nucleusSize = size * 0.35
        const electronSize = size * 0.25
        const orbitRadiusX = size * 0.85
        const orbitRadiusY = size * 0.35

        return {
            containerSize,
            nucleusSize,
            electronSize,
            orbitRadiusX,
            orbitRadiusY,
        }
    }, [size]);

    const neonGlow = "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]";
    const electronGlow = (color: string) => `drop-shadow-[0_0_8px_${color}] drop-shadow-[0_0_20px_${color}]`;

    return (
        <div
            className={`relative ${className}`}
            style={{
                width: `${containerSize}px`,
                height: `${containerSize}px`
            }}
        >
            {/* LAYER 1: ORBIT PATHS (Neon Background) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Orbit 1 Path (Vertical 90°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(90deg)' }}>
                    <svg viewBox={`0 0 ${containerSize} ${containerSize}`} className={`absolute inset-0 ${neonGlow}`}>
                        <ellipse cx={containerSize / 2} cy={containerSize / 2} rx={orbitRadiusX} ry={orbitRadiusY} fill="none" stroke="#60a5fa" strokeWidth="1" />
                    </svg>
                </div>
                {/* Orbit 2 Path (Diagonal 30°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(30deg)' }}>
                    <svg viewBox={`0 0 ${containerSize} ${containerSize}`} className={`absolute inset-0 ${neonGlow}`}>
                        <ellipse cx={containerSize / 2} cy={containerSize / 2} rx={orbitRadiusX} ry={orbitRadiusY} fill="none" stroke="#60a5fa" strokeWidth="1" />
                    </svg>
                </div>
                {/* Orbit 3 Path (Diagonal -30°) */}
                <div className="absolute inset-0" style={{ transform: 'rotate(-30deg)' }}>
                    <svg viewBox={`0 0 ${containerSize} ${containerSize}`} className={`absolute inset-0 ${neonGlow}`}>
                        <ellipse cx={containerSize / 2} cy={containerSize / 2} rx={orbitRadiusX} ry={orbitRadiusY} fill="none" stroke="#60a5fa" strokeWidth="1" />
                    </svg>
                </div>
            </div>

            {/* LAYER 2: NUCLEUS (Middle) - Static Neon Red */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                    className="relative rounded-full box-content border-2 border-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]"
                    style={{
                        width: `${nucleusSize}px`,
                        height: `${nucleusSize}px`,
                        background: 'linear-gradient(to bottom right, #ef4444, #991b1b)'
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)' }}
                    />
                </div>
            </div>

            {/* LAYER 3: ELECTRONS (Foreground) - Static fixed positions */}
            <div className="absolute inset-0 pointer-events-none z-20">
                {/* Electron 1 (Vertical 90°) - Orange */}
                <div className="absolute inset-0" style={{ transform: 'rotate(90deg)' }}>
                    <div
                        className={`absolute rounded-full ${electronGlow('rgba(249,115,22,0.8)')}`}
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            left: `${containerSize / 2 + orbitRadiusX}px`, // Fixed position on orbit
                            top: `${containerSize / 2}px`,
                            marginLeft: `-${electronSize / 2}px`,
                            marginTop: `-${electronSize / 2}px`,
                            background: `linear-gradient(135deg, #fcd980, #fba721, #d68a15)`
                        }}
                    >
                        <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), transparent)' }} />
                    </div>
                </div>

                {/* Electron 2 (Diagonal 30°) - Teal */}
                <div className="absolute inset-0" style={{ transform: 'rotate(30deg)' }}>
                    <div
                        className={`absolute rounded-full ${electronGlow('rgba(20,184,166,0.8)')}`}
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            left: `${containerSize / 2 - orbitRadiusX}px`, // Fixed position on orbit
                            top: `${containerSize / 2}px`,
                            marginLeft: `-${electronSize / 2}px`,
                            marginTop: `-${electronSize / 2}px`,
                            background: `linear-gradient(135deg, #4fdcd0, #1db9a4, #148f7f)`
                        }}
                    >
                        <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), transparent)' }} />
                    </div>
                </div>

                {/* Electron 3 (Diagonal -30°) - Green */}
                <div className="absolute inset-0" style={{ transform: 'rotate(-30deg)' }}>
                    <div
                        className={`absolute rounded-full ${electronGlow('rgba(132,204,22,0.8)')}`}
                        style={{
                            width: `${electronSize}px`,
                            height: `${electronSize}px`,
                            left: `${containerSize / 2}px`,
                            top: `${containerSize / 2 - orbitRadiusY}px`, // Fixed position on orbit
                            marginLeft: `-${electronSize / 2}px`,
                            marginTop: `-${electronSize / 2}px`,
                            background: `linear-gradient(135deg, #c2e66e, #a2cc46, #7fa332)`
                        }}
                    >
                        <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), transparent)' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
