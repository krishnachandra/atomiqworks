import { ImageResponse } from 'next/og'
import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs' // Use nodejs runtime to access filesystem

export async function GET(req: NextRequest) {
    try {
        // 1. Create the High-Res Image (512x512)
        const imageResponse = new ImageResponse(
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
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        border: '8px solid rgba(0,0,0,0.5)',
                        transform: 'rotate(0deg) scaleX(0.3)',
                    }} />
                    {/* Orbit 2 */}
                    <div style={{
                        position: 'absolute',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        border: '8px solid rgba(0,0,0,0.5)',
                        transform: 'rotate(60deg) scaleX(0.3)',
                    }} />
                    {/* Orbit 3 */}
                    <div style={{
                        position: 'absolute',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        border: '8px solid rgba(0,0,0,0.5)',
                        transform: 'rotate(-60deg) scaleX(0.3)',
                    }} />

                    {/* Nucleus (Solid Red) */}
                    <div
                        style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to bottom right, #ef4444, #b91c1c)', // red-500 to red-700
                            boxShadow: 'inset -8px -8px 20px rgba(0,0,0,0.3)',
                            zIndex: 10,
                            display: 'flex',
                        }}
                    />

                    {/* Electron 1 (Orange) */}
                    <div style={{
                        position: 'absolute',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#fba721',
                        top: '50px',
                        left: '200px',
                        zIndex: 20,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }} />
                    {/* Electron 2 (Teal) */}
                    <div style={{
                        position: 'absolute',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#1db9a4',
                        bottom: '100px',
                        right: '120px',
                        zIndex: 20,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }} />
                    {/* Electron 3 (Green) */}
                    <div style={{
                        position: 'absolute',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#a2cc46',
                        bottom: '100px',
                        left: '120px',
                        zIndex: 20,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }} />
                </div>
            ),
            {
                width: 512,
                height: 512,
            }
        )

        // 2. Convert Response to Buffer
        const arrayBuffer = await imageResponse.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // 3. Save to Public Folder
        const filePath = path.join(process.cwd(), 'public', 'atomiq-logo.png')
        await writeFile(filePath, buffer)

        return NextResponse.json({ success: true, path: '/atomiq-logo.png' })

    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.toString() }, { status: 500 })
    }
}
