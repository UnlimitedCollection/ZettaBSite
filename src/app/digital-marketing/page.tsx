import type { Metadata } from "next";
import Link from "next/link";
import { WhitepaperCTA } from "@/components/WhitepaperCTA";

export const metadata: Metadata = {
    title: "Digital Marketing | ZettaB",
    description: "Data-driven digital marketing strategies — SEO, paid media, social, and content that drives measurable growth.",
};

const services = [
    { title: "SEO Strategy", desc: "Technical SEO, on-page optimisation, and content strategy to rank for the terms your buyers search.", icon: "manage_search" },
    { title: "Paid Search & PPC", desc: "Google Ads campaigns engineered for maximum ROAS with continuous optimisation cycles.", icon: "ads_click" },
    { title: "Social Media Marketing", desc: "Organic and paid social across LinkedIn, Meta, and X — content that converts.", icon: "share" },
    { title: "Content Marketing", desc: "Thought leadership, blog, and educational content that earns trust and drives organic traffic.", icon: "article" },
    { title: "Email Marketing", desc: "Nurture sequences and campaign campaigns with strong subject lines and data-driven segmentation.", icon: "mail" },
    { title: "Analytics & Reporting", desc: "GA4, Looker Studio dashboards, and weekly performance reports tied to your business goals.", icon: "insights" },
];

export default function DigitalMarketingPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 text-center overflow-hidden min-h-[62vh] flex items-center">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/service_bg_marketing_new.svg" alt="Digital Marketing Background" className="service-hero-image w-full h-full object-cover object-center opacity-100" />
                    <div className="absolute inset-0 bg-slate-950/35"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Digital Marketing
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        Data-driven digital marketing strategies — SEO, paid media, social, and content that drives measurable ROI.
                    </p>

                </div>
            </section>

            {/* Service Details Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left Content (Text) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                In today&apos;s crowded digital landscape, generic campaigns don&apos;t cut it. Our digital marketing approach is heavily analytical, focusing on metrics that impact your bottom line—not just vanity metrics.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We combine rigorous technical SEO, highly targeted paid media buying, and compelling content strategies to build sustainable growth engines for our clients.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {services.map((item) => (
                                    <div key={item.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Audit & Analysis</h4>
                                        <p className="text-slate-600">Deep dive into your current metrics, competitor landscape, and technical setup.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Strategy Formulation</h4>
                                        <p className="text-slate-600">Developing a multi-channel plan focused on high-intent user acquisition.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Execution & Iteration</h4>
                                        <p className="text-slate-600">Launching campaigns, A/B testing creative, and continuously optimizing for CPA/ROAS.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content (Sidebar / Tech Stack / CTA) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img alt="Marketing Analytics" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" />
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
                    </div>

                </div>
            </section>

            {/* Whitepaper Download Section */}
            <WhitepaperCTA
                title="The Data-Driven Marketing Handbook"
                description="Download our comprehensive whitepaper on leveraging multi-touch attribution, mastering technical SEO, and scaling profitable ROAS across paid channels."
                pdfUrl="/whitepapers/Digital-marketing.pdf"
            />

            {/* Global Contact CTA Box */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-slate-50 rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a digital growth campaign?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our marketing strategists to define channels, budget allocation, and measurement for sustainable growth.</p>
                        <Link href="/contact" className="cta-banner-button inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}


