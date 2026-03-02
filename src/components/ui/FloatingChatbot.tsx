'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send } from 'lucide-react'

export function FloatingChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ text: string, isUser: boolean }[]>([
        { text: "Hi there! 👋 How can we help you today?", isUser: false }
    ])
    const [inputValue, setInputValue] = useState("")
    const chatbotRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        setMessages(prev => [...prev, { text: inputValue, isUser: true }])
        setInputValue("")

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, { text: "Thanks for reaching out! Our team will get back to you shortly.", isUser: false }])
        }, 1000)
    }

    return (
        <div ref={chatbotRef} className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-80 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col origin-bottom-right"
                    >
                        {/* Header */}
                        <div className="bg-brand-primary p-4 flex justify-between items-center text-white">
                            <div>
                                <h3 className="font-bold">AtomIQ Assistant</h3>
                                <p className="text-xs opacity-90">We typically reply in minutes</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-4 flex flex-col">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.isUser
                                        ? 'bg-brand-primary text-white self-end rounded-br-none'
                                        : 'bg-white text-slate-700 shadow-sm self-start rounded-bl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="p-2 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 transition-colors disabled:opacity-50"
                                disabled={!inputValue.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-brand-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-primary/90 transition-all hover:shadow-brand-primary/25"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageSquare className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}
