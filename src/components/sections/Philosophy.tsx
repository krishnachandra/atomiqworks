'use client'
import { motion } from 'framer-motion'
import { Eye, Target, Zap, Search, UserCheck, MessageSquare, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { AtomiqLogo } from '@/components/ui/AtomiqLogo'
import { useState } from 'react'

const faqs = [
    {
        question: "What is AtomIQWorks' approach to digital solutions?",
        answer: "We blend cutting-edge technology with deep strategic insights to deliver comprehensive digital solutions. From AI-driven marketing to robust software engineering, our approach is holistic and results-oriented."
    },
    {
        question: "How do you ensure project success?",
        answer: "Our process involves rigorous analysis, precise execution, and continuous optimization. We leverage data and user feedback to refine our strategies and ensure every deliverable meets the highest standards of quality and performance."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We specialize in a modern tech stack including React, Next.js, Node.js, Python, and various AI/ML frameworks. We select the best tools for each specific project to ensure scalability and efficiency."
    },
    {
        question: "How do we measure success?",
        answer: "Success is measured through tangible meaningful KPIs such as user engagement, conversion rates, performance metrics, and ultimately, the ROI and growth of your business."
    }
]

export function Philosophy() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section id="philosophy" className="py-20 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Story Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit leading-tight">
                            Curious About Our Story? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                Actually, it's All About YOU!
                            </span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            Every time we start writing about ourselves, we end up realizing that our essence revolves around 'YOU.' At our core lies a deep-seated inspiration drawn from your hunger for creativity, groundbreaking strategies, unique storytelling, and artistic brilliance. We believe every brand has a unique story to tell, and our team is here to help you tell it.
                        </p>
                        <button className="group flex items-center gap-2 border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
                            <span className="font-medium">Read More</span>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            <div className="absolute inset-0 bg-brand-primary/20 blur-[60px] rounded-full" />
                            <AtomiqLogo size={160} className="relative z-10 drop-shadow-2xl text-white scale-75 md:scale-100" />
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <div className="mb-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
                                The Numbers That <br />
                                Illustrate Our Impact <br />
                                — <span className="font-light italic">Loud & Clear</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                                We prioritize excellence in every aspect of our work, aiming to create digital experiences that drive real, measurable growth.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { number: "300%", label: "ROI Delivered For Clients" },
                                { number: "95%", label: "Customer Satisfaction Rate" },
                                { number: "2000+", label: "Successful Campaigns" },
                                { number: "68+", label: "Specialists On Board" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="border-t border-white/20 pt-6"
                                >
                                    <div className="text-4xl md:text-5xl font-bold mb-2 font-outfit">{stat.number}</div>
                                    <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                    >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 font-outfit">Our Vision</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Lead the future of digital innovation with AtomIQWorks, making us the go-to partner for growth, game-changing strategies, and transformative digital experiences.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                    >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-secondary to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 font-outfit">Our Mission</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Empower businesses with comprehensive digital solutions that turn data into powerful insights, fuel sustainable growth, and redefine user engagement for the modern digital age.
                        </p>
                    </motion.div>
                </div>

                {/* Strategic Approach Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6 font-outfit"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our Strategic Approach To Your Success
                        </motion.h2>
                        <motion.p
                            className="text-xl text-slate-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            With a true understanding of what's now and what's next in digital, we follow a strategic framework to ensure your success.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Search className="w-8 h-8" />,
                                title: "Analysis & Insights",
                                desc: "Conduct in-depth analysis to understand your audience's behavior, market trends, and competitive landscape."
                            },
                            {
                                icon: <UserCheck className="w-8 h-8" />,
                                title: "Precise Execution",
                                desc: "Leverage cutting-edge technologies and best practices to target the right problems with precise, scalable solutions."
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8" />,
                                title: "Personalized Solutions",
                                desc: "Blend human creativity with technical expertise to create hyper-personalized experiences that resonate with your users."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white text-brand-dark rounded-2xl p-8 hover:translate-y-[-5px] transition-transform duration-300 cursor-default"
                            >
                                <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6 font-outfit">Frequently Asked Questions</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                As a leading digital agency, we are dedicated to providing transparency and answering common questions to help our clients make informed decisions.
                            </p>
                            <div className="hidden lg:block w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full blur-[40px] opacity-50" />
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                                    {openFaq === idx ? (
                                        <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                    )}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-white/5">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
