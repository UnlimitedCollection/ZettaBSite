import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | ZettaB",
    description: "ZettaB's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 font-medium">
                        Effective Date: 1 January 2025 &middot; Last updated: 1 March 2026
                    </p>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {[
                            {
                                heading: "1. Who We Are",
                                content: "ZettaB Inc. (\"ZettaB\", \"we\", \"us\", or \"our\") is a software development agency. This Privacy Policy applies to information collected through our website, zettab.io, and any related services we provide.",
                            },
                            {
                                heading: "2. Information We Collect",
                                content: "We may collect the following types of information: Contact details you provide via forms (name, email, company, phone number). Usage data collected automatically via analytics tools such as IP address, browser type, pages visited, and session duration. Cookies and similar tracking technologies. We do not collect sensitive personal information.",
                            },
                            {
                                heading: "3. How We Use Your Information",
                                content: "We use collected information to respond to your enquiries and project requests, to improve the functionality and content of our website, to send you relevant updates if you have opted in, and to analyse site usage and performance. We will never sell your data to third parties.",
                            },
                            {
                                heading: "4. Cookies",
                                content: "We use essential cookies required for the site to function and analytical cookies (such as Google Analytics) to understand how visitors interact with the site. You may disable cookies in your browser settings; however, some features may not function as expected.",
                            },
                            {
                                heading: "5. Data Retention",
                                content: "We retain contact form submissions for up to 2 years for the purpose of managing business relationships. Analytics data is retained in accordance with the policies of each analytics provider.",
                            },
                            {
                                heading: "6. Third-Party Services",
                                content: "We use trusted third-party services including Google Analytics, hosting providers, and communication tools. Each service processes data in accordance with their own privacy policies. We select partners who meet appropriate data protection standards.",
                            },
                            {
                                heading: "7. Your Rights",
                                content: "Depending on your location, you may have the right to access, correct, or delete your personal data. You can also withdraw consent to marketing communications at any time. To exercise these rights, please contact us at privacy@zettab.io.",
                            },
                            {
                                heading: "8. Data Security",
                                content: "We implement appropriate technical and organisational measures to protect your information including encrypted transmission (HTTPS), limited access controls, and regular security reviews.",
                            },
                            {
                                heading: "9. Children's Privacy",
                                content: "This website is not directed at children under 13. We do not knowingly collect personal information from minors.",
                            },
                            {
                                heading: "10. Changes to This Policy",
                                content: "We may update this Privacy Policy from time to time. Significant changes will be noted with an updated effective date. Continued use of our website after changes constitutes acceptance of the revised policy.",
                            },
                            {
                                heading: "11. Contact",
                                content: "For privacy-related questions, email us at privacy@zettab.io or use the contact form on our website.",
                            },
                        ].map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Box */}
                    <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Questions about this policy?</h3>
                            <p className="text-slate-600 text-sm">We're happy to clarify anything. Just get in touch.</p>
                        </div>
                        <Link href="/contact" className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:border-primary transition-colors text-center shadow-sm">
                            Contact Us
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-2 text-slate-500 font-medium">
                        <span className="material-symbols-outlined text-sm">link</span>
                        Related: <Link href="/terms-conditions" className="text-primary hover:underline transition-all">Terms & Conditions</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
