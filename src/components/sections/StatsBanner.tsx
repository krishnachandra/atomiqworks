'use client'
import { motion } from 'framer-motion'

const stats = [
    { label: "Projects", value: "150+" },
    { label: "Retention", value: "98%" },
    { label: "ROI Increase", value: "40%" },
    { label: "Years Experience", value: "8+" } // Added a 4th to balance the grid
]

export function StatsBanner() {
    return (
        <section className="py-12 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center md:text-left"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-slate-500 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
