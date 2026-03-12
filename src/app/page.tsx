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
      {/* New Video Top Session */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden flex items-end min-h-[90vh] lg:min-h-screen bg-slate-900">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-6xl">
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.05] tracking-tight text-white drop-shadow-xl mb-4 sm:mb-8 lg:mb-12">
              Best-in-class design,<br className="hidden sm:block"/> marketing and technology
            </h1>
          </div>
        </div>
      </section>

      {/* Original Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
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
                ZettaB.io is a global digital solutions provider dedicated to transforming complex business challenges into seamless digital experiences through strategic engineering. We don&apos;t just build software; we build the future of your enterprise.
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
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
                    <p className="text-slate-600">We don&apos;t just take orders; we act as your technology consultant to ensure long-term ROI.</p>
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
                <p className="text-white text-lg font-medium italic">&quot;ZettaB changed how we look at software. They aren&apos;t just developers, they are innovators.&quot;</p>
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
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Verticals We Empower</h2>
            <p className="text-slate-600">Deep domain expertise across various industries.</p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-image-linear-edges group">
          <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
            {/* First Set */}
            {[
              { icon: "shopping_cart", label: "Retail" },
              { icon: "medical_services", label: "Healthcare" },
              { icon: "local_shipping", label: "Logistics" },
              { icon: "school", label: "Education" },
              { icon: "cloud", label: "SaaS" },
              { icon: "business", label: "Enterprise" },
              { icon: "account_balance", label: "Finance" },
              { icon: "real_estate_agent", label: "Real Estate" },
              { icon: "restaurant", label: "Hospitality" },
              { icon: "sports_esports", label: "Gaming" },
            ].map((industry, index) => (
              <div key={index} className="flex flex-col items-center gap-4 px-8 min-w-[200px] cursor-pointer">
                <div className="size-24 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-5xl">{industry.icon}</span>
                </div>
                <span className="font-bold text-slate-700">{industry.label}</span>
              </div>
            ))}
            
            {/* Second Set (Duplicate for smooth loop) */}
            {[
              { icon: "shopping_cart", label: "Retail" },
              { icon: "medical_services", label: "Healthcare" },
              { icon: "local_shipping", label: "Logistics" },
              { icon: "school", label: "Education" },
              { icon: "cloud", label: "SaaS" },
              { icon: "business", label: "Enterprise" },
              { icon: "account_balance", label: "Finance" },
              { icon: "real_estate_agent", label: "Real Estate" },
              { icon: "restaurant", label: "Hospitality" },
              { icon: "sports_esports", label: "Gaming" },
            ].map((industry, index) => (
              <div key={`dup-${index}`} className="flex flex-col items-center gap-4 px-8 min-w-[200px] cursor-pointer">
                <div className="size-24 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-5xl">{industry.icon}</span>
                </div>
                <span className="font-bold text-slate-700">{industry.label}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient Edges using Tailwind Arbitrary Values for Mask Image later or CSS */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
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
      <section className="py-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 font-semibold uppercase tracking-widest text-xs mb-6">Strategic Technology Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-32 transition-all">
            {/* AWS */}
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
              alt="Amazon Web Services" 
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain brightness-0 opacity-60 hover:opacity-100 transition-all duration-300" 
            />
            {/* Google Cloud */}
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" 
              alt="Google Cloud" 
              className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain brightness-0 opacity-60 hover:opacity-100 transition-all duration-300" 
            />
            {/* Azure */}
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" 
              alt="Microsoft Azure" 
              className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain brightness-0 opacity-60 hover:opacity-100 transition-all duration-300" 
            />
            {/* Salesforce */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
              alt="Salesforce" 
              className="h-5 sm:h-6 md:h-8 lg:h-9 w-auto object-contain brightness-0 opacity-60 hover:opacity-100 transition-all duration-300" 
            />
            {/* Kubernetes */}
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain-wordmark.svg" 
              alt="Kubernetes" 
              className="h-7 sm:h-9 md:h-11 lg:h-14 w-auto object-contain brightness-0 opacity-60 hover:opacity-100 transition-all duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-tr from-teal-600 via-cyan-600 to-blue-600 overflow-hidden relative p-12 lg:p-20 rounded-[3rem] text-white shadow-2xl shadow-cyan-500/30">
            {/* Subtle Gradient Overlays */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-black/10 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to scale your next big idea?</h2>
              <p className="text-cyan-50 text-lg sm:text-xl mb-12 max-w-2xl mx-auto drop-shadow-sm">
                Join 85+ industry leaders who have accelerated their digital transformation with ZettaB.io&apos;s expert engineering.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-cyan-700 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-black/10">
                  Book a Strategy Call
                </Link>
                <Link href="/about" className="px-8 py-4 sm:px-10 sm:py-5 bg-transparent border-2 border-white/50 text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-cyan-700 hover:border-white transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
