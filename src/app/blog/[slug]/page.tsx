import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static routes at build time
export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Dynamically generate metadata for each post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found | ZettaB',
        };
    }

    return {
        title: `${post.title} | ZettaB Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            {/* Header / Hero Section */}
            <article>
                <header className="relative pt-32 pb-24 text-center overflow-hidden bg-slate-900">
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Link href="/blog" className="text-white/60 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Back to Blog
                            </Link>
                            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {post.tag}
                            </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-slate-300 text-sm">
                            <div className="flex items-center gap-3">
                                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-slate-700" />
                                <div className="text-left">
                                    <p className="font-bold text-white">{post.author.name}</p>
                                    <p className="text-xs">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="h-8 border-l border-white/20"></div>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-200/50 prose prose-slate lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200 mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Need help implementing this?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Our engineering team can help you audit your current architecture or prototype your next big idea.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

