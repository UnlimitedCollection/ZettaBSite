import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cloud Deployments | ZettaB",
    description: "Secure, scalable cloud infrastructure on AWS, GCP, and Azure — engineered for reliability, performance, and growth.",
};

const pillars = [
    { title: "Infrastructure as Code", desc: "Terraform, Pulumi, and CDK — your infrastructure is version-controlled, reproducible, and auditable." },
    { title: "Container Orchestration", desc: "Docker and Kubernetes deployments built for zero-downtime releases and automatic scaling." },
    { title: "CI/CD Pipelines", desc: "Automated test, build, and deploy pipelines so your team ships faster with confidence." },
    { title: "Security & Compliance", desc: "IAM policies, secret management, WAF rules, and compliance frameworks (SOC2, GDPR) baked in." },
    { title: "Monitoring & Alerting", desc: "Datadog, CloudWatch, and custom dashboards give you real-time visibility into your systems." },
    { title: "Cost Optimisation", desc: "Right-sizing, Spot instances, and Reserved capacity strategies that cut your cloud bill substantially." },
];

export default function CloudDeploymentsPage() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0D12] to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Cloud Deployments</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">Secure. Scalable.<br />Always On.</h1>
                    <p className="text-xl text-gray-400 leading-relaxed">Enterprise-grade cloud infrastructure built for reliability, performance, and growth without the headache.</p>
                    <div className="mt-10">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors">Request Infrastructure Review</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Solution Pillars</p>
                        <h2 className="text-4xl font-bold text-gray-900">What we deliver</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((item) => (
                            <div key={item.title} className="p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-bg-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Supported Platforms</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-cloud expertise</h2>
                    <div className="flex flex-wrap gap-4 justify-center mt-8">
                        {["AWS", "Google Cloud", "Microsoft Azure", "Vercel", "Cloudflare", "Heroku", "DigitalOcean", "Kubernetes"].map((p) => (
                            <span key={p} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">{p}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready for infrastructure that scales with you?</h2>
                    <p className="text-blue-200 text-lg mb-10">We'll review your current setup and identify exactly where to optimise.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg">Book a Free Review</Link>
                </div>
            </section>
        </>
    );
}
