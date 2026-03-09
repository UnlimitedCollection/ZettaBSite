import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "UI/UX Design | ZettaB",
    description: "Human-centred UI/UX design that creates engaging, intuitive experiences driving real conversion and retention.",
};

const process = [
    { step: "01", title: "User Research", desc: "We talk to your users, map journeys and identify friction points before a pixel is drawn." },
    { step: "02", title: "Information Architecture", desc: "Content hierarchy, navigation structure, and user flows that make sense intuitively." },
    { step: "03", title: "Wireframing", desc: "Lo-fi prototypes that focus on layout and interaction logic without distraction." },
    { step: "04", title: "Visual Design", desc: "Polished, brand-cohesive UI built with precision typography, colour, and spacing." },
    { step: "05", title: "Prototype & Test", desc: "Interactive prototypes tested with real users before development begins." },
    { step: "06", title: "Design System", desc: "Scalable, componentised design systems in Figma for your team to build on long-term." },
];

export default function UIUXDesignsPage() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">UI/UX Design</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Engaging Experiences</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">Design that isn't just beautiful — it's strategic. Every choice is backed by research and tied to a business outcome.</p>
                    <div className="mt-10">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors">Start a Design Project</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
                        <h2 className="text-4xl font-bold text-gray-900">Design from research to reality</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.map((item) => (
                            <div key={item.step} className="p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <span className="text-5xl font-black text-gray-100 leading-none block mb-3">{item.step}</span>
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
                            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Design Matters</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Great design is a competitive advantage</h2>
                            <p className="text-gray-500 text-lg mb-6 leading-relaxed">Users judge your product in milliseconds. A polished, intuitive interface builds trust instantly. Poor UX loses customers before they ever see your value proposition.</p>
                            <p className="text-gray-500 text-lg leading-relaxed">We design products that feel effortless to use — because that is one of the hardest things to get right, and one of the most commercially impactful.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[{ v: "88%", l: "Of users won't return after a bad experience" }, { v: "200%", l: "Better conversion on well-designed CTAs" }, { v: "$100", l: "Saved in dev for every $1 spent on UX" }].map(s => (
                                <div key={s.l} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="text-3xl font-bold text-primary flex-shrink-0">{s.v}</div>
                                    <div className="text-sm text-gray-600">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Let's design something your users will love</h2>
                    <p className="text-blue-200 text-lg mb-10">Share your vision and we'll show you what we can build together.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">Get a Design Quote</Link>
                </div>
            </section>
        </>
    );
}
