'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, Instagram, Facebook, MapPin } from 'lucide-react'
import { AtomiqLogo } from '@/components/ui/AtomiqLogo'

const WhatsappIcon = ({ size }: { size?: number | string, strokeWidth?: number | string }) => (
    <div className="relative" style={{ width: size || 16, height: size || 16 }}>
        <Image src="/icons/whatsapp.png" alt="WhatsApp" fill className="object-contain" />
    </div>
);

const PhoneIcon = ({ size }: { size?: number | string }) => (
    <div className="relative" style={{ width: size || 16, height: size || 16 }}>
        <Image src="/icons/phone.png" alt="Call" fill className="object-contain mix-blend-multiply" />
    </div>
);

const EmailIcon = ({ size }: { size?: number | string }) => (
    <div className="relative" style={{ width: size || 16, height: size || 16 }}>
        <Image src="/icons/email.png" alt="Email" fill className="object-contain" />
    </div>
);

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
            { label: "About", href: "/about" },
            { label: "Our Services", href: "/#services" },
            { label: "Our Work", href: "/work" },
            { label: "Why Us", href: "/#why-us" },
            { label: "Contact", href: "/#contact" }
        ]
    }

    return (
        <footer className="bg-black text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 font-sans border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-20">
                {/* Column 1: Brand & Offices */}
                <div className="space-y-8">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <AtomiqLogo size={40} className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-2xl font-bold tracking-tight">AtomIQWorks</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        AtomIQWorks is a premium digital product agency, engineering scalable, high-performance experiences for ambitious brands worldwide.
                    </p>

                    {/* Offices */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg border-b border-white/10 pb-2 inline-block">Our Offices</h4>

                        <div className="space-y-1">
                            <div className="flex items-center gap-1.5 mb-1">
                                <MapPin className="w-4 h-4 text-brand-primary" />
                                <strong className="text-white block text-sm">India, Hyderabad</strong>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed pl-5.5">
                                Hitech City, Hyderabad, Telangana 500081<br />
                                <a href="tel:+918074535932" className="hover:text-white transition-colors mt-1 inline-block">+91 80745 35932</a>
                            </p>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-1.5 mb-1">
                                <MapPin className="w-4 h-4 text-brand-primary" />
                                <strong className="text-white block text-sm">USA, Massachusetts</strong>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed pl-5.5">
                                1000 Massachusetts Ave, Cambridge, MA 02138
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
                                <span className="text-gray-400 text-sm">{item}</span>
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
                                <span className="text-gray-400 text-sm">{item}</span>
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


                <div className="text-gray-500 text-xs md:text-sm text-center">
                    © {currentYear} <strong>AtomIQWorks.</strong> All Rights Reserved.
                </div>

                <div className="flex items-center gap-3">
                    {[
                        { Icon: WhatsappIcon, href: "https://wa.me/918074535932", external: true },
                        { Icon: PhoneIcon, href: "tel:+918074535932", external: true },
                        { Icon: EmailIcon, href: "mailto:atomiqworks@gmail.com", external: true }
                    ].map(({ Icon, href, external }, i) => (
                        <a
                            key={i}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <Icon size={16} strokeWidth={2.5} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
