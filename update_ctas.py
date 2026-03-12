import os
import re

files_to_update = [
    "src/app/cloud-deployments/page.tsx",
    "src/app/digital-marketing/page.tsx",
    "src/app/mobile-applications/page.tsx",
    "src/app/software-development/page.tsx",
    "src/app/ui-ux-designs/page.tsx",
    "src/app/web-development/page.tsx"
]

main_services_file = "src/app/services/page.tsx"

new_cta = """            {/* Global Contact CTA Box */}
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

def replace_in_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find and remove the Contact CTA Box from sidebar
    content = re.sub(r'\s*{\/\* Contact CTA Box \*\/}\s*<div className="p-8 bg-slate-50[^>]+>.*?<\/div>', '', content, flags=re.DOTALL)

    # Regex to replace the Related Case Study / Banner
    content = re.sub(r'\s*{\/\* Related Case Study \/ Banner \*\/}.*?<\/section>', '\n\n' + new_cta, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        print(f"Updated {filepath}")

for path in files_to_update:
    replace_in_file(path)

# Special handling for main services page
if os.path.exists(main_services_file):
    with open(main_services_file, 'r', encoding='utf-8') as f:
        services_content = f.read()
    
    # Replace CTA
    services_content = re.sub(r'\s*{\/\* CTA \*\/}\s*<section className="py-24 bg-primary text-white text-center">.*?<\/section>', '\n\n' + new_cta, services_content, flags=re.DOTALL)
    
    with open(main_services_file, 'w', encoding='utf-8') as f:
        f.write(services_content)
        print(f"Updated {main_services_file}")
