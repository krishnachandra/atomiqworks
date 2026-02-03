import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Orbit 1 */}
                <div style={{
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.5)',
                    transform: 'rotate(0deg) scaleX(0.3)',
                }} />
                {/* Orbit 2 */}
                <div style={{
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.5)',
                    transform: 'rotate(60deg) scaleX(0.3)',
                }} />
                {/* Orbit 3 */}
                <div style={{
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.5)',
                    transform: 'rotate(-60deg) scaleX(0.3)',
                }} />

                {/* Nucleus (Solid Red) */}
                <div
                    style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'linear-gradient(to bottom right, #ef4444, #b91c1c)', // red-500 to red-700
                        boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)',
                        zIndex: 10,
                    }}
                />

                {/* Electron 1 (Orange) */}
                <div style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#fba721',
                    top: '2px', // Approximate position on orbit
                    left: '14px',
                    zIndex: 20,
                }} />
                {/* Electron 2 (Teal) */}
                <div style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#1db9a4',
                    bottom: '6px',
                    right: '6px',
                    zIndex: 20,
                }} />
                {/* Electron 3 (Green) */}
                <div style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#a2cc46',
                    bottom: '6px',
                    left: '6px',
                    zIndex: 20,
                }} />
            </div>
        ),
        {
            ...size,
        }
    )
}
