import type { Metadata } from "next";
import Link from "next/link";
import { WhitepaperCTA } from "@/components/WhitepaperCTA";

export const metadata: Metadata = {
    title: "Mobile Applications | ZettaB",
    description: "Native iOS and Android apps and React Native cross-platform solutions — excellent UX on every screen.",
};

const offerings = [
    { title: "iOS App Development", desc: "Native Swift applications optimised for Apple&apos;s ecosystem and App Store guidelines.", icon: "phone_iphone" },
    { title: "Android App Development", desc: "Kotlin-based Android apps designed for rich engagement across all device sizes.", icon: "android" },
    { title: "React Native Apps", desc: "Cross-platform apps from a single codebase without compromising on performance.", icon: "devices" },
    { title: "App UX Design", desc: "User-centred mobile experiences designed to drive retention and conversion.", icon: "touch_app" },
    { title: "App Store Submission", desc: "Full support through the App Store and Google Play launch process.", icon: "storefront" },
    { title: "Maintenance & Updates", desc: "Ongoing support, performance monitoring, and iterative feature development.", icon: "update" },
];

export default function MobileApplicationsPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 text-center overflow-hidden">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/service_bg_mobile.png" alt="Mobile Applications Background" className="w-full h-full object-cover object-center opacity-80" />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Mobile Applications
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        High-performance iOS and Android applications engineered for fluid user experiences, offline capabilities, and perfect hardware integration.
                    </p>

                </div>
            </section>

            {/* Service Details Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left Content (Text) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                The mobile standard is incredibly high. Users expect apps to load instantly, animate smoothly at 60fps, and function flawlessly regardless of network conditions. We build mobile applications that meet and exceed these expectations.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Whether we are building natively with Swift and Kotlin, or deploying cross-platform solutions using React Native, our approach focuses heavily on performance optimization, robust state management, and secure API architecture.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {offerings.map((item) => (
                                    <div key={item.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
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
                                        <h4 className="font-bold text-lg mb-1">Architecture & Tech Stack Choice</h4>
                                        <p className="text-slate-600">Evaluating your requirements to determine whether a native or cross-platform approach offers the best ROI and performance.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Iterative Sprints</h4>
                                        <p className="text-slate-600">Delivering testable builds frequently via TestFlight or App Distribution, keeping you involved at every stage.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Testing & App Store Launch</h4>
                                        <p className="text-slate-600">Rigorous device testing, performance profiling, and managing the entire submission and approval process.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content (Sidebar / Tech Stack / CTA) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img alt="Mobile App Development" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200" />
                        </div>

                        {/* Tech Stack Box */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">developer_mode</span>
                                Core Technologies
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Swift (iOS)</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Kotlin (Android)</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">React Native</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Firebase</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">GraphQL</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Fastlane</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Whitepaper Download Section */}
            <WhitepaperCTA
                title="The Mobile App Strategy Playbook"
                description="Download our comprehensive whitepaper on choosing between React Native, Kotlin, and Swift—and how to plan a mobile roadmap that aligns with business growth."
                pdfUrl="/whitepapers/Mobile-app-development.pdf"
            />

            {/* Global Contact CTA Box */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-slate-50 rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a web project?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our technical team to determine the best approach for an upcoming build.</p>
                        <Link href="/contact" className="cta-banner-button inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}


