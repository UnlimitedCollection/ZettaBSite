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
                    <div className="flex flex-col gap-4">
                        {openRoles.map((role) => (
                            <a
                                key={role.title}
                                href={role.href}
                                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 gap-4"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{role.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{role.team} · {role.type}</p>
                                </div>
                                <div className="flex items-center gap-2 text-primary text-sm font-medium flex-shrink-0">
                                    Apply Now
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* No role found block */}
                    <div className="mt-12 p-8 rounded-2xl border border-dashed border-gray-200 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Don't see a role for you?</h3>
                        <p className="text-gray-500 text-sm mb-4">We're always open to great talent. Send us your CV and a note about what you'd bring to the team.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md h-10 px-5 text-sm font-medium bg-primary text-white hover:bg-primary-hover transition-colors">
                            Send an open application
                        </Link>
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
