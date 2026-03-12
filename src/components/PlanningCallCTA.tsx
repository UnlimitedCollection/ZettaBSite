import Link from "next/link";

export function PlanningCallCTA() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-12 md:p-16 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                    <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a web project?</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our technical team to determine the best approach for an upcoming build.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:border-primary transition-colors hover:shadow-md">
                        Schedule Call <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
