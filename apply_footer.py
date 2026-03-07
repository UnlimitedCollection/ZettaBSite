import os
import glob

css_content = """/* Universal Footer Alignment & Layout Fixes */
.footer-widgets {
    background-color: #104c75 !important; 
    padding-top: 60px !important;
    padding-bottom: 60px !important;
}
.footer-widgets .custom-logo {
    max-width: 110px !important; /* Made logo smaller as requested */
    height: auto !important;
    margin-bottom: 25px !important;
    display: block !important;
    filter: none !important;
    margin-left: 0 !important;
}
.footer-widgets .wp-block-site-logo {
    display: flex !important;
    justify-content: flex-start !important;
    text-align: left !important;
    margin: 0 !important;
    width: 100% !important;
}
.footer-widgets .wp-block-group.is-nowrap {
    display: flex !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 15px !important;
    margin-bottom: 20px !important;
    width: auto !important;
}
.footer-widgets .wp-block-group.is-nowrap figure {
    margin: 0 !important;
    width: 20px !important;
    min-width: 20px !important;
    max-width: 20px !important;
    flex-shrink: 0 !important;
    filter: none !important;
}
.footer-widgets .wp-block-group.is-nowrap p {
    margin: 0 !important;
    text-align: left !important;
    font-size: 15px !important;
    color: #ffffff !important;
    font-family: 'Jost', sans-serif !important;
    font-weight: 500 !important;
    line-height: 1.4 !important;
    width: auto !important;
    flex-grow: 1 !important;
}
.footer-widgets h5.wp-block-heading {
    font-size: 20px !important;
    font-weight: 700 !important;
    margin-bottom: 15px !important;
    text-transform: capitalize !important;
    letter-spacing: normal !important;
    color: #ffffff !important;
}
.footer-widgets hr.wp-block-separator {
    margin-top: 15px !important;
    margin-bottom: 25px !important;
    border: none !important;
    border-top: 1px solid #237db1 !important;
    height: 1px !important;
    background: transparent !important;
    opacity: 1 !important;
}
.footer-widgets .wp-block-column .wp-block-navigation-item {
    display: flex !important;
    align-items: center !important;
    margin-bottom: 18px !important;
    justify-content: flex-start !important;
}
.footer-widgets .wp-block-column .wp-block-navigation-item::before {
    content: '•';
    color: #3ca2e0;
    font-size: 20px;
    margin-right: 12px;
    line-height: 0.5;
}
.footer-widgets .wp-block-column .wp-block-navigation-item a {
    font-size: 14px !important;
    font-weight: 600 !important;
    text-decoration: none !important;
    color: #ffffff !important;
    font-family: 'Jost', sans-serif !important;
    transition: color 0.3s ease;
    text-align: left !important;
}
.footer-widgets .wp-block-column .wp-block-navigation-item a:hover {
    color: #3ca2e0 !important;
}
.wp-block-group.copyright-text p {
    font-size: 13px !important;
    color: #ffffff !important;
    text-align: center !important;
    margin: 0 !important;
    justify-content: center !important;
}
"""

with open('styles/footer-style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

files = glob.glob('*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Inject CSS link before closing </head> if not already present
    if 'footer-style.css' not in content:
        content = content.replace('</head>', '  <link rel="stylesheet" href="styles/footer-style.css">\n</head>')
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
    else:
        print(f"{f} already has footer-style.css")

print("Done updating footer styles.")
