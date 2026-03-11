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
    <main>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold w-fit">
                <span className="material-symbols-outlined text-sm">verified</span>
                Next-Gen Tech Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Scalable Digital Products <span className="text-primary">Built for Growth</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                We empower businesses with premium innovation and cutting-edge software solutions tailored for global scale and high-performance engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30 text-center">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors text-center">
                  View Solutions
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  alt="ZettaB Tech Team"
                  className="w-full h-[520px] object-cover object-center"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">150+ Projects Delivered</div>
                  <div className="text-xs text-slate-500">Across 30+ Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-12 bg-white border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-1">150+</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-1">85+</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-1">10+</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-1">24/7</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="h-48 sm:h-64 rounded-2xl bg-slate-200 overflow-hidden">
                  <img alt="Team" className="w-full h-full object-cover" src="/team-meeting.png" />
                </div>
                <div className="h-48 rounded-2xl bg-primary/10 flex items-center justify-center p-8">
                  <span className="material-symbols-outlined text-6xl text-primary">diversity_3</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 sm:h-64 rounded-2xl bg-slate-900 flex items-center justify-center p-8">
                  <span className="material-symbols-outlined text-6xl text-white">psychology</span>
                </div>
                <div className="h-40 sm:h-48 rounded-2xl bg-slate-200 overflow-hidden">
                  <img alt="Office Work" className="w-full h-full object-cover" src="/office-work.png" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Premium Innovation Partner</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Your Strategic Engineering Ally in the Digital Age
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                ZettaB.io is a global digital solutions provider dedicated to transforming complex business challenges into seamless digital experiences through strategic engineering. We don't just build software; we build the future of your enterprise.
              </p>
              <Link href="/about" className="group flex items-center gap-3 text-primary font-bold text-lg">
                Learn more about our mission
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Comprehensive Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              End-to-end technology services designed to propel your business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all group shadow-sm hover:shadow-xl">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">developer_mode</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Custom Software</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Bespoke software solutions tailored to your unique business logic and operational needs.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all group shadow-sm hover:shadow-xl">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">cloud_queue</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Cloud Deployments</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Scalable cloud infrastructure design and automated deployment pipelines for maximum uptime.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all group shadow-sm hover:shadow-xl">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">language</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Web Development</h4>
              <p className="text-slate-600 text-sm leading-relaxed">High-performance, responsive web applications built with modern frameworks like React and Vue.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all group shadow-sm hover:shadow-xl">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">phone_iphone</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Mobile Applications</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Native and cross-platform mobile apps that provide exceptional user experiences on the go.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all group shadow-sm hover:shadow-xl">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">ads_click</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Digital Marketing</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Data-driven growth strategies, SEO, and targeted campaigns to boost your online presence.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all group shadow-sm hover:shadow-xl">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">palette</span>
              </div>
              <h4 className="text-xl font-bold mb-3">UI/UX Design</h4>
              <p className="text-slate-600 text-sm leading-relaxed">User-centric design systems that balance aesthetic beauty with functional simplicity.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary transition-all group shadow-sm hover:shadow-xl">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">settings_suggest</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Software Maintenance</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Continuous monitoring, security updates, and performance tuning for your digital assets.</p>
            </div>

            <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
              <p className="font-bold mb-4">Need something custom?</p>
              <Link href="/contact" className="text-primary font-bold flex items-center gap-2">Contact Sales <span className="material-symbols-outlined text-sm">open_in_new</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">Why leading brands trust us</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 size-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">handshake</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Strategic Partnership</h4>
                    <p className="text-slate-600">We don't just take orders; we act as your technology consultant to ensure long-term ROI.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 size-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Agile Methodology</h4>
                    <p className="text-slate-600">Rapid iterations and transparent communication ensure we deliver value every single week.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 size-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expert Talent</h4>
                    <p className="text-slate-600">Our team consists of senior engineers and designers with experience in global tech giants.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 size-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Long-term Support</h4>
                    <p className="text-slate-600">We stay with you long after the launch to ensure your product evolves with your business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[500px]">
              <img alt="Collaboration" className="absolute inset-0 w-full h-full object-cover" src="/tech-bg.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white text-lg font-medium italic">"ZettaB changed how we look at software. They aren't just developers, they are innovators."</p>
                <p className="text-primary font-bold mt-4">— Sarah Chen, CEO of InnovateCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Proven Process</h2>
            <p className="text-slate-400">A systematic approach to building high-impact digital products.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {[
                { icon: "search", label: "Discovery", desc: "Understanding requirements and market needs." },
                { icon: "architecture", label: "Planning", desc: "Defining architecture and development roadmap." },
                { icon: "draw", label: "Design", desc: "Crafting intuitive and engaging user interfaces." },
                { icon: "code", label: "Development", desc: "Writing clean, robust, and scalable code." },
                { icon: "rocket", label: "Deployment", desc: "Launch to production with CI/CD pipelines." },
                { icon: "headset_mic", label: "Support", desc: "Ongoing maintenance and future updates." },
              ].map((step) => (
                <div key={step.label} className="flex flex-col items-center text-center group">
                  <div className="size-16 bg-slate-800 rounded-full border-4 border-primary flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-white">{step.icon}</span>
                  </div>
                  <h5 className="text-lg font-bold mb-2">{step.label}</h5>
                  <p className="text-slate-400 text-xs px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Verticals We Empower</h2>
            <p className="text-slate-600">Deep domain expertise across various industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <div className="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-4xl">shopping_cart</span>
              </div>
              <span className="font-bold">Retail</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <div className="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-4xl">medical_services</span>
              </div>
              <span className="font-bold">Healthcare</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <div className="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-4xl">local_shipping</span>
              </div>
              <span className="font-bold">Logistics</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <div className="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-4xl">school</span>
              </div>
              <span className="font-bold">Education</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <div className="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-4xl">cloud</span>
              </div>
              <span className="font-bold">SaaS</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <div className="size-20 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-4xl">business</span>
              </div>
              <span className="font-bold">Enterprise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Featured Success</h2>
              <p className="text-slate-600">Real-world results delivered to our clients.</p>
            </div>
            <Link href="/case-study-ecommerce-redesign" className="hidden md:flex items-center gap-2 text-primary font-bold">
              View All Projects <span className="material-symbols-outlined">east</span>
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group">
              <div className="h-64 overflow-hidden relative">
                <img alt="FinTech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1531538512162-28266299d638?auto=format&fit=crop&q=80&w=1200" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">FinTech</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black mb-4">NextGen Banking App</h4>
                <p className="text-slate-600 mb-6 text-sm">Reduced transaction times by 40% with a mobile-first banking platform serving 2M users.</p>
                <Link href="/case-study-ecommerce-redesign" className="text-primary font-bold flex items-center gap-2">View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span></Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group">
              <div className="h-64 overflow-hidden relative">
                <img alt="Retail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1556742049-0c37d80f6fa9?auto=format&fit=crop&q=80&w=1200" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">E-Commerce</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black mb-4">Omni-Channel Retail</h4>
                <p className="text-slate-600 mb-6 text-sm">Unified inventory management across 50+ locations integrated with a seamless web experience.</p>
                <Link href="/case-study-ecommerce-redesign" className="text-primary font-bold flex items-center gap-2">View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span></Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group">
              <div className="h-64 overflow-hidden relative">
                <img alt="Cloud" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">Cloud Architecture</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black mb-4">Global Cloud Migration</h4>
                <p className="text-slate-600 mb-6 text-sm">Migrated legacy infrastructure to a secure multi-cloud environment saving $500k/year.</p>
                <Link href="/case-study-ecommerce-redesign" className="text-primary font-bold flex items-center gap-2">View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Client Stories</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Real feedback from the businesses we&apos;ve helped scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed text-lg italic flex-1">
                &ldquo;ZettaB transformed our entire digital presence in just 3 months. Our web app now handles 10x the traffic with zero downtime. Absolutely world-class engineering team.&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shrink-0">A</div>
                <div>
                  <div className="font-bold text-slate-900">Ahmed Al-Rashidi</div>
                  <div className="text-sm text-slate-500">CTO, NovaTech Solutions — UAE</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed text-lg italic flex-1">
                &ldquo;From UI/UX design to mobile app launch — ZettaB delivered on every promise and exceeded expectations. Our user retention jumped 68% within the first quarter.&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-black text-lg shrink-0">S</div>
                <div>
                  <div className="font-bold text-white">Sarah Mitchell</div>
                  <div className="text-sm text-slate-400">CEO, Bloom Retail — Australia</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed text-lg italic flex-1">
                &ldquo;Their cloud migration strategy saved us 40% in infrastructure costs and cut our deployment time from days to minutes. The team was professional, responsive, and incredibly knowledgeable.&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-black text-lg shrink-0">R</div>
                <div>
                  <div className="font-bold text-slate-900">Rajesh Patel</div>
                  <div className="text-sm text-slate-500">Head of Engineering, Finova — Singapore</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logo Cloud / Partners */}
      <section className="py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 font-semibold uppercase tracking-widest text-xs mb-10">Strategic Technology Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-32 transition-all">
            {/* AWS */}
            <svg role="img" viewBox="0 0 24 24" className="w-10 sm:w-12 md:w-16 lg:w-20 h-auto" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
              <title>Amazon AWS</title>
              <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
            </svg>
            {/* Google Cloud */}
            <svg role="img" viewBox="0 0 24 24" className="w-10 sm:w-12 md:w-16 lg:w-20 h-auto" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
              <title>Google Cloud</title>
              <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
            </svg>
            {/* Azure */}
            <svg role="img" viewBox="0 0 24 24" className="w-10 sm:w-12 md:w-16 lg:w-20 h-auto" fill="#0089D6" xmlns="http://www.w3.org/2000/svg">
              <title>Microsoft Azure</title>
              <path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684" />
            </svg>
            {/* Salesforce */}
            <svg role="img" viewBox="0 0 24 24" className="w-8 sm:w-10 md:w-14 lg:w-16 h-auto" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
              <title>Salesforce</title>
              <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8" />
            </svg>
            {/* Kubernetes */}
            <svg role="img" viewBox="0 0 24 24" className="w-8 sm:w-10 md:w-14 lg:w-16 h-auto" fill="#326CE5" xmlns="http://www.w3.org/2000/svg">
              <title>Kubernetes</title>
              <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary p-12 lg:p-20 rounded-[3rem] text-white shadow-2xl shadow-primary/40 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 size-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 size-64 bg-black/10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10">Ready to build the next big thing?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Join 85+ industry leaders who have scaled their digital footprint with ZettaB.io's expert engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link href="/contact" className="px-10 py-5 bg-white text-primary rounded-2xl font-black text-xl hover:scale-105 transition-transform">
                Book a Strategy Call
              </Link>
              <Link href="/about" className="px-10 py-5 bg-primary border-2 border-white text-white rounded-2xl font-black text-xl hover:bg-white hover:text-primary transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
