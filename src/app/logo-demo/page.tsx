import AtomiqLogo from '@/components/ui/AtomiqLogo';

/**
 * Demo page showcasing the AtomiqLogo component
 * Access via: /logo-demo
 */
export default function LogoDemo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header */}
            <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold text-white">
                        AtomiqLogo Component Demo
                    </h1>
                    <p className="text-slate-400 mt-1">
                        Interactive showcase of the animated logo component
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-12 space-y-20">
                {/* Hero Demo */}
                <section>
                    <h2 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                        01. Hero / Full Page Display
                    </h2>
                    <div className="min-h-[600px] bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-white/5 flex items-center justify-center">
                        <AtomiqLogo size={500} showBrandName />
                    </div>
                    <div className="mt-4 bg-slate-950/50 rounded-lg p-4 border border-white/5">
                        <code className="text-sm text-teal-400">
                            {`<AtomiqLogo size={500} showBrandName />`}
                        </code>
                    </div>
                </section>

                {/* Size Variations */}
                <section>
                    <h2 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                        02. Size Variations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Large */}
                        <div className="bg-slate-900/50 rounded-xl border border-white/5 p-8 flex flex-col items-center">
                            <div className="mb-6 flex items-center justify-center min-h-[350px]">
                                <AtomiqLogo size={300} />
                            </div>
                            <p className="text-slate-400 text-sm mb-2">Large (300px)</p>
                            <code className="text-xs text-teal-400 bg-slate-950/50 px-3 py-1 rounded">
                                size={'{300}'}
                            </code>
                        </div>

                        {/* Medium */}
                        <div className="bg-slate-900/50 rounded-xl border border-white/5 p-8 flex flex-col items-center">
                            <div className="mb-6 flex items-center justify-center min-h-[350px]">
                                <AtomiqLogo size={200} />
                            </div>
                            <p className="text-slate-400 text-sm mb-2">Medium (200px)</p>
                            <code className="text-xs text-teal-400 bg-slate-950/50 px-3 py-1 rounded">
                                size={'{200}'}
                            </code>
                        </div>

                        {/* Small */}
                        <div className="bg-slate-900/50 rounded-xl border border-white/5 p-8 flex flex-col items-center">
                            <div className="mb-6 flex items-center justify-center min-h-[350px]">
                                <AtomiqLogo size={120} />
                            </div>
                            <p className="text-slate-400 text-sm mb-2">Small (120px)</p>
                            <code className="text-xs text-teal-400 bg-slate-950/50 px-3 py-1 rounded">
                                size={'{120}'}
                            </code>
                        </div>
                    </div>
                </section>

                {/* With Brand Name */}
                <section>
                    <h2 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                        03. With Brand Name
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-900/50 rounded-xl border border-white/5 p-12 flex flex-col items-center justify-center min-h-[400px]">
                            <AtomiqLogo size={250} showBrandName />
                            <div className="mt-12 bg-slate-950/50 rounded-lg p-3 w-full">
                                <code className="text-xs text-teal-400">
                                    {`<AtomiqLogo size={250} showBrandName />`}
                                </code>
                            </div>
                        </div>
                        <div className="bg-slate-900/50 rounded-xl border border-white/5 p-12 flex flex-col items-center justify-center min-h-[400px]">
                            <AtomiqLogo size={180} showBrandName />
                            <div className="mt-12 bg-slate-950/50 rounded-lg p-3 w-full">
                                <code className="text-xs text-teal-400">
                                    {`<AtomiqLogo size={180} showBrandName />`}
                                </code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Light Background */}
                <section>
                    <h2 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                        04. On Light Background
                    </h2>
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-16 flex items-center justify-center min-h-[500px]">
                        <AtomiqLogo size={350} showBrandName />
                    </div>
                    <p className="mt-4 text-sm text-slate-400">
                        ℹ️ Logo works on light backgrounds but looks best on dark surfaces for optimal glow effects
                    </p>
                </section>

                {/* Navbar Example */}
                <section>
                    <h2 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                        05. Navbar Integration
                    </h2>
                    <div className="bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden">
                        <nav className="flex items-center justify-between px-6 py-4 bg-slate-950/50 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <AtomiqLogo size={45} />
                                <span className="text-white font-bold text-lg">AtomiqWorks</span>
                            </div>
                            <div className="flex gap-6 text-sm text-slate-300">
                                <a href="#" className="hover:text-white transition-colors">Work</a>
                                <a href="#" className="hover:text-white transition-colors">About</a>
                                <a href="#" className="hover:text-white transition-colors">Contact</a>
                            </div>
                        </nav>
                        <div className="p-16 flex items-center justify-center text-slate-500">
                            Page content here...
                        </div>
                    </div>
                    <div className="mt-4 bg-slate-950/50 rounded-lg p-4 border border-white/5">
                        <code className="text-sm text-teal-400">
                            {`<nav>\n  <AtomiqLogo size={45} />\n  <span>AtomiqWorks</span>\n</nav>`}
                        </code>
                    </div>
                </section>

                {/* Loading Screen */}
                <section>
                    <h2 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                        06. Loading Screen
                    </h2>
                    <div className="bg-black rounded-2xl p-16 flex flex-col items-center justify-center min-h-[500px]">
                        <AtomiqLogo size={280} />
                        <div className="mt-12 flex items-center gap-3">
                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                            <p className="text-slate-400 text-sm">Loading...</p>
                        </div>
                    </div>
                    <div className="mt-4 bg-slate-950/50 rounded-lg p-4 border border-white/5">
                        <code className="text-sm text-teal-400">
                            {`<div className="fixed inset-0 flex items-center justify-center bg-black">\n  <AtomiqLogo size={280} />\n</div>`}
                        </code>
                    </div>
                </section>

                {/* Technical Specs */}
                <section>
                    <h2 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                        📊 Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900/50 rounded-xl border border-white/5 p-6">
                            <h3 className="text-teal-400 font-semibold mb-4">Animation Details</h3>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• <strong>Globe:</strong> 8s breathing cycle</li>
                                <li>• <strong>Orbit 1 (Teal):</strong> 8s rotation</li>
                                <li>• <strong>Orbit 2 (Orange):</strong> 9s rotation</li>
                                <li>• <strong>Orbit 3 (Lime):</strong> 7s rotation</li>
                                <li>• <strong>Type:</strong> Pure CSS @keyframes</li>
                                <li>• <strong>Performance:</strong> GPU-accelerated</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 rounded-xl border border-white/5 p-6">
                            <h3 className="text-orange-400 font-semibold mb-4">Component Props</h3>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• <code className="text-teal-400">size</code>: number (default: 300)</li>
                                <li>• <code className="text-teal-400">showBrandName</code>: boolean</li>
                                <li>• <code className="text-teal-400">className</code>: string</li>
                                <li>• <strong>Responsive:</strong> Auto-scales on mobile</li>
                                <li>• <strong>Bundle:</strong> ~5KB CSS only</li>
                                <li>• <strong>Zero JS overhead</strong></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 mt-20">
                <div className="max-w-7xl mx-auto px-4 py-8 text-center text-slate-500 text-sm">
                    <p>AtomiqLogo Component • Pure CSS Animation • Built with precision ⚛️</p>
                </div>
            </footer>
        </div>
    );
}
