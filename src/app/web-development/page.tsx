import type { Metadata } from "next";
import Link from "next/link";
import { WhitepaperCTA } from "@/components/WhitepaperCTA";

export const metadata: Metadata = {
    title: "Web Development | ZettaB",
    description: "Scalable web applications built with modern frameworks. We create high-performance websites and web apps that drive business growth.",
};

const offerings = [
    { title: "Marketing Websites", desc: "Conversion-focused sites that communicate your brand and drive qualified leads." },
    { title: "Web Applications", desc: "Complex, data-driven apps built for scale — from dashboards to full SaaS platforms." },
    { title: "E-commerce Platforms", desc: "End-to-end online stores with seamless UX, fast checkout, and robust admin." },
    { title: "Headless CMS Solutions", desc: "Content-first architecture with modern frontends and flexible content management." },
    { title: "API & Backend Systems", desc: "Robust RESTful and GraphQL APIs powering your web and mobile frontends." },
    { title: "Progressive Web Apps", desc: "PWAs delivering native-like experiences across all devices without app store friction." },
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "Supabase"];

export default function WebDevelopmentPage() {
    return (
        <main>


            {/* Service Details Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left Content (Text) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Your website is often the first interaction a prospect has with your business. We believe it should be fast, accessible, and strategically designed to guide users toward a clear conversion goal.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We utilize modern frameworks like Next.js and React to build dynamic, SEO-optimized web experiences that scale effortlessly from a few hundred visitors to millions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {offerings.map((item) => (
                                    <div key={item.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-4">language</span>
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
                                        <h4 className="font-bold text-lg mb-1">Requirements & Architecture</h4>
                                        <p className="text-slate-600">Defining data models, selecting the appropriate CMS, and outlining the Technical Architecture.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Frontend Engineering</h4>
                                        <p className="text-slate-600">Translating designs into responsive, accessible, and performant React components.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Backend Integration & Launch</h4>
                                        <p className="text-slate-600">Connecting APIs, configuring databases, and deploying via automated CI/CD pipelines.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content (Sidebar / Tech Stack / CTA) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img alt="Web Development" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" />
                        </div>

                        {/* Tech Stack Box */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">webhook</span>
                                Web Stack
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {stack.map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Contact CTA Box */}
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                            <h4 className="font-bold text-2xl mb-4">Planning a web project?</h4>
                            <p className="text-slate-600 mb-6">Speak with our technical team to determine the best approach for an upcoming build.</p>
                            <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:border-primary transition-colors">
                                Schedule Call <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Whitepaper Download Section */}
            <WhitepaperCTA
                title="The Modern Web Architecture Guide"
                description="Download our comprehensive 2026 whitepaper covering the migration from monoliths to headless setups, edge computing strategies, and SSR vs SSG decision frameworks."
                pdfUrl="/whitepapers/Web-Development.pdf"
            />

            {/* Related Case Study / Banner */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="material-symbols-outlined text-5xl mb-6 opacity-80">insights</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6">See how we rebuilt an enterprise SaaS dashboard in Next.js.</h2>
                    <Link href="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                        Read Case Study
                    </Link>
                </div>
            </section>
        </main>
    );
}
