import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
    title: "Blog | ZettaB — Digital Insights & Trends",
    description: "Thought leadership on software development, digital marketing, UX, and technology trends from the ZettaB team.",
};

import { blogPosts } from "@/data/blog";

const tags = ["All", "Web Development", "UI/UX Design", "Cloud & DevOps", "Digital Marketing", "Software Development", "Mobile Apps"];

export default function BlogPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/bg_blog_hero.png" alt="Blog Background" className="w-full h-full object-cover object-center opacity-80" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Digital Insights & Trends</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Practical thinking on software, design, marketing, and technology from our team of practitioners.
                    </p>
                </div>
            </section>

            {/* Tag filters */}
            <div className="bg-white border-b border-gray-100 sticky top-[72px] z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3 overflow-x-auto">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tag === "All"
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Articles */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((article) => (
                            <article
                                key={article.title}
                                className="group flex flex-col rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden bg-white"
                            >
                                <div className="h-2 bg-gradient-to-r from-primary to-indigo-500" />
                                <div className="p-7 flex flex-col flex-1 gap-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {article.tag}
                                        </span>
                                        <span className="text-xs text-gray-400">{article.readTime}</span>
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                                    <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                                        <span className="text-xs text-gray-400">{article.date}</span>
                                        <Link
                                            href={`/blog/${article.slug}`}
                                            className="flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                                        >
                                            Read
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Get insights delivered to your inbox</h2>
                    <p className="text-blue-200 mb-8">Practical articles on tech, design, and growth. No filler. Published twice a month.</p>
                    <NewsletterForm />
                </div>
            </section>
        </>
    );
}
