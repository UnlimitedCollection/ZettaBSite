import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Mobile Applications | ZettaB",
    description: "Native iOS and Android apps and React Native cross-platform solutions — excellent UX on every screen.",
};

const offerings = [
    { title: "iOS App Development", desc: "Native Swift applications optimised for Apple's ecosystem and App Store guidelines." },
    { title: "Android App Development", desc: "Kotlin-based Android apps designed for rich engagement across all device sizes." },
    { title: "React Native Apps", desc: "Cross-platform apps from a single codebase without compromising on performance." },
    { title: "App UX Design", desc: "User-centred mobile experiences designed to drive retention and conversion." },
    { title: "App Store Submission", desc: "Full support through the App Store and Google Play launch process." },
    { title: "Maintenance & Updates", desc: "Ongoing support, performance monitoring, and iterative feature development." },
];

export default function MobileApplicationsPage() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Mobile Applications</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Reach Every Screen</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.</p>
                    <div className="mt-10">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors">Discuss Your App</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Capabilities</p>
                        <h2 className="text-4xl font-bold text-gray-900">Mobile Development Services</h2>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Approach</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Performance & UX, in perfect balance</h2>
                            <p className="text-gray-500 text-lg mb-6 leading-relaxed">Mobile users have zero tolerance for slow or broken experiences. Every app we ship is tested across real devices, optimised for battery and data, and designed to feel native and intuitive.</p>
                            <ul className="flex flex-col gap-4">
                                {["Performance testing on real devices", "Accessibility-first UI implementation", "CI/CD pipelines for fast releases", "Analytics and crash reporting built-in"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[{ v: "iOS", d: "Swift-native" }, { v: "Android", d: "Kotlin-native" }, { v: "React Native", d: "Cross-platform" }, { v: "Flutter", d: "Available on request" }].map(p => (
                                <div key={p.v} className="p-6 bg-white rounded-2xl border border-gray-100 text-center shadow-sm">
                                    <div className="text-2xl font-bold text-gray-900 mb-1">{p.v}</div>
                                    <div className="text-xs text-gray-400">{p.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Let's build your app together</h2>
                    <p className="text-blue-200 text-lg mb-10">Tell us your idea — we'll help you validate, scope, and ship it.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">Start a Conversation</Link>
                </div>
            </section>
        </>
    );
}
