import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "E-Commerce Redesign Case Study | ZettaB",
    description: "How ZettaB redesigned a struggling e-commerce platform, increasing conversions by 187% and cutting page load time by 60%.",
};

const results = [
    { value: "+187%", label: "Conversion Rate" },
    { value: "-60%", label: "Page Load Time" },
    { value: "+94%", label: "Mobile Session Duration" },
    { value: "3.8×", label: "Revenue Growth in 90 Days" },
];

const timeline = [
    { phase: "Discovery", duration: "2 weeks", desc: "User research, heatmaps analysis, competitor audit, and stakeholder interviews to identify root causes of conversion failure." },
    { phase: "Design", duration: "3 weeks", desc: "Information architecture restructure, new checkout flow wireframes, and a full Figma prototype tested with 20 real users." },
    { phase: "Development", duration: "6 weeks", desc: "Full rebuild on Next.js with custom headless commerce integration, lazy loading, and edge-cached product pages." },
    { phase: "QA & Launch", duration: "1 week", desc: "Cross-browser QA, performance testing, A/B testing of key checkout elements, and a phased rollout." },
];

export default function CaseStudyPage() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        Case Study · E-Commerce
                    </span>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                        E-Commerce Redesign:<br />187% Conversion Uplift
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        How we transformed a struggling online store into a high-converting revenue engine in 12 weeks.
                    </p>
                </div>
            </section>

            {/* Results */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {results.map((r) => (
                            <div key={r.label} className="text-center">
                                <div className="text-4xl font-bold text-primary mb-1">{r.value}</div>
                                <div className="text-sm text-gray-500">{r.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Background */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">
                        Our client — a mid-market fashion retailer — had seen traffic plateau and conversion rates drop from 3.1% to 1.4% over 18 months. Their existing platform was a heavily customised Shopify theme with years of added features, causing slow load times, inconsistent mobile UX, and a checkout flow with too many friction points.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">
                        They came to ZettaB with a clear goal: stop losing customers and recover revenue — without losing their existing SEO equity or disrupting the business during peak season.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-16">Our Goals</h2>
                    <ul className="flex flex-col gap-3 text-gray-500">
                        {["Double conversion rate within 90 days of launch", "Cut page load time below 2 seconds on mobile", "Reduce checkout abandonment below the 65% industry average", "Maintain or improve all existing SEO rankings during migration"].map(g => (
                            <li key={g} className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {g}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Process / Timeline */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
                        <h2 className="text-4xl font-bold text-gray-900">How we solved it</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {timeline.map((t) => (
                            <div key={t.phase} className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{t.duration}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{t.phase}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Outcomes</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">The results spoke for themselves</h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">
                        Within 30 days of launch, conversion rate had already exceeded the client's 90-day target. By the 90-day mark, we had hit 187% improvement — nearly 3× the original goal. Revenue grew 3.8× in the same period, making this one of our most commercially impactful engagements to date.
                    </p>
                    <blockquote className="mt-10 border-l-4 border-primary pl-6 py-2">
                        <p className="text-xl text-gray-700 italic leading-relaxed">"ZettaB didn't just build us a new website — they rebuilt our entire growth engine. The rigour of their process and the quality of the final product exceeded every expectation."</p>
                        <footer className="mt-4 text-sm font-semibold text-gray-900">— Head of E-Commerce, Client (fashion retail)</footer>
                    </blockquote>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Want results like these?</h2>
                    <p className="text-blue-200 text-lg mb-10">Let's talk about your project and map out a path to measurable growth.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">Start Your Project</Link>
                        <Link href="/services" className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-white/40 text-white hover:bg-white/10 transition-colors">View All Services</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
