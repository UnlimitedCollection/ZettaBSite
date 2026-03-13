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
        <footer className="bg-slate-900 text-slate-400 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-4">
                    <div className="md:col-span-4 lg:col-span-4">
                        <Link href="/" className="motion-surface mb-6 flex items-center justify-center bg-white rounded-xl shadow-sm overflow-hidden w-fit px-3 h-11">
                            <div className="flex items-center justify-center h-24 w-32">
                                <Image src="/logo.webp" alt="ZettaB Logo" width={140} height={140} className="object-contain" priority />
                            </div>
                        </Link>
                        <p className="mb-6 leading-relaxed text-sm">
                            Leading global innovation through high-end software development, cloud strategy, and digital transformation. Delivering Excellence from Kandy to the World.
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium">
                            <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                            <span className="text-slate-700">|</span>
                            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        </div>

                    </div>

                    <div className="md:col-span-2 lg:col-span-2">
                        <h5 className="text-white font-bold mb-4">Services</h5>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/mobile-applications" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/cloud-deployments" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                            <li><Link href="/ui-ux-designs" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 lg:col-span-2">
                        <h5 className="text-white font-bold mb-4">Company</h5>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/case-study-ecommerce-redesign" className="hover:text-primary transition-colors">Our Portfolio</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Latest News</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-4">
                        <h5 className="text-white font-bold mb-3">Subscribe to our newsletter</h5>
                        <p className="mb-4 text-sm">Stay updated with the latest in tech and innovation.</p>
                        {isSubscribed ? (
                            <div className="bg-green-500/20 text-green-400 p-4 rounded-xl flex items-center gap-2 border border-green-500/30">
                                <span className="material-symbols-outlined text-xl">check_circle</span>
                                <span className="text-sm font-medium">Thanks for subscribing!</span>
                            </div>
                        ) : (
                            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    required
                                    placeholder="Your email"
                                    className="bg-slate-800 border-none rounded-xl px-4 py-3 w-full sm:flex-1 text-white focus:ring-2 focus:ring-primary outline-none"
                                />
                                <button type="submit" className="motion-button bg-primary text-white p-3 rounded-xl hover:opacity-90 transition-opacity self-stretch sm:self-auto">
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col xl:flex-row justify-between items-center gap-6 text-sm relative">
                    {/* Location & Email Group */}
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                            <span className="whitespace-nowrap">Kandy, Sri Lanka</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">mail</span>
                            <a href="mailto:hello@zettab.io" className="hover:text-primary transition-colors whitespace-nowrap">hello@zettab.io</a>
                        </div>
                    </div>

                    {/* Copyright — centred */}
                    <p className="text-center xl:absolute xl:left-1/2 xl:-translate-x-1/2 whitespace-normal sm:whitespace-nowrap">
                        © {currentYear} ZettaB.io. All rights reserved.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-2">
                        {/* LinkedIn */}
                        <Link href="https://linkedin.com/company/zettab" target="_blank" rel="noopener noreferrer" className="social-link size-9 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-[#0A66C2] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </Link>
                        {/* Facebook */}
                        <Link href="https://facebook.com/zettabio" target="_blank" rel="noopener noreferrer" className="social-link size-9 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </Link>
                        {/* YouTube */}
                        <Link href="https://youtube.com/@zettabio" target="_blank" rel="noopener noreferrer" className="social-link size-9 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-[#FF0000] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </Link>
                        {/* Instagram */}
                        <Link href="https://instagram.com/zettabio" target="_blank" rel="noopener noreferrer" className="social-link size-9 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-[#E4405F] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>
                        {/* X (Twitter) */}
                        <Link href="https://x.com/zettabio" target="_blank" rel="noopener noreferrer" className="social-link size-9 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-black transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
