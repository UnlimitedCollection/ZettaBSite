import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface-dark text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3 group mb-4">
                            <Image src="/logo.webp" alt="ZettaB Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105" />
                            <span className="text-xl font-bold tracking-tight text-white mt-0.5">ZettaB</span>
                        </Link>
                        <p className="text-sm text-gray-400 capitalize-first mt-2 max-w-xs leading-relaxed">
                            Engineering business momentum through premium software solutions, design, and strategic growth.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/web-development" className="text-sm hover:text-primary transition-colors">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/mobile-applications" className="text-sm hover:text-primary transition-colors">
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="/cloud-deployments" className="text-sm hover:text-primary transition-colors">
                                    Cloud Deployments
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Updated</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Insights on technology and business scaling, delivered directly.
                        </p>
                        <form className="flex flex-col gap-2 relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-surface-card border border-gray-700 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-hover text-white text-sm font-medium py-2 rounded-md transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-xs text-gray-500 gap-4">
                    <p>© {currentYear} ZettaB Inc. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-conditions" className="hover:text-white transition-colors">
                            Terms & Conditions
                        </Link>
                        <Link href="/faq" className="hover:text-white transition-colors">
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
