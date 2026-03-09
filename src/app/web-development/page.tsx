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
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Web Development</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Scalable Web Apps</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We build web experiences that perform as well as they look — optimised for speed, SEO, and conversion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors">Start a Project</Link>
                        <Link href="/case-study-ecommerce-redesign" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-6 border border-white/20 text-white hover:bg-white/10 transition-colors">View Case Study</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Build</p>
                        <h2 className="text-4xl font-bold text-gray-900">Our Web Development Offerings</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item) => (
                            <div key={item.title} className="p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-bg-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Technology</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Modern Stack</h2>
                    <p className="text-gray-500 mb-12">We use proven, modern technologies chosen for performance, developer experience, and long-term maintainability.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {stack.map((tech) => (
                            <span key={tech} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:border-primary hover:text-primary transition-colors">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to launch your next web project?</h2>
                    <p className="text-blue-200 text-lg mb-10">Let's scope it out together. Free discovery call, no commitment.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">Get Started</Link>
                </div>
            </section>
        </>
    );
}
