import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZettaB | Seamless Software Experiences",
  description: "We build premium software, web apps, mobile applications, and digital marketing strategies for businesses ready to scale.",
};

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
    ),
    title: "Web Development",
    desc: "Scalable, performant web applications built to convert and grow with your business.",
    href: "/web-development",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="12" x="8.5" y="2" rx="1" /><path d="M11 14h2M12 17v1M5 6H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" /></svg>
    ),
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps delivering excellent UX on every device.",
    href: "/mobile-applications",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
    ),
    title: "Cloud Deployments",
    desc: "Secure, scalable cloud infrastructure engineered for reliability and performance.",
    href: "/cloud-deployments",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
    ),
    title: "Digital Marketing",
    desc: "Data-driven growth strategies that drive qualified traffic and measurable ROI.",
    href: "/digital-marketing",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
    ),
    title: "UI/UX Design",
    desc: "Human-centred design systems that create engaging, intuitive user experiences.",
    href: "/ui-ux-designs",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
    title: "Software Development",
    desc: "Custom systems and product engineering built on solid architectural principles.",
    href: "/software-development",
  },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years of Expertise" },
  { value: "99%", label: "Client Satisfaction" },
];

const process = [
  { step: "01", title: "Discover", desc: "We immerse ourselves in your business goals, user needs, and market context to define the right problem." },
  { step: "02", title: "Design", desc: "We prototype, test, and craft experiences that are intuitive, beautiful, and directly tied to conversion." },
  { step: "03", title: "Build", desc: "Our engineers write clean, tested, maintainable code using modern stacks suited to your scale." },
  { step: "04", title: "Launch & Grow", desc: "We deploy, measure, iterate. Your success after launch is as important as the initial delivery." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#0B0D12] to-[#0e45b5]/20 pt-20">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Premium Software Engineering
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
            Seamless Software<br />
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We design, engineer, and scale digital products that drive real business momentum — from MVP to enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-primary/30 transition-all duration-200"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md text-base font-medium h-12 px-8 border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              View Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Capabilities</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to scale</h2>
            <p className="text-gray-500 text-lg">From concept to deployment, we cover the full spectrum of digital product development.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4 bg-white"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-auto">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md text-sm font-medium h-11 px-6 border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROP ─── */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why ZettaB</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for businesses that demand excellence</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We don't just write code — we architect solutions. Every project is approached as a business problem first, a technical challenge second. The result? Software that actually works for your users and your bottom line.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Deep expertise across the full technology stack",
                  "Agile delivery with full transparency at every stage",
                  "Post-launch support and continuous improvement",
                  "Design-led approach that prioritises user experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-primary/10 rounded-full text-primary flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-md text-sm font-semibold h-11 px-6 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  About ZettaB
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* Visual card panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Avg. Project Delivery", value: "6 weeks", color: "from-primary to-indigo-500" },
                { label: "Client Retention Rate", value: "94%", color: "from-indigo-500 to-purple-500" },
                { label: "Countries Served", value: "12+", color: "from-purple-500 to-pink-500" },
                { label: "Team Specialists", value: "30+", color: "from-pink-500 to-rose-500" },
              ].map((card) => (
                <div key={card.label} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2">
                  <div className={`w-full h-1 rounded-full bg-gradient-to-r ${card.color} mb-2`} />
                  <div className="text-3xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-sm text-gray-500">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How we get you there</h2>
            <p className="text-gray-500 text-lg">A proven engagement model that keeps you in control at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                <span className="text-6xl font-black text-gray-100 group-hover:text-primary/20 transition-colors leading-none">{step.step}</span>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0e45b5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to build something remarkable?</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Let's talk about your project. Whether you're starting from scratch or scaling an existing product, we're ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-base font-semibold h-12 px-8 bg-white text-primary hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-study-ecommerce-redesign"
              className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
