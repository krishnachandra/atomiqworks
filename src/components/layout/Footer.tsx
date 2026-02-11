'use client'
import Link from 'next/link'
import { Linkedin, Twitter, Github, Instagram, Facebook } from 'lucide-react'
import { AtomiqLogo } from '@/components/ui/AtomiqLogo'

export function Footer() {
    const currentYear = new Date().getFullYear();

    const sections = {
        services: [
            "Web Development", "Mobile App Development", "UI/UX Design", "AI & ML Solutions", "DevOps & Cloud", "Product Strategy", "E-Commerce Solutions"
        ],
        expertise: [
            "FinTech", "HealthTech", "EdTech", "Real Estate", "Media & Entertainment", "Logistics", "Retail", "Travel & Hospitality"
        ],
        company: [
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/#capabilities" },
            { label: "Our Work", href: "/work" },
            { label: "Process", href: "/#process" },
            { label: "Contact Us", href: "/#contact" }
        ]
    }

    return (
        <footer className="bg-black text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 font-sans border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-20">
                {/* Column 1: Brand & Offices */}
                <div className="space-y-8">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <AtomiqLogo size={40} className="group-hover:scale-110 transition-transform duration-300" colors={{
                            nucleus: { from: 'from-white', to: 'to-slate-300' },
                            continent: 'transparent',
                            electrons: [
                                { light: '#ffffff', main: '#e2e8f0', dark: '#94a3b8' },
                                { light: '#ffffff', main: '#e2e8f0', dark: '#94a3b8' },
                                { light: '#ffffff', main: '#e2e8f0', dark: '#94a3b8' }
                            ]
                        }} />
                        <span className="text-2xl font-bold tracking-tight">AtomIQ Works</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        AtomIQ Works is a premium digital product agency, engineering scalable, high-performance experiences for ambitious brands worldwide.
                    </p>

                    {/* Offices */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg border-b border-white/10 pb-2 inline-block">Our Offices</h4>

                        <div className="space-y-1">
                            <strong className="text-white block text-sm mb-1">INDIA (Hyderabad)</strong>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Hitech City, Hyderabad, Telangana 500081
                            </p>
                        </div>

                        <div className="space-y-1">
                            <strong className="text-white block text-sm mb-1">USA (Delaware)</strong>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                1209 Orange Street, Wilmington, DE 19801
                            </p>
                        </div>
                    </div>
                </div>

                {/* Column 2: Services */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                    <ul className="space-y-4">
                        {sections.services.map((item) => (
                            <li key={item}>
                                <Link href="/#capabilities" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Expertise */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Expertise</h3>
                    <ul className="space-y-4">
                        {sections.expertise.map((item) => (
                            <li key={item}>
                                <Link href="/#capabilities" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Company */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                    <ul className="space-y-4">
                        {sections.company.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200">{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-500 text-xs md:text-sm">
                    A subsidiary of AtomIQ Technologies
                </div>

                <div className="text-gray-500 text-xs md:text-sm text-center">
                    © {currentYear} AtomIQ Works. All Rights Reserved.
                </div>

                <div className="flex items-center gap-3">
                    {[
                        { Icon: Linkedin, href: "#" },
                        { Icon: Twitter, href: "#" },
                        { Icon: Instagram, href: "#" },
                        { Icon: Github, href: "#" }
                    ].map(({ Icon, href }, i) => (
                        <a key={i} href={href} className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-110">
                            <Icon size={16} strokeWidth={2.5} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
