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
        <main>
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 text-center overflow-hidden">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/bg_case_studies_hero.png" alt="Case Studies Background" className="w-full h-full object-cover object-center opacity-80" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Proven Results,<br />Not Just Promises.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Explore how we&apos;ve helped companies across industries overcome complex technical challenges and achieve rapid growth.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Case Study 1: FinTech Scale-Up */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl parallax-layer float-card" data-parallax-speed="0.045">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img alt="FinTech Dashboard" className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover group- duration-700" src="/tech-bg.png" />
                            {/* Overlay Stats (Optional/Decorative) */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur border border-white/20 p-4 sm:p-6 rounded-2xl z-20 translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div><div className="text-2xl font-black text-primary">300%</div><div className="text-xs font-semibold text-slate-500 uppercase">User Growth</div></div>
                                    <div className="border-x border-slate-200"><div className="text-2xl font-black text-primary">&lt;50ms</div><div className="text-xs font-semibold text-slate-500 uppercase">Latency</div></div>
                                    <div><div className="text-2xl font-black text-primary">Zero</div><div className="text-xs font-semibold text-slate-500 uppercase">Downtime</div></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">FinTech</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">Cloud Native</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Scaling a trading platform to handle 50k transactions per second.</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                When a rapidly growing EU-based retail trading platform hit their infrastructure limits during market volatility, they experienced costly outages. We completely re-architected their backend from a monolithic structure to a highly distributed, reactive microservices architecture deployed on Kubernetes across multi-region AWS.
                            </p>

                            <h4 className="text-xl font-bold mb-4">The Solution Focus:</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">insights</span>
                                    <span className="text-slate-700">Migration to event-driven Kafka architecture.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">shield_locked</span>
                                    <span className="text-slate-700">Implementation of Zero-Trust security model.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">speed</span>
                                    <span className="text-slate-700">Optimized matching engine reducing latency by 85%.</span>
                                </li>
                            </ul>

                            <Link href="/case-studies/fintech-scale" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-slate-900 transition-colors">
                                Read Full Case Study <span className="material-symbols-outlined text-base">east</span>
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-slate-200" />

                    {/* Case Study 2: E-Commerce Transformation */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">Retail / E-Comm</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">UX/UI Redesign</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Increasing cart conversion by 45% through headless commerce.</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A legacy luxury retailer was losing market share due to an archaic, slow monolithic e-commerce platform. Their mobile experience was frustrating users, leading to high cart abandonment. We led a digital transformation, decoupling their frontend and backend to implement a headless architecture using Next.js and Shopify Plus.
                            </p>

                            <h4 className="text-xl font-bold mb-4">The Solution Focus:</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">draw</span>
                                    <span className="text-slate-700">Complete UI overhaul focusing on mobile-first navigation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">api</span>
                                    <span className="text-slate-700">Integration of headless CMS for dynamic marketing content.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">flash_on</span>
                                    <span className="text-slate-700">Sub-second page loads improving SEO rankings instantly.</span>
                                </li>
                            </ul>

                            <Link href="/case-study-ecommerce-redesign" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-slate-900 transition-colors">
                                Read Full Case Study <span className="material-symbols-outlined text-base">east</span>
                            </Link>
                        </div>
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl order-1 lg:order-2 parallax-layer float-card" data-parallax-speed="0.06">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img alt="E-Commerce App" className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover group- duration-700" src="/office-work.png" />
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur border border-white/20 p-4 sm:p-6 rounded-2xl z-20 translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div><div className="text-2xl font-black text-primary">+45%</div><div className="text-xs font-semibold text-slate-500 uppercase">Conversion</div></div>
                                    <div className="border-x border-slate-200"><div className="text-2xl font-black text-primary">-60%</div><div className="text-xs font-semibold text-slate-500 uppercase">Bounce Rate</div></div>
                                    <div><div className="text-2xl font-black text-primary">2.1x</div><div className="text-xs font-semibold text-slate-500 uppercase">Mobile Rev</div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-slate-200" />

                    {/* Case Study 3: Healthcare App */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl parallax-layer float-card" data-parallax-speed="0.05">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img alt="Healthcare Analytics" className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover group- duration-700" src="/team-meeting.png" />
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur border border-white/20 p-4 sm:p-6 rounded-2xl z-20 translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div><div className="text-2xl font-black text-primary">HIPAA</div><div className="text-xs font-semibold text-slate-500 uppercase">Compliant</div></div>
                                    <div className="border-x border-slate-200"><div className="text-2xl font-black text-primary">500k+</div><div className="text-xs font-semibold text-slate-500 uppercase">Pt. Records</div></div>
                                    <div><div className="text-2xl font-black text-primary">99.99%</div><div className="text-xs font-semibold text-slate-500 uppercase">Uptime</div></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">HealthTech</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">Data Analytics</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Building a secure, HIPAA-compliant patient analytics platform.</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A major regional healthcare provider needed to consolidate fragmented patient data across 14 hospital systems into a unified, predictive analytics dashboard to improve preventative care outcomes, while strictly adhering to data privacy regulations.
                            </p>

                            <h4 className="text-xl font-bold mb-4">The Solution Focus:</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">database</span>
                                    <span className="text-slate-700">Complex ETL pipeline development for fragmented legacy data.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">monitor_heart</span>
                                    <span className="text-slate-700">Real-time dashboard for clinical staff using React and D3.js.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">verified</span>
                                    <span className="text-slate-700">End-to-end encryption and comprehensive audit logging.</span>
                                </li>
                            </ul>

                            <Link href="/case-studies/healthtech-data" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-slate-900 transition-colors">
                                Read Full Case Study <span className="material-symbols-outlined text-base">east</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Testimonial Banner */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="material-symbols-outlined text-6xl text-primary/20 mb-6 block">format_quote</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                        &quot;ZettaB didn&apos;t just build software; they challenged our assumptions, improved our processes, and delivered a product that genuinely transformed our business trajectory.&quot;
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <img alt="Client Avatar" className="w-16 h-16 rounded-full object-cover border-2 border-primary p-1" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" />
                        <div className="text-left">
                            <div className="font-bold text-lg">Alex Mercer</div>
                            <div className="text-sm text-slate-500 uppercase font-semibold">CTO at GlobalTrade Inc.</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action — white box style */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-white rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Ready to be our next success story?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Whether you need to scale an existing system or build something entirely new, our engineering teams are ready to deliver.
                        </p>
                        <Link href="/contact" className="cta-banner-button inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}


