'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const clientLogos = [
    { src: "/clients/verizon.png", alt: "Verizon" },
    { src: "/clients/Allianz.png", alt: "Allianz" },
    { src: "/clients/axa.png", alt: "AXA" },
    { src: "/clients/future.png", alt: "Future Generali" },
    { src: "/clients/ABG.png", alt: "Aditya Birla Group" },
    { src: "/clients/ML.png", alt: "MetLife" },
    { src: "/clients/AIA.png", alt: "AIA" },
    { src: "/clients/Cigna.png", alt: "Cigna" },
    { src: "/clients/TCS.png", alt: "TCS" },
    { src: "/clients/TW.png", alt: "Thoughtworks" },
    { src: "/clients/PE.png", alt: "PE" },
    { src: "/clients/LP.png", alt: "LP" },
    { src: "/clients/ST.png", alt: "ST" },
    { src: "/clients/SU.png", alt: "SU" },
    { src: "/clients/AS.png", alt: "AS" },
    { src: "/clients/V.png", alt: "V" },
    { src: "/clients/VH.png", alt: "VH" },
    { src: "/clients/WFM.png", alt: "WFM" },
    { src: "/clients/freshersworld.png", alt: "Freshersworld" },
    { src: "/clients/simple mobile.png", alt: "Simple Mobile" },
    { src: "/clients/tracfone.png", alt: "Tracfone" },
]

export function StatsBanner() {
    const stats = [
        { label: "Successful Projects", value: "150+" },
        { label: "Active Clients", value: "100+" },
        { label: "Success Rate", value: "100%" },
        { label: "Years Experience", value: "18+" }
    ]

    return (
        <section className="py-20 bg-brand-light relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center justify-center text-center group"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-slate-600 font-semibold uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trusted By Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12 pt-8 border-t border-slate-200/60"
                >
                    <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Trusted by Industry Leaders</p>
                    <p className="text-lg md:text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
                        We engineered mission-critical digital systems for global Fortune 500 companies including <span className="font-bold text-slate-800">Verizon, Allianz, AXA, Future Generali, Aditya Birla Group, MetLife, AIA, Cigna</span> and other market leaders.
                    </p>
                </motion.div>

                {/* Client Logo Marquee */}
                <div className="relative overflow-hidden py-10 mt-8">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-marquee gap-16 items-center" style={{ width: 'max-content' }}>
                        {clientLogos.map((logo, idx) => (
                            <div
                                key={`a-${idx}`}
                                className="flex-shrink-0 w-36 h-20 relative opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                            </div>
                        ))}
                        {clientLogos.map((logo, idx) => (
                            <div
                                key={`b-${idx}`}
                                className="flex-shrink-0 w-36 h-20 relative opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                            </div>
                        ))}
                        {clientLogos.map((logo, idx) => (
                            <div
                                key={`c-${idx}`}
                                className="flex-shrink-0 w-36 h-20 relative opacity-90 hover:opacity-100 transition-all duration-300"
                            >
                                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
