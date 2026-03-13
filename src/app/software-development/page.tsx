import type { Metadata } from "next";
import Link from "next/link";
import { WhitepaperCTA } from "@/components/WhitepaperCTA";

export const metadata: Metadata = {
    title: "Software Development | ZettaB",
    description: "Custom systems, APIs, and enterprise platforms built with clean architecture and long-term maintainability.",
};

const categories = [
    { title: "Custom Business Software", desc: "Bespoke desktop and web applications that replace costly off-the-shelf software with something that fits your exact workflow.", icon: "dashboard_customize" },
    { title: "API Development & Integration", desc: "RESTful and GraphQL APIs that connect your systems — and third-party services — cleanly and reliably.", icon: "integration_instructions" },
    { title: "Database Architecture", desc: "Schema design, query optimisation, and data modelling for relational and NoSQL databases at any scale.", icon: "database" },
    { title: "Enterprise Platforms", desc: "Internal tooling, admin dashboards, and enterprise portals that give your teams real leverage.", icon: "domain" },
    { title: "Legacy Modernisation", desc: "We refactor and migrate legacy codebases to modern architectures without service disruption.", icon: "upgrade" },
    { title: "Technical Architecture", desc: "Hands-on technical leadership and architecture reviews to ensure your engineering foundation is solid.", icon: "architecture" },
];

export default function SoftwareDevelopmentPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 text-center overflow-hidden min-h-[62vh] flex items-center">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/service_bg_software_new.svg" alt="Software Development Background" className="service-hero-image w-full h-full object-cover object-center opacity-100" />
                    <div className="absolute inset-0 bg-slate-950/35"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Software Development
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        Custom systems, complex integrations, and enterprise platforms engineered with clean architecture and long-term maintainability.
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
                                Quality software is the backbone of modern business. We design and build bespoke software solutions that move the needle, whether it&apos;s automating critical workflows, migrating legacy systems to the cloud, or launching an entirely new product.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our engineering culture prioritizes robust automated testing, CI/CD pipelines, and creating clean, self-documenting code bases that internal teams love to inherit.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {categories.map((item) => (
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
                                        <h4 className="font-bold text-lg mb-1">Architecture & Planning</h4>
                                        <p className="text-slate-600">Defining system models, choosing the right stack, and creating technical documentation.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Agile Development</h4>
                                        <p className="text-slate-600">Iterative sprints with regular demos, ensuring the product continuously aligns with your vision.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Automated QA & Deployment</h4>
                                        <p className="text-slate-600">Rigorous testing via CI/CD pipelines before pushing robust code to production environments.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content (Sidebar / Tech Stack / CTA) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img alt="Software Engineering" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" />
                        </div>

                        {/* Tech Stack Box */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">code</span>
                                Core Technologies
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Node.js</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Python</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Go</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">PostgreSQL</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">MongoDB</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Redis</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Docker</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Whitepaper Download Section */}
            <WhitepaperCTA
                title="The Modern Software Architecture Guide"
                description="Download our comprehensive whitepaper on selecting scalable tech stacks, implementing CI/CD pipelines, and establishing secure coding standards for enterprise applications."
                pdfUrl="/whitepapers/Software-Development-service.pdf"
            />

            {/* Global Contact CTA Box */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-slate-50 rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a custom software build?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our engineers to map your architecture, delivery phases, and integration needs for long-term scale.</p>
                        <Link href="/contact" className="cta-banner-button inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}


