import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Services | ZettaB — All Expertise in One Place",
    description: "Explore the full range of ZettaB services: web, mobile, cloud, marketing, UX, and software development.",
};

const services = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>,
        title: "Web Development",
        desc: "Scalable, performant web applications and marketing sites built with modern stacks and a focus on conversion.",
        features: ["Next.js, React, TypeScript", "Performance & Core Web Vitals", "E-commerce & SaaS platforms", "CMS integration"],
        href: "/web-development",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="12" x="8.5" y="2" rx="1" /><path d="M11 14h2M12 17v1M5 6H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" /></svg>,
        title: "Mobile Applications",
        desc: "Native iOS and Android apps, React Native cross-platform solutions — delivering excellent UX across every device.",
        features: ["iOS & Android native apps", "React Native cross-platform", "Offline-first architecture", "App Store submission"],
        href: "/mobile-applications",
        color: "from-indigo-500 to-purple-600",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>,
        title: "Cloud Deployments",
        desc: "Secure, scalable cloud infrastructure on AWS, GCP, and Azure — designed for high availability and growth.",
        features: ["AWS, GCP, Azure", "CI/CD pipelines", "Docker & Kubernetes", "Security & compliance"],
        href: "/cloud-deployments",
        color: "from-purple-500 to-pink-600",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>,
        title: "Digital Marketing",
        desc: "Data-driven growth across SEO, paid media, content, and social. Measurable results tied to your revenue goals.",
        features: ["SEO & Content Strategy", "PPC & paid media", "Social media management", "Analytics & reporting"],
        href: "/digital-marketing",
        color: "from-pink-500 to-rose-600",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
        title: "UI/UX Design",
        desc: "Human-centred design that reduces friction, increases engagement, and drives real business outcomes.",
        features: ["User research & testing", "Wireframing & prototyping", "Design systems", "Figma & interactive prototypes"],
        href: "/ui-ux-designs",
        color: "from-orange-500 to-amber-500",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
        title: "Software Development",
        desc: "Custom systems, APIs, and enterprise platforms built for reliability, security, and long-term maintainability.",
        features: ["Custom APIs & backends", "System integrations", "Enterprise software", "Technical architecture"],
        href: "/software-development",
        color: "from-teal-500 to-cyan-600",
    },
];

export default function ServicesPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Comprehensive Digital<br />Engineering Solutions.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        We provide end-to-end technology services designed to propel your business forward, from initial strategy to deployment and beyond.
                    </p>
                </div>
            </section>

            {/* Services Detailed Breakdown */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">

                        {/* Service Item 1 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold w-fit mb-6">
                                    <span className="material-symbols-outlined text-sm">developer_mode</span>
                                    Custom Software
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 mb-6">Bespoke systems built for complex operations.</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Off-the-shelf software often forces you to adapt your business to the tool. We build custom software that adapts to your business. From internal ERP systems to customer-facing portals, we engineer solutions that streamline workflows and create competitive advantages.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Enterprise Resource Planning (ERP) integrations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Custom CRM development</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Legacy system modernization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">API development & third-party integrations</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                    Discuss your custom project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img alt="Custom Software" className="rounded-3xl shadow-2xl object-cover w-full h-[400px]" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" />
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <img alt="Cloud Infrastructure" className="rounded-3xl shadow-2xl object-cover w-full h-[400px]" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold w-fit mb-6">
                                    <span className="material-symbols-outlined text-sm">cloud_queue</span>
                                    Cloud Architecture
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 mb-6">Secure, scalable, and highly available infrastructure.</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Downtime is not an option. We design and deploy robust cloud architectures on AWS, Google Cloud, and Azure that ensure your applications remain fast and accessible, even under extreme load.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Cloud migration & strategy</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Serverless architecture</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Container orchestration (Kubernetes)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">CI/CD pipeline automation</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                    Scale your infrastructure <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold w-fit mb-6">
                                    <span className="material-symbols-outlined text-sm">language</span>
                                    Web Development
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 mb-6">High-performance web experiences that convert.</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Your website is your best salesperson. We build lightning-fast, SEO-optimized, and highly interactive web applications using modern frameworks like Next.js and React to drive engagement and revenue.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Performant corporate websites</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Complex e-commerce platforms</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Interactive SaaS dashboards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700">Headless CMS implementation</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                    Upgrade your web presence <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img alt="Web Development" className="rounded-3xl shadow-2xl object-cover w-full h-[400px]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Banner */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-10">Powered by modern technologies</h3>
                    <div className="flex flex-wrap justify-center gap-6 opacity-60">
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold shadow-sm">React / Next.js</span>
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold shadow-sm">Node.js</span>
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold shadow-sm">TypeScript</span>
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold shadow-sm">Python</span>
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold shadow-sm">PostgreSQL</span>
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold shadow-sm">AWS / GCP</span>
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold shadow-sm">Kubernetes</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">Need a custom solution not listed here?</h2>
                    <p className="text-xl text-primary-light mb-10 opacity-90">
                        Our engineering team thrives on unique challenges. Let's discuss your specific requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
