import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms & Conditions | ZettaB",
    description: "ZettaB's terms and conditions for use of our website and services.",
};

export default function TermsConditionsPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Terms & Conditions
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Effective Date: 1 January 2025 &middot; Last updated: 1 March 2026
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {[
                            {
                                heading: "1. Acceptance of Terms",
                                content: "By accessing or using the ZettaB website (zettab.io), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use this website.",
                            },
                            {
                                heading: "2. Use of the Website",
                                content: "You agree to use this website only for lawful purposes. You must not use the site in any way that breaches any applicable local, national, or international law or regulation, or in any way that is unlawful or fraudulent, or causes harm or damage to any person or entity.",
                            },
                            {
                                heading: "3. Intellectual Property",
                                content: "All content on this website — including text, graphics, logos, images, and software — is the property of ZettaB Inc. and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.",
                            },
                            {
                                heading: "4. Services and Proposals",
                                content: "Information presented on this website describes our general capabilities and does not constitute a binding offer. Formal engagements are governed by separate written agreements executed between ZettaB and the client.",
                            },
                            {
                                heading: "5. Disclaimer of Warranties",
                                content: "This website is provided on an 'as is' and 'as available' basis. ZettaB makes no representations or warranties of any kind, express or implied, regarding the operation or availability of the site or the accuracy of any information contained herein.",
                            },
                            {
                                heading: "6. Limitation of Liability",
                                content: "To the fullest extent permitted by law, ZettaB shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — this website or its content.",
                            },
                            {
                                heading: "7. Third-Party Links",
                                content: "This website may contain links to third-party websites. These links are provided for convenience only. ZettaB does not endorse, control, or take responsibility for the content of any linked website.",
                            },
                            {
                                heading: "8. Privacy",
                                content: "Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.",
                            },
                            {
                                heading: "9. Changes to These Terms",
                                content: "We reserve the right to modify these Terms at any time. Changes will be effective upon posting to this page with an updated date. Your continued use of the website constitutes acceptance of the revised terms.",
                            },
                            {
                                heading: "10. Governing Law",
                                content: "These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising from these Terms or use of the website shall be subject to the exclusive jurisdiction of the relevant courts.",
                            },
                            {
                                heading: "11. Contact",
                                content: "Questions about these Terms can be directed to legal@zettab.io.",
                            },
                        ].map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{section.heading}</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                        <span className="material-symbols-outlined text-sm">link</span>
                        Related: <Link href="/privacy-policy" className="text-primary hover:underline transition-all">Privacy Policy</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
