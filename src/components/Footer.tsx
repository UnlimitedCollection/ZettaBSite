"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <footer className="bg-slate-900 text-slate-400 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 mb-20">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white relative overflow-hidden">
                                <Image src="/logo.webp" alt="ZettaB Logo" fill className="object-cover" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">ZettaB<span className="text-primary">.io</span></span>
                        </div>
                        <p className="mb-8 leading-relaxed">
                            Leading global innovation through high-end software development, cloud strategy, and digital transformation. Delivering Excellence from Kandy to the World.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://linkedin.com/company/zettab" target="_blank" rel="noopener noreferrer" className="size-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined">public</span>
                            </Link>
                            <Link href="mailto:hello@zettab.io" className="size-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </Link>
                            <Link href="https://twitter.com/zettabio" target="_blank" rel="noopener noreferrer" className="size-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined">share</span>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h5 className="text-white font-bold mb-8">Services</h5>
                        <ul className="space-y-4">
                            <li><Link href="/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/mobile-applications" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/cloud-deployments" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                            <li><Link href="/ui-ux-designs" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h5 className="text-white font-bold mb-8">Company</h5>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/case-study-ecommerce-redesign" className="hover:text-primary transition-colors">Our Portfolio</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Latest News</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h5 className="text-white font-bold mb-8">Subscribe to our newsletter</h5>
                        <p className="mb-6 text-sm">Stay updated with the latest in tech and innovation.</p>
                        {isSubscribed ? (
                            <div className="bg-green-500/20 text-green-400 p-4 rounded-xl flex items-center gap-2 border border-green-500/30">
                                <span className="material-symbols-outlined text-xl">check_circle</span>
                                <span className="text-sm font-medium">Thanks for subscribing!</span>
                            </div>
                        ) : (
                            <form className="flex gap-2" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    required
                                    placeholder="Your email"
                                    className="bg-slate-800 border-none rounded-xl px-4 py-3 flex-1 text-white focus:ring-2 focus:ring-primary outline-none"
                                />
                                <button type="submit" className="bg-primary text-white p-3 rounded-xl hover:opacity-90 transition-opacity">
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                            <span>Kandy, Sri Lanka</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">mail</span>
                            <a href="mailto:hello@zettab.io" className="hover:text-primary transition-colors">hello@zettab.io</a>
                        </div>
                    </div>
                    <p className="text-sm">© {currentYear} ZettaB.io. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
