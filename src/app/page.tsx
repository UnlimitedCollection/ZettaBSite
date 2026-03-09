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
              <div className="relative bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-4 border border-primary/10 shadow-2xl">
                <img alt="Dashboard Mockup" className="rounded-2xl w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoTYBgDOsEaS3hP0VpNtPnyen86jazJsNrfIa4HVeSzlRjDKQMfpYlfG6PpxHfEkFzCnwNCDoNg12Q45JCZviEETXY7D0Tp7Z47J3MZ9IKafeI-5Kn2bQTzPjcPlQkIJx968RvMFqJuYIIUOZHfYX02d_LUOIn0DcyugjdjmjPGn3FyfrB1BSzeNlskTsRVzGzv8fUP-GLhpZwoknTYJaA1lGcfr8fGTcGv57tMpCNjY-DYRAQ45a2Nx7t3MSC2w8jo6rhl3GB2R4" />
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
                  <img alt="Team" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLtEZCwCpIRJCltEfeMJFm83AclUL2fOS25mPqz8SQjdIocsuzNFvVDkJRukLdqX_03_9kb9OOGgT1bnNZZvuy92GAdlQta1DvuO9mV0Uc3yosMaCHp_dIsDzJn7uOoCrMRvzgkg2dW_JKYl5WkHjorXj-o0NpYbWH7ahPMbgVah0skGbBvkuTEl9641yHHPafZsaakJfm8LXRWkgVxte-prbe9vnf_-9FQK7elh28k0s2Z6_X6ptzI0G-g2CCfDBjKKmVqs85L-o" />
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
              <img alt="Collaboration" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjVMf-wQhipRpJzm5inSveAvMO4obRo0eNKoScXoHPMo7KowmFHwnt0I_0XA5aWkKvr0UUF4ET615bjQ-A4esgFhwRnAc5NYZP6lCyx7CjjhLpjMeON_veCYnP6RYdQZoKILOyBu_seXIC5mb-z25OtXrtSO4UlVc9a4LtgUyTTyFb73rbeWqt11j52G-w1s6LTt2DQzbDuJpipPy4EY7idbQ8ruVcxd3q3Uo9V7kPWepNkJbCI7yTpYBr4D-O3LP1AfolDcfQdF8" />
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
                <img alt="FinTech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsxJTTiRTo6CAYNLSu0H6F464bNcvn2-B8w0gjIiFwBv-4e3WuwkJk3JrtPSKI8q7wx7UdBfSbnR9Zkl2sfCsTdH1-h54hqNSOFb9Ji8DICZYET5orq09KHsWnKo6syNh8OYdOox86AIlM-DT-bS54Gh52zx2eGLXvDEm4OZl7udJCYdh1u6-pc5p2YB0NQqTkHyw4mpBaFQPlaXKf0xHURN6O8s3qkhftyqN2XOgdwGwp1uKAVCeBr3yYswYtAwDfzWMkmmo6YJc" />
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
                <img alt="Retail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmsVzabyDT9L0yDxUZWzeCmtX3EspGebsRbZeX5UK7dmMbJB4A4KqO1oo3N84bOWS9lGRaGbJFxT90SRqL4XAmDb_tMAKObHk37L9iOvKfDMjZ-ShCdHoL1B_MyMOAChXMpv_gJEgypj1UBXmstj_Rt15I5NOaGt-IDcRisjJeyIjjayczi0xRXrVgyQJvOLGrl7X1fytx_R3pi9c6CWBBJpuTuTvM81fzbWLflAetVyMnqFTSXSik-eRDKQOsbMvWNcg65tTc4qw" />
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
                <img alt="Cloud" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7sypI2eIoNIpox5zY4JMIodSTlYO_yfznTn2Msg8Cq5ta7J1Z6USSc41K5OrOYgRS32VaX5XzBomXOHTjwXElLnbhM7wwRHYi-KM7X5dFdT346_oSYnFeSxdlyn1woLm-bRruoCkPd6lOm8WM78TlXRzQ5Q5cMUqZHUxqxBmhj7ztAh5qn8wpzobpNsYeWA16DeC2-1QDhxi9vfXZIShSrEGqH6VV-TfjuSWg6Cwvze768taUDMGzOIPOgot_Cd5GZEP0ZvN7eDg" />
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

      {/* Logo Cloud / Partners */}
      <section className="py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 font-semibold uppercase tracking-widest text-xs mb-10">Strategic Technology Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold">AWS</span>
            <span className="text-2xl font-bold">Google Cloud</span>
            <span className="text-2xl font-bold">Azure</span>
            <span className="text-2xl font-bold">Salesforce</span>
            <span className="text-2xl font-bold">Kubernetes</span>
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
