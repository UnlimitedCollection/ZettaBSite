"use client";

import { useState } from "react";
import Link from "next/link";

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-100 relative">
            {/* Decorative badge */}
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Response in 24h
            </div>

            {isSubmitted ? (
                <div className="text-center py-16 px-6 bg-slate-50 rounded-2xl border border-slate-100 h-full flex flex-col justify-center items-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-sm mx-auto">
                        Thank you for reaching out. One of our engineering strategists will get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary font-bold hover:text-slate-900 transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-bold text-slate-700">First Name *</label>
                            <input type="text" id="firstName" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50" placeholder="Jane" disabled={isSubmitting} />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-bold text-slate-700">Last Name *</label>
                            <input type="text" id="lastName" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50" placeholder="Doe" disabled={isSubmitting} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700">Work Email *</label>
                        <input type="email" id="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50" placeholder="jane@company.com" disabled={isSubmitting} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-bold text-slate-700">Company / Organization</label>
                        <input type="text" id="company" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50" placeholder="Acme Corp" disabled={isSubmitting} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-bold text-slate-700">Primary Interest *</label>
                        <div className="relative">
                            <select id="service" required defaultValue="" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none disabled:opacity-50" disabled={isSubmitting}>
                                <option value="" disabled>Select an option...</option>
                                <option value="custom">Custom Software Development</option>
                                <option value="cloud">Cloud Infrastructure & DevOps</option>
                                <option value="web">Web Application Development</option>
                                <option value="mobile">Mobile Application Development</option>
                                <option value="other">Other / Not Sure Yet</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-bold text-slate-700">Project Details *</label>
                        <textarea id="message" rows={5} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-y disabled:opacity-50" placeholder="Tell us about your goals, timeline, and any specific technical constraints..." disabled={isSubmitting}></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-primary/30 flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                        {isSubmitting ? (
                            <span className="animate-pulse">Sending...</span>
                        ) : (
                            <>
                                Send Message
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                            </>
                        )}
                    </button>

                    <p className="text-xs text-center text-slate-500 mt-4">
                        By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>.
                    </p>
                </form>
            )}
        </div>
    );
}
