import type { Metadata } from "next";
import Link from "next/link";

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
            {/* Header / Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Service</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Web Platforms<br />built to perform.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        High-converting marketing sites, complex web applications, and robust e-commerce platforms engineered with modern web standards.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-primary/30">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>

            {/* Service Details Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16">

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
                            <img alt="Web Development" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYjF-lO4l01f1U2dktJm2B23XQ8Fp2V03u7Qf21o4t0K8M3O_H8T6P6o_V8q_Q6E2F6w_l3i0g_J0o_S5W0J8l_e0k2D9f2G7V0L7w2O-k8r_Y5I-E8k4z_f9Y_e3F6C2q8j4Q5Q4k7C3J8b5L6w2B8w6B3E9n4j0U7m0V9_M2v6X7s5q_x8-D8R3B8I6x4I-V8M7" />
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
