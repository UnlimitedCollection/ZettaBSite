"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Case Study", href: "/case-study-ecommerce-redesign" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Image src="/logo.webp" alt="ZettaB Logo" width={140} height={40} className="object-contain" priority />
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-900" href="/">Home</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-900" href="/about">About</Link>
                        <div className="relative group">
                            <Link className="flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors text-slate-900" href="/services">
                                Services <span className="material-symbols-outlined text-sm">expand_more</span>
                            </Link>
                        </div>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-900" href="/case-study-ecommerce-redesign">Portfolio</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-900" href="/blog">Blog</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-900" href="/contact">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden lg:flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                            Get Started
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
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4">
                    <Link href="/" className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/services" className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                    <Link href="/case-study-ecommerce-redesign" className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                    <Link href="/blog" className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <Link href="/contact" className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <Link
                        href="/contact"
                        className="flex items-center justify-center px-6 py-3 mt-2 bg-primary text-white rounded-xl font-bold text-sm shadow-md"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    );
}
