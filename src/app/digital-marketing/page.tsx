import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Digital Marketing | ZettaB",
    description: "Data-driven digital marketing strategies — SEO, paid media, social, and content that drives measurable growth.",
};

const services = [
    { title: "SEO Strategy", desc: "Technical SEO, on-page optimisation, and content strategy to rank for the terms your buyers search." },
    { title: "Paid Search & PPC", desc: "Google Ads campaigns engineered for maximum ROAS with continuous optimisation cycles." },
    { title: "Social Media Marketing", desc: "Organic and paid social across LinkedIn, Meta, and X — content that converts." },
    { title: "Content Marketing", desc: "Thought leadership, blog, and educational content that earns trust and drives organic traffic." },
    { title: "Email Marketing", desc: "Nurture sequences and campaign campaigns with strong subject lines and data-driven segmentation." },
    { title: "Analytics & Reporting", desc: "GA4, Looker Studio dashboards, and weekly performance reports tied to your business goals." },
];

export default function DigitalMarketingPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Service</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Digital Marketing that<br />drives measurable growth.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        Data-driven digital marketing strategies — SEO, paid media, social, and content that drives measurable ROI.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-primary/30">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>

            {/* Service Details Main Content */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16">

                    {/* Left Content (Text) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                In today's crowded digital landscape, generic campaigns don't cut it. Our digital marketing approach is heavily analytical, focusing on metrics that impact your bottom line—not just vanity metrics.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                We combine rigorous technical SEO, highly targeted paid media buying, and compelling content strategies to build sustainable growth engines for our clients.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {services.map((item) => (
                                    <div key={item.title} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-4">monitoring</span>
                                        <h4 className="font-bold dark:text-white mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Process</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg dark:text-white mb-1">Audit & Analysis</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Deep dive into your current metrics, competitor landscape, and technical setup.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg dark:text-white mb-1">Strategy Formulation</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Developing a multi-channel plan focused on high-intent user acquisition.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg dark:text-white mb-1">Execution & Iteration</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Launching campaigns, A/B testing creative, and continuously optimizing for CPA/ROAS.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content (Sidebar / Tech Stack / CTA) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img alt="Marketing Analytics" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYjF-lO4l01f1U2dktJm2B23XQ8Fp2V03u7Qf21o4t0K8M3O_H8T6P6o_V8q_Q6E2F6w_l3i0g_J0o_S5W0J8l_e0k2D9f2G7V0L7w2O-k8r_Y5I-E8k4z_f9Y_e3F6C2q8j4Q5Q4k7C3J8b5L6w2B8w6B3E9n4j0U7m0V9_M2v6X7s5q_x8-D8R3B8I6x4I-V8M7" />
                        </div>

                        {/* Tech Stack Box */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                Tools We Master
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Google Analytics 4</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Looker Studio</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Google Ads</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">SEMrush</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Meta Ads</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">HubSpot</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Ahrefs</span>
                            </div>
                        </div>

                        {/* Contact CTA Box */}
                        <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold text-2xl dark:text-white mb-4">Need a Marketing Audit?</h4>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Let's review your current campaigns and identify areas for immediate improvement.</p>
                            <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-primary transition-colors">
                                Schedule Call <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Related Case Study / Banner */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="material-symbols-outlined text-5xl mb-6 opacity-80">insights</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6">See how we scaled user acquisition by 300% for a Fintech startup.</h2>
                    <Link href="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                        Read Case Study
                    </Link>
                </div>
            </section>
        </main>
    );
}
