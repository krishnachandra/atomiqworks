'use client'

import { useState } from 'react'
import { AtomiqLogo } from '@/components/ui/AtomiqLogo'
import Link from 'next/link'
import { ArrowLeft, Copy, Check } from 'lucide-react'

// Define Color Palettes
const palettes = [
    {
        name: "Current Brand",
        config: {
            nucleus: { from: 'from-blue-400', to: 'to-blue-700' },
            continent: '#4ade80',
            electrons: [
                { light: '#fcd980', main: '#fba721', dark: '#d68a15' }, // Orange
                { light: '#4fdcd0', main: '#1db9a4', dark: '#148f7f' }, // Teal
                { light: '#c2e66e', main: '#a2cc46', dark: '#7fa332' }  // Green
            ]
        }
    },
    {
        name: "Dark Mode Neon",
        config: {
            nucleus: { from: 'from-slate-800', to: 'to-black' },
            continent: '#334155',
            electrons: [
                { light: '#ff00ff', main: '#d946ef', dark: '#a21caf' }, // Magenta
                { light: '#00ffff', main: '#06b6d4', dark: '#0891b2' }, // Cyan
                { light: '#ffff00', main: '#eab308', dark: '#ca8a04' }  // Yellow
            ]
        }
    },
    {
        name: "Red Planet (Mars)",
        config: {
            nucleus: { from: 'from-red-500', to: 'to-red-900' },
            continent: '#7f1d1d',
            electrons: [
                { light: '#ffffff', main: '#e2e8f0', dark: '#94a3b8' }, // White/Silver
                { light: '#60a5fa', main: '#3b82f6', dark: '#1d4ed8' }, // Blue
                { light: '#fb923c', main: '#f97316', dark: '#c2410c' }  // Orange
            ]
        }
    },
    {
        name: "Monochrome Metallic",
        config: {
            nucleus: { from: 'from-gray-300', to: 'to-gray-500' },
            continent: '#e5e7eb',
            electrons: [
                { light: '#f8fafc', main: '#cbd5e1', dark: '#64748b' }, // Silver
                { light: '#475569', main: '#334155', dark: '#0f172a' }, // Gunmetal
                { light: '#94a3b8', main: '#64748b', dark: '#475569' }  // Slate
            ]
        }
    },
    {
        name: "Oceanic Depths",
        config: {
            nucleus: { from: 'from-cyan-500', to: 'to-blue-600' },
            continent: '#0e7490',
            electrons: [
                { light: '#a5f3fc', main: '#22d3ee', dark: '#0891b2' }, // Cyan
                { light: '#c4b5fd', main: '#8b5cf6', dark: '#6d28d9' }, // Violet
                { light: '#67e8f9', main: '#06b6d4', dark: '#0e7490' }  // Teal
            ]
        }
    },
    {
        name: "Sunset",
        config: {
            nucleus: { from: 'from-orange-400', to: 'to-rose-600' },
            continent: '#fcd34d',
            electrons: [
                { light: '#fde047', main: '#eab308', dark: '#ca8a04' }, // Yellow
                { light: '#fed7aa', main: '#fb923c', dark: '#ea580c' }, // Orange
                { light: '#fca5a5', main: '#f43f5e', dark: '#be123c' }  // Red/Pink
            ]
        }
    },
    {
        name: "Gold & Luxury",
        config: {
            nucleus: { from: 'from-yellow-700', to: 'to-yellow-900' },
            continent: '#fef08a',
            electrons: [
                { light: '#fef9c3', main: '#facc15', dark: '#a16207' }, // Gold 1
                { light: '#e2e8f0', main: '#94a3b8', dark: '#475569' }, // Silver
                { light: '#fef08a', main: '#d9f99d', dark: '#84cc16' }  // Lime Gold
            ]
        }
    },
    {
        name: "Forest",
        config: {
            nucleus: { from: 'from-green-600', to: 'to-green-900' },
            continent: '#a3e635',
            electrons: [
                { light: '#bef264', main: '#84cc16', dark: '#4d7c0f' }, // Lime
                { light: '#86efac', main: '#22c55e', dark: '#15803d' }, // Green
                { light: '#fde047', main: '#eab308', dark: '#854d0e' }  // Yellow
            ]
        }
    }
]

export default function LogoVariations() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyConfig = (palette: any) => {
        const text = JSON.stringify(palette.config, null, 2);
        navigator.clipboard.writeText(text);
        setCopied(palette.name);
        setTimeout(() => setCopied(null), 2000);
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/" className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-600" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Logo Color Playground</h1>
                        <p className="text-slate-600">Select a theme for your brand identity.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {palettes.map((palette) => (
                        <div key={palette.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center gap-6 group hover:shadow-md transition-shadow">
                            <div className="bg-slate-50 p-8 rounded-xl w-full flex items-center justify-center h-64">
                                <AtomiqLogo size={120} colors={palette.config as any} />
                            </div>

                            <div className="text-center w-full">
                                <h3 className="font-bold text-slate-800 text-lg mb-2">{palette.name}</h3>
                                <div className="flex justify-center gap-2 mb-4">
                                    <div className="w-6 h-6 rounded-full border border-black/10" style={{ background: palette.config.nucleus.to.replace('to-', '') === 'to-black' ? '#000' : '' }} />
                                    {/* Note: The color previews above are simplified representations */}
                                </div>

                                <button
                                    onClick={() => copyConfig(palette)}
                                    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors"
                                >
                                    {copied === palette.name ? (
                                        <>
                                            <Check className="w-4 h-4 text-green-500" />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span>Copy Config</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
