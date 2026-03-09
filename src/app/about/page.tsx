import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About ZettaB | Strategy, Design, Engineering",
    description: "Learn who we are, what we believe, and how we build world-class software for ambitious businesses.",
};

const values = [
    { title: "Engineering Excellence", desc: "We hold ourselves to the highest technical standards. Clean code, robust architecture, and performance are non-negotiable." },
    { title: "Design with Intent", desc: "Every design decision serves a purpose — guiding users, communicating value, and driving conversion." },
    { title: "Radical Transparency", desc: "We communicate openly. You always know where your project stands, what's coming next, and why decisions are made." },
    { title: "Long-Term Partnership", desc: "We don't disappear after launch. We grow with you, iterate on what works, and help you navigate what comes next." },
];

export default function AboutPage() {
    return (
        <main>
            {/* Header / Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Mission & Vision</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Engineering the Future,<br />One Product at a Time.
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        We are a collective of strategic thinkers, technical experts, and design innovators building software that defines industry standards.
                    </p>
                </div>
            </section>

            {/* Two Column Intro */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                            <img alt="Our Workspace" className="rounded-3xl object-cover w-full h-[500px] shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMbylQ67P3J-JshQY2_IfnZ1A1YcO42G62d18J5ZshV7pL-52xR9j-C6S9uFItXlsQ26bTjW931oD7-c10kFnttU7L4XyqKEDF9cQ7370F-b-1f0fQZ1J9eUfF5Z_0g4N1Z3oE5A8s1Z_yO5F-mY_4hD7j-Vw9X-A-B-z-0WbA_Q" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Born from a desire to do things <span className="text-primary italic">right</span>.</h2>
                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>
                                    Founded in 2016, ZettaB.io started with a simple observation: too many businesses were settling for mediocre software that hindered their growth rather than accelerating it.
                                </p>
                                <p>
                                    We set out to create an agency that prioritised engineering excellence, transparent communication, and tangible business results over quick fixes and buzzwords.
                                </p>
                                <p>
                                    Today, we are proud to be the trusted technology partner for startups scaling globally and enterprises modernising their infrastructure. We measure our success entirely by the success of the products we ship.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="text-3xl font-black text-primary mb-1">2016</div>
                                    <div className="text-sm font-semibold uppercase text-slate-500">Founded</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-primary mb-1">50+</div>
                                    <div className="text-sm font-semibold uppercase text-slate-500">Engineers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-primary mb-1">100%</div>
                                    <div className="text-sm font-semibold uppercase text-slate-500">In-House</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">What We Stand For</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            The principles that guide our decisions, our code, and our relationships.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">workspace_premium</span>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Uncompromising Quality</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We believe in writing clean, maintainable, and thoroughly tested code. We don't cut corners because technical debt always costs more later.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">handshake</span>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Radical Transparency</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">No black boxes. We provide total visibility into our process, progress, and challenges. Good news travels fast, bad news travels faster.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">insights</span>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Business Integration</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We aren't just order-takers. We act as strategic advisors, questioning assumptions and aligning technology choices with your revenue goals.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">speed</span>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Agile Velocity</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We ship early and often. By prioritizing rapid iteration and feedback loops, we reduce risk and ensure the product meets real user needs.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">diversity_2</span>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Continuous Learning</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Technology moves fast, and so do we. We invest heavily in our team's growth, ensuring we always bring the most effective modern tools to your project.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6">verified_user</span>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Security First</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">In a vulnerable digital landscape, security is never an afterthought. We build robust, compliant systems designed to protect your data and your users.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Leadership Team</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Led by industry veterans who have scaled products for Fortune 500s and hyper-growth startups.
                            </p>
                        </div>
                        <Link href="/contact" className="hidden md:inline-flex px-6 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors">
                            Join Our Team
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="CEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsMIsLwT9Xz7U6_Y3V6T89m_c0_S363JpUqI1eR_-K9r3c3kHJUQ8-I5Z_O7s8qD6R_v4W-Xq-KQQ5dY-O1S_T8r5p-O6x8qQ1e8z7_Kk-g_y9F_zB-G0K-tA-4O5N2L6bF2n1w8gL8qV9-K_I-P_G9aB_X4lKqX-G_5QoT8n6L_F5-mF_7fP_uT_6Y" />
                            </div>
                            <h4 className="text-xl font-bold dark:text-white">Elena Rostova</h4>
                            <p className="text-primary font-bold text-sm mb-3">Founder & CEO</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Former VP of Engineering at TechGlobal. Passionate about aligning technical strategy with business scaling.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="CTO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-R5T9T2D0F_rG3n8M4-V6T2z1L-3P2G9E2r_I3f5O_O7T8q-M_x-W3_7H_L3P0s7E9s_O8E8P4GZ7d-O5E-P9N2_Q6g3F-C3d4t6_O5F2-O3G4J7e5A9P_x8P6m1z4M2q9T_z-n0B9L3d_A8w-L4G9-M-xX_h7N0x_F4J_Z6n2I8t-K-Z9_v_4" />
                            </div>
                            <h4 className="text-xl font-bold dark:text-white">Marcus Vance</h4>
                            <p className="text-primary font-bold text-sm mb-3">Chief Technology Officer</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">System architecture expert with over 15 years experience designing high-availability cloud infrastructure.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="Design Director" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-w8N-C3l3F-t6Q1G8E5R9-W3k0N3T8q-L1e3n4S5e_g5t-Z1m5_S8Q2g-M6P2J2G-C-X1o7R-M-E1Z9T1F-z_w2M2G8B9m-t-Y5Q8i2K1m8z2P-j-Y6R_L3B1g3J7X9P4w0E-M9G6t-I3_q2_S5w6Q3m_O4k-P9G9H_T8Y4K_j4F-U1i_t-z5Q8h-" />
                            </div>
                            <h4 className="text-xl font-bold dark:text-white">Sarah Jenkins</h4>
                            <p className="text-primary font-bold text-sm mb-3">Head of Design</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Award-winning UX practitioner focused on building intuitive interfaces that drive user engagement.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-3xl overflow-hidden mb-6 relative aspect-[3/4]">
                                <img alt="Delivery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Z1F3h-O3m-P6e-V8k6T3_Q4t-E8h-C2e_X4f3t4I_G4g-w8o2A-R8j3H-K4N3O9x7j7k5C_M-q-R4H3K8A6Y_z2D8t8m_U3A4Z8X3s5I-t_B6Z-E0d6V5q8L-I8o2Y4G0g8t_E7p7R3H-A8C5s4U9r1X6K3D1r-W-G6V1m9d8B6O1N-D_I_b-Y_a" />
                            </div>
                            <h4 className="text-xl font-bold dark:text-white">David Chen</h4>
                            <p className="text-primary font-bold text-sm mb-3">Head of Delivery</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Master of agile methodologies ensuring projects hit deadlines, budgets, and quality metrics consistently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workplace / Culture */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-8">A culture built on innovation and trust.</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We've created an environment where top talent wants to stay. By fostering autonomy, continuous learning, and a strictly blameless post-mortem culture, we attract engineers who are passionate about their craft.
                            </p>
                            <ul className="space-y-6 mb-10">
                                <li className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">public</span>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Remote-First Flexibility</h4>
                                        <p className="text-slate-500 text-sm">While we maintain hubs in London and NY, we hire the best talent globally regardless of location.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">R&D Fridays</h4>
                                        <p className="text-slate-500 text-sm">Our team spends 20% of their time exploring emerging techs like Web3, GenAI, and edge computing.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Comprehensive Wellness</h4>
                                        <p className="text-slate-500 text-sm">We provide top-tier health coverage, mental health resources, and mandatory minimum PTO.</p>
                                    </div>
                                </li>
                            </ul>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                                View Open Positions <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img alt="Office Culture" className="rounded-3xl object-cover h-64 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-K8J7i_l-H6v4R_X9E5G-L4P2t1-S6a3Q_m3S2d8A-r-A5Q1n4O_X_O3I-o-J4F3E_S1I8N2g5D8R3o0e5A2W5f-U6b4L9I8Q6u2W1U7x7I_b_j5G8I8D2M_H-Z3M_D4T-Y9g6e_Q1O7C_P6z9V7H-T4c8V8S6Z0T5F0H4m_S_P0A5w2g-k-U9l-X" />
                                <img alt="Team Event" className="rounded-3xl object-cover h-48 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v4D-R3S_Q-C7F1a6I8B1J7z3R9E6G9y4L3W1F0Z_m_X2N5F0M3y-I1s7O5Q6T6O8L7Q3v_I_Y4E-i2B3G-a3E-X5U8Y8k-E4u6X6N8X6k5q1K5R0-L-F-R8R-b6R8X2U_g5Z_R1H-C3I_U4P_g0E5D4G5q_e_I-C2G4Q_N0B7U1j-U8z1z_V9b-W5s-C" />
                            </div>
                            <div className="space-y-4 pt-10">
                                <img alt="Coding" className="rounded-3xl object-cover h-48 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsMIsLwT9Xz7U6_Y3V6T89m_c0_S363JpUqI1eR_-K9r3c3kHJUQ8-I5Z_O7s8qD6R_v4W-Xq-KQQ5dY-O1S_T8r5p-O6x8qQ1e8z7_Kk-g_y9F_zB-G0K-tA-4O5N2L6bF2n1w8gL8qV9-K_I-P_G9aB_X4lKqX-G_5QoT8n6L_F5-mF_7fP_uT_6Y" />
                                <img alt="Meeting" className="rounded-3xl object-cover h-64 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-w8N-C3l3F-t6Q1G8E5R9-W3k0N3T8q-L1e3n4S5e_g5t-Z1m5_S8Q2g-M6P2J2G-C-X1o7R-M-E1Z9T1F-z_w2M2G8B9m-t-Y5Q8i2K1m8z2P-j-Y6R_L3B1g3J7X9P4w0E-M9G6t-I3_q2_S5w6Q3m_O4k-P9G9H_T8Y4K_j4F-U1i_t-z5Q8h-" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
