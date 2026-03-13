"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const servicePaths = new Set([
        "/services",
        "/web-development",
        "/mobile-applications",
        "/software-development",
        "/ui-ux-designs",
        "/digital-marketing",
        "/cloud-deployments",
    ]);

    const navLinkClass = (href: string) => {
        const isActive = pathname === href;
        return `nav-link text-sm font-semibold transition-colors duration-300 ${isActive ? "nav-link-active text-primary" : "text-slate-900 hover:text-primary"}`;
    };

    const servicesLinkClass = `nav-link flex items-center gap-1 text-sm font-semibold transition-colors duration-300 py-4 ${servicePaths.has(pathname) ? "nav-link-active text-primary" : "text-slate-900 hover:text-primary"}`;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${scrolled ? "bg-white/80 border-slate-200/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]" : "bg-white/95 border-slate-200 shadow-sm"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[4.5rem]" : "h-20"}`}>
                    <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
                        <Image src="/logo.webp" alt="ZettaB Logo" width={140} height={40} className="object-contain" priority />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className={navLinkClass("/")} href="/">Home</Link>
                        <Link className={navLinkClass("/about")} href="/about">About</Link>
                        <div className="relative group">
                            <Link className={servicesLinkClass} href="/services">
                                Services <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
                            </Link>

                            {/* Desktop Dropdown */}
                            <div className="absolute top-full -left-4 w-64 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                                <div className="p-2 flex flex-col gap-1">
                                    <Link href="/web-development" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[18px]">language</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors">Web Development</div>
                                        </div>
                                    </Link>
                                    <Link href="/mobile-applications" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[18px]">smartphone</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors">Mobile Applications</div>
                                        </div>
                                    </Link>
                                    <Link href="/software-development" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[18px]">code_blocks</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors">Software Development</div>
                                        </div>
                                    </Link>
                                    <Link href="/ui-ux-designs" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[18px]">design_services</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors">UI/UX Design</div>
                                        </div>
                                    </Link>
                                    <Link href="/digital-marketing" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[18px]">campaign</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors">Digital Marketing</div>
                                        </div>
                                    </Link>
                                    <Link href="/cloud-deployments" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[18px]">cloud</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors">Cloud & DevOps</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link className={navLinkClass("/case-study-ecommerce-redesign")} href="/case-study-ecommerce-redesign">Portfolio</Link>
                        <Link className={navLinkClass("/blog")} href="/blog">Blog</Link>
                        <Link className={navLinkClass("/contact")} href="/contact">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="motion-button group hidden lg:flex items-center justify-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 font-bold text-sm text-primary hover:border-primary/30 hover:text-[#0e45b5] transition-colors">
                            Get in Touch
                            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </Link>
                        <button
                            className="md:hidden text-slate-900"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="motion-surface md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-5rem)] overflow-y-auto bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4">
                    <Link href="/" className="text-base font-semibold text-slate-900 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="text-base font-semibold text-slate-900 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <div className="flex flex-col gap-2">
                        <Link href="/services" className="text-base font-semibold text-slate-900 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100 ml-2 mt-1">
                            <Link href="/web-development" className="text-sm text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Web Development</Link>
                            <Link href="/mobile-applications" className="text-sm text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Mobile Applications</Link>
                            <Link href="/software-development" className="text-sm text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Software Development</Link>
                            <Link href="/ui-ux-designs" className="text-sm text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>UI/UX Design</Link>
                            <Link href="/digital-marketing" className="text-sm text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</Link>
                            <Link href="/cloud-deployments" className="text-sm text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Cloud & DevOps</Link>
                        </div>
                    </div>
                    <Link href="/case-study-ecommerce-redesign" className="text-base font-semibold text-slate-900 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                    <Link href="/blog" className="text-base font-semibold text-slate-900 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <Link href="/contact" className="text-base font-semibold text-slate-900 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <Link
                        href="/contact"
                        className="motion-button group flex items-center gap-1.5 w-fit rounded-full border border-primary/15 bg-primary/5 px-4 py-2 font-bold text-base text-primary hover:text-[#0e45b5] transition-colors mt-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get in Touch
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            )}
        </header>
    );
}
