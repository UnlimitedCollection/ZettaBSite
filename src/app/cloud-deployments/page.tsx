import type { Metadata } from "next";
import Link from "next/link";
import { WhitepaperCTA } from "@/components/WhitepaperCTA";

export const metadata: Metadata = {
    title: "Cloud & DevOps | ZettaB",
    description: "Secure, scalable cloud infrastructure on AWS, GCP, and Azure — engineered for reliability, performance, and growth.",
};

const pillars = [
    { title: "Infrastructure as Code", desc: "Terraform, Pulumi, and CDK — your infrastructure is version-controlled, reproducible, and auditable.", icon: "architecture" },
    { title: "Container Orchestration", desc: "Docker and Kubernetes deployments built for zero-downtime releases and automatic scaling.", icon: "widgets" },
    { title: "CI/CD Pipelines", desc: "Automated test, build, and deploy pipelines so your team ships faster with confidence.", icon: "published_with_changes" },
    { title: "Security & Compliance", desc: "IAM policies, secret management, WAF rules, and compliance frameworks (SOC2, GDPR) baked in.", icon: "admin_panel_settings" },
    { title: "Monitoring & Alerting", desc: "Datadog, CloudWatch, and custom dashboards give you real-time visibility into your systems.", icon: "monitoring" },
    { title: "Cost Optimisation", desc: "Right-sizing, Spot instances, and Reserved capacity strategies that cut your cloud bill substantially.", icon: "savings" },
];

export default function CloudDeploymentsPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 text-center overflow-hidden min-h-[62vh] flex items-center">
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <img src="/service_bg_cloud_new.svg" alt="Cloud Deployments Background" className="service-hero-image w-full h-full object-cover object-center opacity-100" />
                    <div className="absolute inset-0 bg-slate-950/35"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Cloud & DevOps
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                        Scalable, secure, and resilient cloud infrastructure designed for high availability and rapid iteration.
                    </p>

                </div>
            </section>

            {/* Service Details Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left Content (Text) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Modern software requires modern infrastructure. We architect cloud environments that automate deployments, scale dynamically with traffic spikes, and provide deep observability into system health.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our DevOps philosophy treats infrastructure as code (IaC), eliminating manual configuration drift and ensuring that environments are reproducible, secure, and easily auditable.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {pillars.map((item) => (
                                    <div key={item.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Audit & Architecture Design</h4>
                                        <p className="text-slate-600">Reviewing existing systems, identifying bottlenecks, and designing an target architecture optimised for cost and performance.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Infrastructure as Code (IaC)</h4>
                                        <p className="text-slate-600">Writing Terraform or CloudFormation scripts to provision resources deterministically across all environments.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">CI/CD & Monitoring Setup</h4>
                                        <p className="text-slate-600">Implementing automated pipelines for zero-downtime deployments and configuring comprehensive observability stacks.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content (Sidebar / Tech Stack / CTA) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img alt="Cloud & DevOps Infrastructure" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" />
                        </div>

                        {/* Tech Stack Box */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">cloud_sync</span>
                                Technologies
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">AWS / GCP / Azure</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Kubernetes</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Docker</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Terraform</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">GitHub Actions</span>
                                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">Datadog / Prometheus</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Whitepaper Download Section */}
            <WhitepaperCTA
                title="The Enterprise Cloud Migration Framework"
                description="Download our comprehensive whitepaper on executing zero-downtime migrations, automating infrastructure as code, and securing multi-cloud architectures."
                pdfUrl="/whitepapers/Cloud-Migration.pdf"
            />

            {/* Global Contact CTA Box */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-slate-50 rounded-3xl border border-slate-200 text-center shadow-sm cta-banner-card">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a cloud or DevOps upgrade?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our cloud specialists to design secure infrastructure, CI/CD pipelines, and a low-risk migration path.</p>
                        <Link href="/contact" className="cta-banner-button inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg">
                            Start a Conversation <span className="material-symbols-outlined text-sm">forum</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}


