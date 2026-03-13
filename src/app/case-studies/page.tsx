import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Case Studies | ZettaB",
    description: "Explore our recent work and client success stories.",
};

const caseStudies = [
    {
        client: "Global Retail Co.",
        title: "E-Commerce Headless Migration",
        metrics: ["40% Faster Load Time", "22% Conversion Lift", "15% Lower Bounce Rate"],
        tags: ["Next.js", "Shopify", "Vercel"],
        image: "https://images.unsplash.com/photo-1556742049-0c37d80f6fa9?auto=format&fit=crop&q=80&w=1200",
        slug: "/case-study-ecommerce-redesign"
    },
    {
        client: "FinTech Innovators",
        title: "SaaS Dashboard Redesign",
        metrics: ["60% Improved UX Score", "3x User Retention", "Zero Downtime Launch"],
        tags: ["React", "TypeScript", "Tailwind"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        slug: "#"
    },
    {
        client: "Healthcare Start",
        title: "Patient Mobile Application",
        metrics: ["1M+ Downloads", "4.8 App Store Rating", "HIPAA Compliant"],
        tags: ["React Native", "Node.js", "AWS"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        slug: "#"
    }
];

export default function CaseStudiesPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/bg_portfolio_hero_new.svg" alt="Portfolio Background" className="service-hero-image w-full h-full object-cover object-center opacity-100" />
                    <div className="absolute inset-0 bg-slate-950/35"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Client Success<br />Stories.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        See how we&apos;ve helped businesses transform their digital presence, scale operations, and drive revenue.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {caseStudies.map((study, idx) => (
                        <div key={study.title} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

                            {/* Image Column */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 -z-10"></div>
                                <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-100">
                                    <img src={study.image} alt={study.title} className="w-full h-auto object-cover aspect-[4/3] group- duration-700" />
                                </div>
                            </div>

                            {/* Text Column */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-primary font-bold mb-2">{study.client}</p>
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">{study.title}</h2>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
                                    {study.metrics.map(metric => {
                                        const [value, ...rest] = metric.split(" ");
                                        const label = rest.join(" ");
                                        return (
                                            <div key={metric}>
                                                <div className="text-2xl font-black text-slate-900">{value}</div>
                                                <div className="text-sm text-slate-500 font-medium">{label}</div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <Link href={study.slug} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mt-4">
                                    Read Full Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Contact CTA Box */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-white rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a web project?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our technical team to determine the best approach for an upcoming build.</p>
                        <Link href="/contact" className="cta-banner-button inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}


