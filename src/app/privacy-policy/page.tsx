import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | ZettaB",
    description: "ZettaB's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-400 text-sm">Effective Date: 1 January 2025 · Last updated: 1 March 2026</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
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
                            <div key={section.heading} className="mb-10">
                                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                                <p className="text-gray-500 leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-6 rounded-2xl bg-bg-light border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900">Questions about this policy?</h3>
                            <p className="text-xs text-gray-500 mt-1">We're happy to clarify anything. Just get in touch.</p>
                        </div>
                        <Link href="/contact" className="flex-shrink-0 inline-flex items-center justify-center rounded-md h-10 px-5 text-sm font-medium bg-primary text-white hover:bg-primary-hover transition-colors">Contact Us</Link>
                    </div>

                    <div className="mt-6 text-sm text-gray-400">
                        Related: <Link href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
