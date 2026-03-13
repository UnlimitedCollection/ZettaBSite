import type { Metadata } from "next";
import Link from "next/link";
import { WhitepaperCTA } from "@/components/WhitepaperCTA";

export const metadata: Metadata = {
    title: "UI/UX Design | ZettaB",
    description: "Human-centred UI/UX design that creates engaging, intuitive experiences driving real conversion and retention.",
};

const process = [
    { step: "01", title: "User Research", desc: "We talk to your users, map journeys and identify friction points before a pixel is drawn.", icon: "group" },
    { step: "02", title: "Information Architecture", desc: "Content hierarchy, navigation structure, and user flows that make sense intuitively.", icon: "account_tree" },
    { step: "03", title: "Wireframing", desc: "Lo-fi prototypes that focus on layout and interaction logic without distraction.", icon: "view_quilt" },
    { step: "04", title: "Visual Design", desc: "Polished, brand-cohesive UI built with precision typography, colour, and spacing.", icon: "palette" },
    { step: "05", title: "Prototype & Test", desc: "Interactive prototypes tested with real users before development begins.", icon: "science" },
    { step: "06", title: "Design System", desc: "Scalable, componentised design systems in Figma for your team to build on long-term.", icon: "widgets" },
];

export default function UIUXDesignsPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 text-center overflow-hidden">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/service_bg_uiux.png" alt="UI/UX Designs Background" className="w-full h-full object-cover object-center opacity-80" />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        UI/UX Design converts beautifully.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        Human-centred design strategies that solve complex user problems, build brand trust, and drive measurable business outcomes.
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
                                Great design isn&apos;t just about aesthetics; it&apos;s a strategic tool for user retention and conversion. We build digital products that feel intuitive, accessible, and polished from the very first interaction.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our design team bridges the gap between user needs and technical capabilities, ensuring everything we design can be seamlessly implemented by engineering teams.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {process.map((item) => (
                                    <div key={item.step} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group">
                                        <div className="absolute -right-6 -top-6 text-9xl font-black text-slate-100 group-hover:scale-110 transition-transform duration-500 pointer-events-none">{item.step}</div>
                                        <div className="relative z-10">
                                            <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                                            <h4 className="font-bold mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
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
                                        <h4 className="font-bold text-lg mb-1">Discovery & Research</h4>
                                        <p className="text-slate-600">Understanding your business goals, target audience, and competitive landscape through stakeholder interviews and market analysis.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Wireframing & Prototyping</h4>
                                        <p className="text-slate-600">Mapping out user journeys and laying out low-fidelity wireframes to rapidly validate structural concepts.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">High-Fidelity UI & Handoff</h4>
                                        <p className="text-slate-600">Applying your brand&apos;s visual identity, creating a scalable design system, and providing developers with perfectly documented assets.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content (Sidebar / Tech Stack / CTA) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img alt="UI/UX Design App" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200" />
                        </div>

                        {/* Tech Stack Box */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">design_services</span>
                                Design Arsenal
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Figma</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Framer</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Adobe Creative Suite</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Miro</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Maze</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Storybook (Tokens)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Whitepaper Download Section */}
            <WhitepaperCTA
                title="The Executive Guide to Enterprise UX"
                description="Download our comprehensive whitepaper on aligning business metrics with user experience, conducting high-ROI user research, and scaling design systems across organizations."
                pdfUrl="/whitepapers/UIUX.pdf"
            />

            {/* Global Contact CTA Box */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-slate-50 rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
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


