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
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Work</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Proven Results,<br />Not Just Promises.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Explore how we've helped companies across industries overcome complex technical challenges and achieve rapid growth.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Case Study 1: FinTech Scale-Up */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img alt="FinTech Dashboard" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYjF-lO4l01f1U2dktJm2B23XQ8Fp2V03u7Qf21o4t0K8M3O_H8T6P6o_V8q_Q6E2F6w_l3i0g_J0o_S5W0J8l_e0k2D9f2G7V0L7w2O-k8r_Y5I-E8k4z_f9Y_e3F6C2q8j4Q5Q4k7C3J8b5L6w2B8w6B3E9n4j0U7m0V9_M2v6X7s5q_x8-D8R3B8I6x4I-V8M7" />
                            {/* Overlay Stats (Optional/Decorative) */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-white/20 dark:border-slate-800 p-6 rounded-2xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div><div className="text-2xl font-black text-primary">300%</div><div className="text-xs font-semibold text-slate-500 uppercase">User Growth</div></div>
                                    <div className="border-x border-slate-200 dark:border-slate-800"><div className="text-2xl font-black text-primary">&lt;50ms</div><div className="text-xs font-semibold text-slate-500 uppercase">Latency</div></div>
                                    <div><div className="text-2xl font-black text-primary">Zero</div><div className="text-xs font-semibold text-slate-500 uppercase">Downtime</div></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">FinTech</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">Cloud Native</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Scaling a trading platform to handle 50k transactions per second.</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                When a rapidly growing EU-based retail trading platform hit their infrastructure limits during market volatility, they experienced costly outages. We completely re-architected their backend from a monolithic structure to a highly distributed, reactive microservices architecture deployed on Kubernetes across multi-region AWS.
                            </p>

                            <h4 className="text-xl font-bold dark:text-white mb-4">The Solution Focus:</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">insights</span>
                                    <span className="text-slate-700 dark:text-slate-300">Migration to event-driven Kafka architecture.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">shield_locked</span>
                                    <span className="text-slate-700 dark:text-slate-300">Implementation of Zero-Trust security model.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">speed</span>
                                    <span className="text-slate-700 dark:text-slate-300">Optimized matching engine reducing latency by 85%.</span>
                                </li>
                            </ul>

                            <Link href="/case-studies/fintech-scale" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-slate-900 dark:hover:text-white transition-colors">
                                Read Full Case Study <span className="material-symbols-outlined text-base">east</span>
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Case Study 2: E-Commerce Transformation */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">Retail / E-Comm</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">UX/UI Redesign</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Increasing cart conversion by 45% through headless commerce.</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                A legacy luxury retailer was losing market share due to an archaic, slow monolithic e-commerce platform. Their mobile experience was frustrating users, leading to high cart abandonment. We led a digital transformation, decoupling their frontend and backend to implement a headless architecture using Next.js and Shopify Plus.
                            </p>

                            <h4 className="text-xl font-bold dark:text-white mb-4">The Solution Focus:</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">draw</span>
                                    <span className="text-slate-700 dark:text-slate-300">Complete UI overhaul focusing on mobile-first navigation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">api</span>
                                    <span className="text-slate-700 dark:text-slate-300">Integration of headless CMS for dynamic marketing content.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">flash_on</span>
                                    <span className="text-slate-700 dark:text-slate-300">Sub-second page loads improving SEO rankings instantly.</span>
                                </li>
                            </ul>

                            <Link href="/case-study-ecommerce-redesign" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-slate-900 dark:hover:text-white transition-colors">
                                Read Full Case Study <span className="material-symbols-outlined text-base">east</span>
                            </Link>
                        </div>
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl order-1 lg:order-2">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img alt="E-Commerce App" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0E3u-K5q_k3H3W1t-o0s3C7j5W-a_T0j4L3q2c5U2a7_P0Y1q_W0g-C7w8X7K6G5s9X5R_5c2O6q3V0S8g2G5A6s_T5n2P0R2c8J-Y2U8K6s-G2H9P_c_W2z_G0i5j1j_u2Y9i-O4_s0_R3d5M6_c5q5F_i5o3O-J1z9y3o_E0b5Q9s9w8T-S_j4L4K2B8P_u9K_q5C8p-N3y2h" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-white/20 dark:border-slate-800 p-6 rounded-2xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div><div className="text-2xl font-black text-primary">+45%</div><div className="text-xs font-semibold text-slate-500 uppercase">Conversion</div></div>
                                    <div className="border-x border-slate-200 dark:border-slate-800"><div className="text-2xl font-black text-primary">-60%</div><div className="text-xs font-semibold text-slate-500 uppercase">Bounce Rate</div></div>
                                    <div><div className="text-2xl font-black text-primary">2.1x</div><div className="text-xs font-semibold text-slate-500 uppercase">Mobile Rev</div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Case Study 3: Healthcare App */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img alt="Healthcare Analytics" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_p6z_p5K8j6h8d0i2F6s8L2q5E7Y9I1y5X7x8W7r3K_h5E6u5M_V_k5K_k_H6X_Z8D8m8L6W_F3K5g9s6c3X5g2o9d1u_T_d4i5U7l5v8i6i3B5w8B2_c4H2V0M_Z8A1E7V9q9H_Y5T4s_t-A4D2n7a5V8l-a_u_U_h8E9O2e5Z4W_p6y1_D3G7" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-white/20 dark:border-slate-800 p-6 rounded-2xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div><div className="text-2xl font-black text-primary">HIPAA</div><div className="text-xs font-semibold text-slate-500 uppercase">Compliant</div></div>
                                    <div className="border-x border-slate-200 dark:border-slate-800"><div className="text-2xl font-black text-primary">500k+</div><div className="text-xs font-semibold text-slate-500 uppercase">Pt. Records</div></div>
                                    <div><div className="text-2xl font-black text-primary">99.99%</div><div className="text-xs font-semibold text-slate-500 uppercase">Uptime</div></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">HealthTech</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">Data Analytics</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Building a secure, HIPAA-compliant patient analytics platform.</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                A major regional healthcare provider needed to consolidate fragmented patient data across 14 hospital systems into a unified, predictive analytics dashboard to improve preventative care outcomes, while strictly adhering to data privacy regulations.
                            </p>

                            <h4 className="text-xl font-bold dark:text-white mb-4">The Solution Focus:</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">database</span>
                                    <span className="text-slate-700 dark:text-slate-300">Complex ETL pipeline development for fragmented legacy data.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">monitor_heart</span>
                                    <span className="text-slate-700 dark:text-slate-300">Real-time dashboard for clinical staff using React and D3.js.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1 text-xl">verified</span>
                                    <span className="text-slate-700 dark:text-slate-300">End-to-end encryption and comprehensive audit logging.</span>
                                </li>
                            </ul>

                            <Link href="/case-studies/healthtech-data" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-slate-900 dark:hover:text-white transition-colors">
                                Read Full Case Study <span className="material-symbols-outlined text-base">east</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Testimonial Banner */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="material-symbols-outlined text-6xl text-primary/20 mb-6 block">format_quote</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                        "ZettaB didn't just build software; they challenged our assumptions, improved our processes, and delivered a product that genuinely transformed our business trajectory."
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <img alt="Client Avatar" className="w-16 h-16 rounded-full object-cover border-2 border-primary p-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsMIsLwT9Xz7U6_Y3V6T89m_c0_S363JpUqI1eR_-K9r3c3kHJUQ8-I5Z_O7s8qD6R_v4W-Xq-KQQ5dY-O1S_T8r5p-O6x8qQ1e8z7_Kk-g_y9F_zB-G0K-tA-4O5N2L6bF2n1w8gL8qV9-K_I-P_G9aB_X4lKqX-G_5QoT8n6L_F5-mF_7fP_uT_6Y" />
                        <div className="text-left">
                            <div className="font-bold text-lg dark:text-white">Alex Mercer</div>
                            <div className="text-sm text-slate-500 uppercase font-semibold">CTO at GlobalTrade Inc.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to be our next success story?</h2>
                    <p className="text-xl text-primary-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you need to scale an existing system or build something entirely new, our engineering teams are ready to deliver.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                        Start a Conversation <span className="material-symbols-outlined">forum</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
