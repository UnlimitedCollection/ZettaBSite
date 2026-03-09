import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact ZettaB | Start Your Project",
    description: "Ready to build something great? Contact ZettaB and we'll get back to you within 1 business day.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Start Your Journey</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Tell us about your project. We respond to every enquiry within 1 business day.
                    </p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                            <p className="text-gray-500 mb-8 text-sm">Fill in the form and we'll be in touch shortly.</p>
                            <form className="flex flex-col gap-6" action="#" method="POST">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            placeholder="Jane"
                                            className="h-11 px-4 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            required
                                            placeholder="Smith"
                                            className="h-11 px-4 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="jane@company.com"
                                        className="h-11 px-4 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Company <span className="text-gray-400">(optional)</span></label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Acme Inc."
                                        className="h-11 px-4 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Service of Interest</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="h-11 px-4 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                                    >
                                        <option value="">Select a service...</option>
                                        <option>Web Development</option>
                                        <option>Mobile Applications</option>
                                        <option>Cloud Deployments</option>
                                        <option>Digital Marketing</option>
                                        <option>UI/UX Design</option>
                                        <option>Software Development</option>
                                        <option>Multiple / Not sure</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project, goals, timeline, and budget..."
                                        className="px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-11 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm hover:shadow"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Other ways to reach us</h2>
                                <p className="text-gray-500 leading-relaxed">
                                    Whether you have a specific project in mind or just want to explore what's possible, we're happy to talk.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                {[
                                    {
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
                                        label: "Email",
                                        value: "hello@zettab.io",
                                        href: "mailto:hello@zettab.io",
                                    },
                                    {
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                                        label: "Phone",
                                        value: "+1 (555) 000-0000",
                                        href: "tel:+15550000000",
                                    },
                                    {
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
                                        label: "Location",
                                        value: "Global — working with clients worldwide",
                                        href: "#",
                                    },
                                ].map((item) => (
                                    <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                                            <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="p-6 rounded-2xl bg-bg-light border border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Response time commitment</h3>
                                <p className="text-sm text-gray-500">Every message is reviewed by a senior team member. We respond within 1 business day and aim for same-day on enquiries sent before 3pm.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-bg-light border border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Have a quick question?</h3>
                                <p className="text-sm text-gray-500 mb-4">Check our FAQ — it covers common questions on process, pricing, timelines, and working with us.</p>
                                <Link href="/faq" className="text-sm font-medium text-primary hover:underline">
                                    Visit FAQ →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
