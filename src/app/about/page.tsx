import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About ZettaB | Strategy, Design, Engineering",
    description: "Learn who we are, what we believe, and how we build world-class software for ambitious businesses.",
};

const values = [
    { title: "Engineering Excellence", desc: "We hold ourselves to the highest technical standards. Clean code, robust architecture, and performance are non-negotiable." },
    { title: "Design with Intent", desc: "Every design decision serves a purpose — guiding users, communicating value, and driving conversion." },
    { title: "Radical Transparency", desc: "We communicate openly. You always know where your project stands, what&apos;s coming next, and why decisions are made." },
    { title: "Long-Term Partnership", desc: "We don&apos;t disappear after launch. We grow with you, iterate on what works, and help you navigate what comes next." },
];

export default function AboutPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 text-center overflow-hidden">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/bg_about_hero_new.svg" alt="About Us Background" className="service-hero-image w-full h-full object-cover object-center opacity-100" />
                    <div className="absolute inset-0 bg-slate-950/35"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Engineering the Future,<br />One Product at a Time.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        We are a collective of strategic thinkers, technical experts, and design innovators building software that defines industry standards.
                    </p>
                </div>
            </section>

            {/* Two Column Intro */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                            <img alt="Our Workspace" className="rounded-3xl object-cover w-full h-[280px] sm:h-[360px] lg:h-[500px] shadow-2xl" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Born from a desire to do things <span className="text-primary italic">right</span>.</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Founded in 2016, ZettaB.io started with a simple observation: too many businesses were settling for mediocre software that hindered their growth rather than accelerating it.
                                </p>
                                <p>
                                    We set out to create an agency that prioritised engineering excellence, transparent communication, and tangible business results over quick fixes and buzzwords.
                                </p>
                                <p>
                                    Today, we are proud to be the trusted technology partner for startups scaling globally and enterprises modernising their infrastructure. We measure our success entirely by the success of the products we ship.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-4 pt-10 border-t border-slate-100">
                                <div>
                                    <div className="text-3xl font-black text-primary mb-1">2016</div>
                                    <div className="text-sm font-semibold uppercase text-slate-500">Founded</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-primary mb-1">50+</div>
                                    <div className="text-sm font-semibold uppercase text-slate-500">Engineers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-primary mb-1">100%</div>
                                    <div className="text-sm font-semibold uppercase text-slate-500">In-House</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-200 border-y border-slate-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">What We Stand For</h2>
                        <p className="text-slate-600 text-lg">
                            The principles that guide our decisions, our code, and our relationships.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">workspace_premium</span>
                            <h3 className="text-xl font-bold mb-3">Uncompromising Quality</h3>
                            <p className="text-slate-600 leading-relaxed">We believe in writing clean, maintainable, and thoroughly tested code. We don&apos;t cut corners because technical debt always costs more later.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">handshake</span>
                            <h3 className="text-xl font-bold mb-3">Radical Transparency</h3>
                            <p className="text-slate-600 leading-relaxed">No black boxes. We provide total visibility into our process, progress, and challenges. Good news travels fast, bad news travels faster.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">insights</span>
                            <h3 className="text-xl font-bold mb-3">Business Integration</h3>
                            <p className="text-slate-600 leading-relaxed">We aren&apos;t just order-takers. We act as strategic advisors, questioning assumptions and aligning technology choices with your revenue goals.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">speed</span>
                            <h3 className="text-xl font-bold mb-3">Agile Velocity</h3>
                            <p className="text-slate-600 leading-relaxed">We ship early and often. By prioritizing rapid iteration and feedback loops, we reduce risk and ensure the product meets real user needs.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">diversity_2</span>
                            <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
                            <p className="text-slate-600 leading-relaxed">Technology moves fast, and so do we. We invest heavily in our team&apos;s growth, ensuring we always bring the most effective modern tools to your project.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">verified_user</span>
                            <h3 className="text-xl font-bold mb-3">Security First</h3>
                            <p className="text-slate-600 leading-relaxed">In a vulnerable digital landscape, security is never an afterthought. We build robust, compliant systems designed to protect your data and your users.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-slate-900 mb-4">Leadership Team</h2>
                            <p className="text-slate-600 text-lg">
                                Led by industry veterans who have scaled products for Fortune 500s and hyper-growth startups.
                            </p>
                        </div>
                        <Link href="/contact" className="hidden md:inline-flex px-6 py-3 border-2 border-slate-200 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors">
                            Join Our Team
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="CEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" />
                            </div>
                            <h4 className="text-xl font-bold">Elena Rostova</h4>
                            <p className="text-primary font-bold text-sm mb-3">Founder & CEO</p>
                            <p className="text-slate-600 text-sm">Former VP of Engineering at TechGlobal. Passionate about aligning technical strategy with business scaling.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="CTO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" />
                            </div>
                            <h4 className="text-xl font-bold">Marcus Vance</h4>
                            <p className="text-primary font-bold text-sm mb-3">Chief Technology Officer</p>
                            <p className="text-slate-600 text-sm">System architecture expert with over 15 years experience designing high-availability cloud infrastructure.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="Design Director" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" />
                            </div>
                            <h4 className="text-xl font-bold">Sarah Jenkins</h4>
                            <p className="text-primary font-bold text-sm mb-3">Head of Design</p>
                            <p className="text-slate-600 text-sm">Award-winning UX practitioner focused on building intuitive interfaces that drive user engagement.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="Delivery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" />
                            </div>
                            <h4 className="text-xl font-bold">David Chen</h4>
                            <p className="text-primary font-bold text-sm mb-3">Head of Delivery</p>
                            <p className="text-slate-600 text-sm">Master of agile methodologies ensuring projects hit deadlines, budgets, and quality metrics consistently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workplace / Culture */}
            <section className="py-24 bg-slate-200 overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">A culture built on innovation and trust.</h2>
                            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                                We&apos;ve created an environment where top talent wants to stay. By fostering autonomy, continuous learning, and a strictly blameless post-mortem culture, we attract engineers who are passionate about their craft.
                            </p>
                            <ul className="space-y-6 mb-10">
                                <li className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">public</span>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-1">Remote-First Flexibility</h4>
                                        <p className="text-slate-600 text-sm">While we maintain hubs in London and NY, we hire the best talent globally regardless of location.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-1">R&D Fridays</h4>
                                        <p className="text-slate-600 text-sm">Our team spends 20% of their time exploring emerging techs like Web3, GenAI, and edge computing.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-1">Comprehensive Wellness</h4>
                                        <p className="text-slate-600 text-sm">We provide top-tier health coverage, mental health resources, and mandatory minimum PTO.</p>
                                    </div>
                                </li>
                            </ul>
                            <Link href="/careers" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-slate-900 transition-colors">
                                View Open Positions <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img alt="Office Culture" className="rounded-3xl object-cover h-64 w-full filter brightness-95 contrast-105 saturate-90" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" />
                                <img alt="Team Event" className="rounded-3xl object-cover h-48 w-full filter brightness-95 contrast-105 saturate-90" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" />
                            </div>
                            <div className="space-y-4 pt-10">
                                <img alt="Coding" className="rounded-3xl object-cover h-48 w-full filter brightness-95 contrast-105 saturate-90" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" />
                                <img alt="Meeting" className="rounded-3xl object-cover h-64 w-full filter brightness-95 contrast-105 saturate-90" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
