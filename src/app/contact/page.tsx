import type { Metadata } from "next";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact ZettaB | Start Your Project",
    description: "Ready to build something great? Contact ZettaB and we'll get back to you within 1 business day.",
};
export default function ContactPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 text-center overflow-hidden">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/bg_contact_hero_new.svg" alt="Contact Us Background" className="service-hero-image w-full h-full object-cover object-center opacity-100" />
                    <div className="absolute inset-0 bg-slate-950/35"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        Let&apos;s build something<br />exceptional together.
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
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">

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
                                    <span className="material-symbols-outlined text-primary text-3xl">call</span>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                        <a href="tel:+94764228905" className="text-slate-600 hover:text-primary transition-colors">+94 764 228 905</a>
                                    </div>
                                </div>
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
                                            46/3B, Uduwawala,<br />
                                            Kandy, Sri Lanka
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
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
