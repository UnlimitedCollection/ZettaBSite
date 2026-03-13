import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Careers | ZettaB — Join the Innovation",
    description: "Join ZettaB's team of engineers, designers, and strategists building world-class software.",
};

const perks = [
    { icon: "🌍", title: "Remote-first culture", desc: "Work from anywhere in the world. We judge by output, not office hours." },
    { icon: "📈", title: "Career growth", desc: "Structured learning budgets, regular mentoring, and clear promotion paths." },
    { icon: "💰", title: "Competitive compensation", desc: "Top-of-market salaries, performance bonuses, and equity options available." },
    { icon: "🏖️", title: "Flexible time off", desc: "Unlimited PTO policy built on trust and mutual respect." },
    { icon: "🛠️", title: "Great tooling", desc: "We invest in the best tools and infrastructure so you can focus on great work." },
    { icon: "🤝", title: "Collaborative team", desc: "Small, high-trust teams where every voice matters and ideas are taken seriously." },
];

const openRoles = [
    { title: "Senior Full-Stack Engineer", team: "Engineering", type: "Full-time · Remote", href: "#" },
    { title: "Product Designer (UI/UX)", team: "Design", type: "Full-time · Remote", href: "#" },
    { title: "DevOps / Cloud Engineer", team: "Infrastructure", type: "Full-time · Remote", href: "#" },
    { title: "Digital Marketing Strategist", team: "Marketing", type: "Full-time · Remote", href: "#" },
];

export default function CareersPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/bg_careers_hero_new.svg" alt="Careers Background" className="service-hero-image w-full h-full object-cover object-center opacity-100" />
                    <div className="absolute inset-0 bg-slate-950/35"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Join the Innovation</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We&apos;re a growing team of passionate builders. If you care deeply about craft and want to work on ambitious problems, we want to hear from you.
                    </p>
                </div>
            </section>

            {/* Perks */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Life at ZettaB</p>
                        <h2 className="text-4xl font-bold text-gray-900">Why work with us</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {perks.map((perk) => (
                            <div key={perk.title} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <span className="text-4xl mb-4 block">{perk.icon}</span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Open Positions</p>
                        <h2 className="text-4xl font-bold text-gray-900">Current openings</h2>
                    </div>
                    
                    <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center shadow-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-6 border border-slate-100">
                            <span className="material-symbols-outlined text-3xl text-primary">work_off</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No open positions right now</h3>
                        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 text-lg">
                            We currently don’t have any open positions, but we’re always on the lookout for talented individuals! If you’d like to be considered for future opportunities, please send your resume to <a href="mailto:careers@zettab.io" className="text-primary hover:underline font-medium">careers@zettab.io</a>. We’d love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Global Contact CTA Box */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-white rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a web project?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our technical team to determine the best approach for an upcoming build.</p>
                        <Link href="/contact" className="cta-banner-button inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}


