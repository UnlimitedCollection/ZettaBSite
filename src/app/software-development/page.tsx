import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Software Development | ZettaB",
    description: "Custom systems, APIs, and enterprise platforms built with clean architecture and long-term maintainability.",
};

const categories = [
    { title: "Custom Business Software", desc: "Bespoke desktop and web applications that replace costly off-the-shelf software with something that fits your exact workflow." },
    { title: "API Development & Integration", desc: "RESTful and GraphQL APIs that connect your systems — and third-party services — cleanly and reliably." },
    { title: "Database Architecture", desc: "Schema design, query optimisation, and data modelling for relational and NoSQL databases at any scale." },
    { title: "Enterprise Platforms", desc: "Internal tooling, admin dashboards, and enterprise portals that give your teams real leverage." },
    { title: "Legacy Modernisation", desc: "We refactor and migrate legacy codebases to modern architectures without service disruption." },
    { title: "Technical Architecture", desc: "Hands-on technical leadership and architecture reviews to ensure your engineering foundation is solid." },
];

export default function SoftwareDevelopmentPage() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Software Development</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Custom Systems</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">Built for reliability, security, and long-term maintainability by engineers who take pride in their craft.</p>
                    <div className="mt-10">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors">Discuss Your Requirements</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Build</p>
                        <h2 className="text-4xl font-bold text-gray-900">Custom software categories</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((item) => (
                            <div key={item.title} className="p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-bg-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Engineering Standards</p>
                        <h2 className="text-4xl font-bold text-gray-900">How we write code</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {["Comprehensive test coverage (unit, integration, e2e)", "Code reviews on every pull request", "Documentation first approach", "CI/CD from day one", "Semantic versioning and changelogs", "Security scanning in the build pipeline"].map(item => (
                            <div key={item} className="flex items-center gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                                <div className="p-1.5 bg-primary/10 rounded-full text-primary flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span className="text-sm text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Have a complex system to build?</h2>
                    <p className="text-blue-200 text-lg mb-10">We love a challenging brief. Tell us about your requirements and we'll tell you how we'd build it.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">Send Us Your Brief</Link>
                </div>
            </section>
        </>
    );
}
