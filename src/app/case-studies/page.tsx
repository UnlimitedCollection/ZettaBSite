import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Case Studies | ZettaB",
    description: "Explore our recent work and client success stories.",
};

const caseStudies = [
    {
        client: "Global Retail Co.",
        title: "E-Commerce Headless Migration",
        metrics: ["40% Faster Load Time", "22% Conversion Lift", "15% Lower Bounce Rate"],
        tags: ["Next.js", "Shopify", "Vercel"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpYjF-lO4l01f1U2dktJm2B23XQ8Fp2V03u7Qf21o4t0K8M3O_H8T6P6o_V8q_Q6E2F6w_l3i0g_J0o_S5W0J8l_e0k2D9f2G7V0L7w2O-k8r_Y5I-E8k4z_f9Y_e3F6C2q8j4Q5Q4k7C3J8b5L6w2B8w6B3E9n4j0U7m0V9_M2v6X7s5q_x8-D8R3B8I6x4I-V8M7",
        slug: "/case-study-ecommerce-redesign"
    },
    {
        client: "FinTech Innovators",
        title: "SaaS Dashboard Redesign",
        metrics: ["60% Improved UX Score", "3x User Retention", "Zero Downtime Launch"],
        tags: ["React", "TypeScript", "Tailwind"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpYjF-lO4l01f1U2dktJm2B23XQ8Fp2V03u7Qf21o4t0K8M3O_H8T6P6o_V8q_Q6E2F6w_l3i0g_J0o_S5W0J8l_e0k2D9f2G7V0L7w2O-k8r_Y5I-E8k4z_f9Y_e3F6C2q8j4Q5Q4k7C3J8b5L6w2B8w6B3E9n4j0U7m0V9_M2v6X7s5q_x8-D8R3B8I6x4I-V8M7",
        slug: "#"
    },
    {
        client: "Healthcare Start",
        title: "Patient Mobile Application",
        metrics: ["1M+ Downloads", "4.8 App Store Rating", "HIPAA Compliant"],
        tags: ["React Native", "Node.js", "AWS"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpYjF-lO4l01f1U2dktJm2B23XQ8Fp2V03u7Qf21o4t0K8M3O_H8T6P6o_V8q_Q6E2F6w_l3i0g_J0o_S5W0J8l_e0k2D9f2G7V0L7w2O-k8r_Y5I-E8k4z_f9Y_e3F6C2q8j4Q5Q4k7C3J8b5L6w2B8w6B3E9n4j0U7m0V9_M2v6X7s5q_x8-D8R3B8I6x4I-V8M7",
        slug: "#"
    }
];

export default function CaseStudiesPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Work</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Client Success<br />Stories.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        See how we've helped businesses transform their digital presence, scale operations, and drive revenue.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {caseStudies.map((study, idx) => (
                        <div key={study.title} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

                            {/* Image Column */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 -z-10"></div>
                                <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-100">
                                    <img src={study.image} alt={study.title} className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>

                            {/* Text Column */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-primary font-bold mb-2">{study.client}</p>
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{study.title}</h2>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100 dark:border-slate-800">
                                    {study.metrics.map(metric => {
                                        const [value, ...rest] = metric.split(" ");
                                        const label = rest.join(" ");
                                        return (
                                            <div key={metric}>
                                                <div className="text-2xl font-black text-slate-900 dark:text-white">{value}</div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <Link href={study.slug} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mt-4">
                                    Read Full Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-50 dark:bg-slate-800 text-center border-t border-slate-200 dark:border-slate-700">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Ready to be our next success story?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">Let's discuss your technical challenges and map out a solution tailored to your goals.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-slate-900 transition-colors shadow-lg">
                        Start a Conversation
                    </Link>
                </div>
            </section>
        </main>
    );
}
