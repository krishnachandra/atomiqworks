'use client'
import Link from 'next/link'
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brand-dark text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-bold">
                                ∞
                            </div>
                            AtomiqWorks
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-md mb-6">
                            Engineering the future of digital. We build scalable, high-performance experiences for ambitious brands.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
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
                    <p>© {currentYear} AtomiqWorks. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-brand-secondary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-secondary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
