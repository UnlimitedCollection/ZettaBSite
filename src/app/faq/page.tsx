"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        category: "Process",
        questions: [
            { q: "How does an engagement with ZettaB work?", a: "We start with a discovery call to understand your goals and requirements. From there we produce a scoped proposal with timeline and cost. Once agreed, we move through design, development, QA, and launch — with weekly check-ins throughout." },
            { q: "How long does a typical project take?", a: "A standard marketing website takes 4–6 weeks. Web applications typically run 8–16 weeks depending on complexity. Mobile apps range from 10–20 weeks. We&apos;ll give you a precise timeline in your proposal." },
            { q: "Can we work in agile sprints?", a: "Absolutely. For longer-running projects we strongly recommend a sprint-based approach with fortnightly demos so you see progress regularly and can adjust priorities." },
        ],
    },
    {
        category: "Pricing",
        questions: [
            { q: "How does ZettaB price its services?", a: "We offer both fixed-scope project pricing and dedicated team (time & materials) engagements. Fixed pricing gives you cost certainty; dedicated teams provide flexibility for evolving requirements. All pricing is discussed candidly upfront." },
            { q: "What is the typical budget range for a web project?", a: "A high-quality marketing website typically starts from $8,000. Web applications start from $20,000 and scale with complexity. We tailor every proposal to your actual requirements — we don&apos;t use one-size-fits-all pricing." },
            { q: "Do you offer payment plans?", a: "Yes. We typically structure projects with a deposit, milestone payments, and final balance. For longer engagements, monthly retainer billing is available." },
        ],
    },
    {
        category: "Technical",
        questions: [
            { q: "What technologies do you build with?", a: "We are primarily a Next.js, React, TypeScript, and Node.js shop. For mobile, we use React Native, Swift (iOS), and Kotlin (Android). Infrastructure runs on AWS, GCP, and Azure via Terraform. We choose the right tool for each project." },
            { q: "Will we own the code?", a: "Yes — always. All source code, design files, and documentation produced during your engagement is fully transferred to you at project close. No lock-in." },
            { q: "Do you provide support after launch?", a: "We offer structured post-launch support packages including bug fixes, performance monitoring, content updates, and feature development. Most clients use a monthly retainer for ongoing support." },
        ],
    },
    {
        category: "Working Together",
        questions: [
            { q: "Do you work with international clients?", a: "Yes — roughly half our clients are outside our timezone. We use async-first communication with regular video calls timed to overlap both teams." },
            { q: "Can you supplement our existing team?", a: "Yes. We frequently embed as an extension of in-house teams, providing specific expertise (e.g., a senior engineer, a UX designer) without requiring a full agency engagement." },
            { q: "How do we get started?", a: "Simply send us a message via the Contact page. We&apos;ll respond within 1 business day to schedule a short discovery call at no cost or commitment." },
        ],
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`p-6 bg-slate-50 rounded-2xl border ${open ? 'border-primary shadow-lg shadow-primary/5' : 'border-slate-100'} transition-all`}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 text-left"
                aria-expanded={open}
            >
                <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-1">help</span>
                    <h3 className="text-lg font-bold text-slate-900 pr-4">{question}</h3>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'}`}>
                    <span className={`material-symbols-outlined text-sm transition-transform ${open ? "rotate-180" : ""}`}>expand_more</span>
                </div>
            </button>
            {open && (
                <div className="mt-4 pl-10 pr-12 text-slate-600 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Frequently Asked<br />Questions.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        Everything you need to know about working with ZettaB, our pricing, and how we build software.
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {faqs.map((section) => (
                            <div key={section.category}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-px bg-slate-200 flex-grow"></div>
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wider">{section.category}</h2>
                                    <div className="h-px bg-slate-200 flex-grow"></div>
                                </div>
                                <div className="space-y-4">
                                    {section.questions.map((item) => (
                                        <FAQItem key={item.q} question={item.q} answer={item.a} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still need help CTA */}
                    <div className="mt-20 p-8 sm:p-12 bg-primary rounded-3xl text-center text-white relative overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="material-symbols-outlined text-5xl mb-6">support_agent</span>
                            <h3 className="text-3xl font-black mb-4">Still have questions?</h3>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">Can&apos;t find the answer you&apos;re looking for? Reach out to our team directly and we&apos;ll get back to you shortly.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
