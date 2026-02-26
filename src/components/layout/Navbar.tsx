'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { AtomiqLogo } from '@/components/ui/AtomiqLogo';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/work', label: 'Portfolio' },
        { href: '/#services', label: 'Services' },
        { href: '/#why-us', label: 'Why Us' },
        { href: '/about', label: 'About' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 pointer-events-none ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between pointer-events-auto relative">
                <Link href="/" className="flex items-center gap-3 group w-auto shrink-0 relative pointer-events-auto">
                    <AtomiqLogo size={32} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="inline-block text-2xl tracking-tight">
                        <span className="font-semibold text-brand-dark">AtomIQ</span><span className="font-bold text-brand-primary">Works</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 relative pointer-events-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors cursor-pointer block group"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4 relative pointer-events-auto">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-600 hover:text-brand-primary transition-colors cursor-pointer pointer-events-auto"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 pointer-events-auto shadow-lg relative z-[9999]">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-base font-medium text-slate-700 hover:text-brand-primary transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
