'use client'
import Link from 'next/link'
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react'
import { AtomiqLogo } from '@/components/ui/AtomiqLogo'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brand-dark text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-2 mb-4">
                            <AtomiqLogo size={32} />
                            AtomIQ Works
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-md mb-6">
                            Engineering the future of digital. We build scalable, high-performance experiences for ambitious brands.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 cursor-not-allowed">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 cursor-not-allowed">
                                <Twitter className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 cursor-not-allowed">
                                <Github className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 cursor-not-allowed">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#capabilities" className="hover:text-brand-secondary transition-colors">Design</a></li>
                            <li><a href="#capabilities" className="hover:text-brand-secondary transition-colors">Engineering</a></li>
                            <li><a href="#capabilities" className="hover:text-brand-secondary transition-colors">Performance</a></li>
                            <li><a href="#capabilities" className="hover:text-brand-secondary transition-colors">Strategy</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#work" className="hover:text-brand-secondary transition-colors">Work</a></li>
                            <li><a href="#process" className="hover:text-brand-secondary transition-colors">Process</a></li>
                            <li><a href="#contact" className="hover:text-brand-secondary transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-brand-secondary transition-colors">Careers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© {currentYear} AtomIQ Works. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-brand-secondary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-secondary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
