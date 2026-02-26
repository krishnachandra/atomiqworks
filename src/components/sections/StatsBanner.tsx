'use client'
import { motion } from 'framer-motion'

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

            </div>
        </section>
    )
}
