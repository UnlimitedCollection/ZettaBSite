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
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Our Expertise</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Six core service lines. One strategic partner. Every solution is tailored to your goals and built to grow.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="group flex flex-col p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-white"
                            >
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white w-fit mb-6 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">{service.title}</h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                                <ul className="flex flex-col gap-2 mt-auto">
                                    {service.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                                            <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-6">
                                    Learn more
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Not sure which service fits?</h2>
                    <p className="text-blue-200 text-lg mb-10">Let's have a free discovery call. We'll ask the right questions and recommend the best approach.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">
                        Book Discovery Call
                    </Link>
                </div>
            </section>
        </>
    );
}
