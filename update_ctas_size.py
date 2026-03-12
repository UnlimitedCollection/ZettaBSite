import os

files_to_update = [
    "src/app/cloud-deployments/page.tsx",
    "src/app/digital-marketing/page.tsx",
    "src/app/mobile-applications/page.tsx",
    "src/app/software-development/page.tsx",
    "src/app/ui-ux-designs/page.tsx",
    "src/app/web-development/page.tsx",
    "src/app/services/page.tsx"
]

old_cta = """            {/* Global Contact CTA Box */}
            <section className="py-20 bg-white">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-8 md:p-10 bg-slate-50 rounded-3xl border border-slate-200">
                        <h2 className="font-bold text-3xl text-slate-900 mb-4">Planning a web project?</h2>
                        <p className="text-lg text-slate-600 mb-8">Speak with our technical team to determine the best approach for an upcoming build.</p>
                        <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:border-primary transition-colors">
                            Schedule Call <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>"""

new_cta = """            {/* Global Contact CTA Box */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 bg-slate-50 rounded-3xl border border-slate-200 text-center shadow-sm">
                        <h2 className="font-bold text-4xl text-slate-900 mb-4">Planning a web project?</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Speak with our technical team to determine the best approach for an upcoming build.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:border-primary transition-colors hover:shadow-md">
                            Schedule Call <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>"""

for filepath in files_to_update:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_cta in content:
            content = content.replace(old_cta, new_cta)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
        else:
            print(f"CTA not found in {filepath}. It might have been altered.")
