"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        category: "Process",
        questions: [
            { q: "How does an engagement with ZettaB work?", a: "We start with a discovery call to understand your goals and requirements. From there we produce a scoped proposal with timeline and cost. Once agreed, we move through design, development, QA, and launch — with weekly check-ins throughout." },
            { q: "How long does a typical project take?", a: "A standard marketing website takes 4–6 weeks. Web applications typically run 8–16 weeks depending on complexity. Mobile apps range from 10–20 weeks. We'll give you a precise timeline in your proposal." },
            { q: "Can we work in agile sprints?", a: "Absolutely. For longer-running projects we strongly recommend a sprint-based approach with fortnightly demos so you see progress regularly and can adjust priorities." },
        ],
    },
    {
        category: "Pricing",
        questions: [
            { q: "How does ZettaB price its services?", a: "We offer both fixed-scope project pricing and dedicated team (time & materials) engagements. Fixed pricing gives you cost certainty; dedicated teams provide flexibility for evolving requirements. All pricing is discussed candidly upfront." },
            { q: "What is the typical budget range for a web project?", a: "A high-quality marketing website typically starts from $8,000. Web applications start from $20,000 and scale with complexity. We tailor every proposal to your actual requirements — we don't use one-size-fits-all pricing." },
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
            { q: "How do we get started?", a: "Simply send us a message via the Contact page. We'll respond within 1 business day to schedule a short discovery call at no cost or commitment." },
        ],
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
                aria-expanded={open}
            >
                <span className="text-gray-900 font-medium text-sm pr-4">{question}</span>
                <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            {open && (
                <div className="pb-5 text-gray-500 text-sm leading-relaxed pr-10">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">FAQ</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Common Questions</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Everything you need to know about working with ZettaB.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-12">
                        {faqs.map((section) => (
                            <div key={section.category}>
                                <h2 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                                    <span className="w-1 h-5 bg-primary rounded-full inline-block" />
                                    {section.category}
                                </h2>
                                <div className="mt-4 bg-white border border-gray-100 rounded-2xl px-6">
                                    {section.questions.map((item) => (
                                        <FAQItem key={item.q} question={item.q} answer={item.a} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-2xl bg-bg-light border border-gray-100 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h3>
                        <p className="text-gray-500 text-sm mb-6">Can't find the answer you're looking for? Just reach out — we typically reply within a few hours.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md h-11 px-6 text-sm font-semibold bg-primary text-white hover:bg-primary-hover transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
