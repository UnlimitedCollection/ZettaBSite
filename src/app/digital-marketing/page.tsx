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
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Digital Marketing</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Strategic Growth</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">Data-driven digital marketing that drives qualified traffic, nurtures leads, and converts to measurable revenue.</p>
                    <div className="mt-10">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors">Get a Marketing Audit</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
                        <h2 className="text-4xl font-bold text-gray-900">Full-funnel marketing support</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item) => (
                            <div key={item.title} className="p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[{ v: "3.2x", l: "Average ROAS" }, { v: "+140%", l: "Organic traffic growth" }, { v: "60%", l: "Reduction in CAC" }, { v: "98", l: "Avg. domain authority" }].map(s => (
                        <div key={s.l} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-bold text-primary mb-1">{s.v}</div>
                            <div className="text-xs text-gray-500">{s.l}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Marketing that pays for itself</h2>
                    <p className="text-blue-200 text-lg mb-10">Ready to grow? Let us audit your current strategy and show you the quick wins.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">Get Your Free Audit</Link>
                </div>
            </section>
        </>
    );
}
