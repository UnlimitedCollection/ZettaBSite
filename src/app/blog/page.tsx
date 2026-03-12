import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
    title: "Blog | ZettaB — Digital Insights & Trends",
    description: "Thought leadership on software development, digital marketing, UX, and technology trends from the ZettaB team.",
};

import { blogPosts } from "@/data/blog";
import { BlogList } from "@/components/BlogList";

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

            <BlogList initialPosts={blogPosts} tags={tags} />

            {/* Newsletter CTA — white box style */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Get insights delivered to your inbox</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Practical articles on tech, design, and growth. No filler. Published twice a month.</p>
                        <NewsletterForm />
                    </div>
                </div>
            </section>
        </>
    );
}
