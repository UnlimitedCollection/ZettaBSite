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
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Careers</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Join the Innovation</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We're a growing team of passionate builders. If you care deeply about craft and want to work on ambitious problems, we want to hear from you.
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

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to do the best work of your career?</h2>
                    <p className="text-blue-200 text-lg mb-10">Join a team that takes craft seriously and builds things that matter.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
