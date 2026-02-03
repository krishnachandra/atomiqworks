'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
    return (
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Background Gradient */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.08, 0.05],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary rounded-full blur-3xl pointer-events-none"
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <motion.span
                        className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Let's Talk
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-brand-dark mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Ready to build the <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                            future together?
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-slate-600 max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Let's discuss your project and explore how we can help you achieve your digital goals.
                    </motion.p>
                </div>

                <motion.div
                    className="bg-brand-light rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-brand-dark mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                placeholder="Your Company"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                                Tell us about your project *
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                                placeholder="I'm looking for help with..."
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            variant="primary"
                            className="w-full md:w-auto"
                        >
                            Send Message
                        </Button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-base font-bold text-brand-dark mb-1">Email</div>
                                    <div className="text-sm text-slate-500">atomiqworks@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-base font-bold text-brand-dark mb-1">Phone</div>
                                    <div className="text-sm text-slate-500">+91 80745 35932</div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-base font-bold text-brand-dark mb-1">Location</div>
                                    <div className="text-sm text-slate-500">India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
