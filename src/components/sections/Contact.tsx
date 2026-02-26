'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const MAX_CHARS = 200

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        if (id === 'message') {
            if (value.length <= MAX_CHARS) {
                setFormData(prev => ({ ...prev, [id]: value }))
            }
        } else {
            setFormData(prev => ({ ...prev, [id]: value }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitStatus('idle')

        // Basic Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert('Please fill out all required fields.')
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email format.')
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', company: '', message: '' }) // Reset form
                setTimeout(() => setSubmitStatus('idle'), 5000) // Reset status after 5s
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

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
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                    placeholder="Sachin Varma"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                    placeholder="sachin.varma@gmail.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-brand-dark mb-2">
                                Company <span className="text-slate-400 font-normal">(optional)</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                placeholder="Your Company"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                                Tell us about your requirement <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                maxLength={MAX_CHARS}
                                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                                placeholder="I'm looking for help with..."
                            />
                            <div className="text-right text-xs text-slate-500 mt-2 font-medium">
                                {formData.message.length}/{MAX_CHARS} characters allowed
                            </div>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            variant="primary"
                            className="w-full md:w-auto mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 text-sm text-green-700 bg-green-50 rounded-lg border border-green-200">
                                Thank you! Your message has been sent successfully. We'll be in touch soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200">
                                Oops! Something went wrong. Please try again later or reach out directly to atomiqworks@gmail.com.
                            </div>
                        )}
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
