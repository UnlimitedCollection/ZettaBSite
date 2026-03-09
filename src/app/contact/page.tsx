import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact ZettaB | Start Your Project",
    description: "Ready to build something great? Contact ZettaB and we'll get back to you within 1 business day.",
};
export default function ContactPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Let's build something<br />exceptional together.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Whether you have a fully scoped project or just a raw idea, our engineering team is ready to help you execute.
                    </p>
                </div>
            </section>

            {/* Contact Layout */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Background grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-5 gap-16">

                        {/* Contact Information (Left Col) */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-4">Contact Information</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Fill out the form and our technical discovery team will get back to you within 24 hours to schedule an introductory call.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                        <a href="mailto:hello@zettab.io" className="text-slate-600 hover:text-primary transition-colors">hello@zettab.io</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">HQ Location</h4>
                                        <address className="text-slate-600 not-italic">
                                            120 Tech Boulevard, Suite 400<br />
                                            London, UK EC1A 1BB
                                        </address>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Working Hours</h4>
                                        <p className="text-slate-600">Monday - Friday: 9am - 6pm (GMT)</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Link */}
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h4 className="font-bold mb-2">Have a quick question?</h4>
                                <p className="text-sm text-slate-600 mb-4">Check out our frequently asked questions regarding pricing, timelines, and our development process.</p>
                                <Link href="/faq" className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                                    View FAQ <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Form (Right Col) */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-100 relative">
                                {/* Decorative badge */}
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                    Response in 24h
                                </div>

                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="block text-sm font-bold text-slate-700">First Name *</label>
                                            <input type="text" id="firstName" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="block text-sm font-bold text-slate-700">Last Name *</label>
                                            <input type="text" id="lastName" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-bold text-slate-700">Work Email *</label>
                                        <input type="email" id="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="jane@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="block text-sm font-bold text-slate-700">Company / Organization</label>
                                        <input type="text" id="company" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Acme Corp" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="service" className="block text-sm font-bold text-slate-700">Primary Interest *</label>
                                        <div className="relative">
                                            <select id="service" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none">
                                                <option value="" disabled selected>Select an option...</option>
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
                                        <textarea id="message" rows={5} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-y" placeholder="Tell us about your goals, timeline, and any specific technical constraints..."></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-primary/30 flex justify-center items-center gap-2 group">
                                        Send Message
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                                    </button>

                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        By submitting this form, you agree to our <a href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</a>.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
