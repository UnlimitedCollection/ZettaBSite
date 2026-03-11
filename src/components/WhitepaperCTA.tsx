import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WhitepaperCTAProps {
    title: string;
    description: string;
    pdfUrl: string;
    buttonText?: string;
}

export function WhitepaperCTA({
    title,
    description,
    pdfUrl,
    buttonText = "Download Free Whitepaper"
}: WhitepaperCTAProps) {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/40 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">

                    {/* Icon / Graphic Side */}
                    <div className="hidden md:flex flex-shrink-0 w-48 h-64 bg-slate-800 rounded-xl relative shadow-inner overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                            <span className="material-symbols-outlined text-7xl text-white/50">picture_as_pdf</span>
                        </div>
                        {/* Fake document lines */}
                        <div className="absolute bottom-8 left-8 right-8 space-y-3 opacity-60">
                            <div className="h-2 bg-primary/40 rounded w-3/4"></div>
                            <div className="h-2 bg-slate-500/40 rounded w-full"></div>
                            <div className="h-2 bg-slate-500/40 rounded w-5/6"></div>
                            <div className="h-2 bg-slate-500/40 rounded w-2/3"></div>
                        </div>
                        {/* Top banner tag */}
                        <div className="absolute top-0 left-0 right-0 bg-primary/80 text-white text-[10px] font-bold tracking-widest uppercase py-2 text-center rounded-t-xl backdrop-blur-md">
                            Official Resource
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-blue-300 text-sm font-bold uppercase tracking-wider rounded-full mb-4 border border-primary/30">
                            <span className="material-symbols-outlined text-sm">download</span>
                            Exclusive Insight
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                            {title}
                        </h2>

                        <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                            {description}
                        </p>

                        <Link
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl shadow-primary/30 group"
                        >
                            {buttonText}
                            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">cloud_download</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
