"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    tag: string;
}

interface BlogListProps {
    initialPosts: BlogPost[];
    tags: string[];
}

export function BlogList({ initialPosts, tags }: BlogListProps) {
    const [selectedTag, setSelectedTag] = useState("All");

    const filteredPosts = selectedTag === "All"
        ? initialPosts
        : initialPosts.filter(post => post.tag === selectedTag);

    return (
        <>
            {/* Tag filters */}
            <div className="bg-white border-b border-gray-100 sticky top-[72px] z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3 overflow-x-auto">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tag === selectedTag
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
                        {filteredPosts.map((article) => (
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
                        {filteredPosts.length === 0 && (
                            <div className="col-span-full text-center py-12 text-slate-500">
                                No articles found for this category.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

