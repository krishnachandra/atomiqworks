'use client'
import { motion } from 'framer-motion'

export function Philosophy() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-brand-secondary rounded-full blur-3xl pointer-events-none"
            />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-brand-secondary font-semibold text-sm tracking-widest uppercase mb-6 block">
                        Our Philosophy
                    </span>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                        We believe in <span className="text-brand-secondary">craftsmanship</span>,<br />
                        the power of <span className="text-brand-secondary">speed</span>,<br />
                        and building for the <span className="text-brand-secondary">future</span>.
                    </h2>

                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        Every line of code we write, every pixel we design, and every strategy we deploy is driven by a
                        commitment to excellence. We don't just build digital products—we engineer experiences that stand
                        the test of time and adapt to tomorrow's challenges.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8 mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-center">
                        <div className="text-5xl font-bold text-brand-secondary mb-2">∞</div>
                        <h3 className="text-xl font-bold mb-2">Infinite Thinking</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            We approach problems with boundless creativity and technical rigor
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="text-5xl font-bold text-brand-secondary mb-2">⚡</div>
                        <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Speed isn't optional—it's fundamental to exceptional user experiences
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="text-5xl font-bold text-brand-secondary mb-2">🚀</div>
                        <h3 className="text-xl font-bold mb-2">Future-Ready</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Built to scale, adapt, and evolve with changing technologies
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
