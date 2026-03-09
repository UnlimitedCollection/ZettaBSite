import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About ZettaB | Strategy, Design, Engineering",
    description: "Learn who we are, what we believe, and how we build world-class software for ambitious businesses.",
};

const values = [
    { title: "Engineering Excellence", desc: "We hold ourselves to the highest technical standards. Clean code, robust architecture, and performance are non-negotiable." },
    { title: "Design with Intent", desc: "Every design decision serves a purpose — guiding users, communicating value, and driving conversion." },
    { title: "Radical Transparency", desc: "We communicate openly. You always know where your project stands, what's coming next, and why decisions are made." },
    { title: "Long-Term Partnership", desc: "We don't disappear after launch. We grow with you, iterate on what works, and help you navigate what comes next." },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">About ZettaB</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                        Strategy. Design.<br />Engineering — united.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We are a premium software agency building products that perform, scale, and create lasting business impact.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">We build for outcomes, not outputs</h2>
                            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                                ZettaB was founded on a simple belief: software should move businesses forward. Too many agencies deliver beautiful work that misses the mark commercially. We bridge the gap between technical excellence and business reality.
                            </p>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Every engagement starts with understanding your goals — not your feature list. We work backwards from the outcome you need to design solutions that genuinely make a difference.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Founded", value: "2016" },
                                { label: "Projects Delivered", value: "200+" },
                                { label: "Industries Served", value: "15+" },
                                { label: "Long-term Clients", value: "80%" },
                            ].map((item) => (
                                <div key={item.label} className="p-6 rounded-2xl bg-bg-light border border-gray-100 text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
                                    <div className="text-sm text-gray-500">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Stand For</p>
                        <h2 className="text-4xl font-bold text-gray-900">Our guiding principles</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {values.map((v, i) => (
                            <div key={v.title} className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl font-black text-primary/10 mb-4">0{i + 1}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="p-10 rounded-2xl bg-gradient-to-br from-primary to-[#0e45b5] text-white">
                                <h3 className="text-2xl font-bold mb-6">What makes us different</h3>
                                <ul className="flex flex-col gap-5">
                                    {[
                                        "Full-stack team — strategy, design, and engineering under one roof",
                                        "Senior-level practitioners on every project, no hand-offs to juniors",
                                        "Fixed-scope or dedicated team models available",
                                        "Proven track record across SaaS, e-commerce, fintech, and more",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <div className="mt-0.5 rounded-full bg-white/20 p-1 flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                            <span className="text-blue-100 text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Choose ZettaB</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">The right team for ambitious projects</h2>
                            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                                We know there are many agencies to choose from. We compete by delivering consistently premium outcomes — on time, in scope, and with a clarity of communication that sets us apart.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors"
                            >
                                Work With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Let's build something great together</h2>
                    <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
                        Tell us about your project and we'll show you exactly how we'd approach it.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg"
                    >
                        Start the Conversation
                    </Link>
                </div>
            </section>
        </>
    );
}
