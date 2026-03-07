import glob
import re

new_header_fix = """
<style id="zetta-header-mobile-fix">
@media (max-width: 800px) {
    /* Header layout */
    header .wp-block-columns.inner-menu-header {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        align-items: center !important;
        justify-content: space-between !important;
        width: 100% !important;
        max-width: 100% !important;
    }
    header .wp-block-column.logo-block {
        display: flex !important;
        flex-basis: auto !important;
        width: auto !important;
        max-width: 70% !important;
        margin: 0 !important;
        padding: 0 !important;
        align-items: center !important;
    }
    header .wp-block-column.logo-block img.custom-logo {
        max-width: 130px !important;
        height: auto !important;
        display: block !important;
    }
    header .wp-block-column.nav-block {
        display: flex !important;
        flex-basis: auto !important;
        width: auto !important;
        max-width: 30% !important;
        margin: 0 !important;
        padding: 0 !important;
        align-items: center !important;
        justify-content: flex-end !important;
    }
    
    /* Hamburger Icon */
    .wp-block-navigation__responsive-container-open {
        padding: 5px !important;
    }
    .wp-block-navigation__responsive-container-open svg {
        width: 28px !important;
        height: 28px !important;
        fill: #ffffff !important;
    }
    
    /* Opened Menu Container */
    .wp-block-navigation__responsive-container.is-menu-open {
        background-color: #0f152d !important;
        padding: 20px !important;
    }
    
    /* Close Button */
    .wp-block-navigation__responsive-container-close {
        top: 25px !important;
        right: 25px !important;
    }
    .wp-block-navigation__responsive-container-close svg {
        fill: #ffffff !important;
        width: 32px !important;
        height: 32px !important;
    }
    
    /* Menu Items Container */
    .wp-block-navigation__responsive-container-content {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        padding-top: 50px !important;
    }
    ul.wp-block-navigation__container {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        width: 100% !important;
    }
    ul.wp-block-navigation__container li {
        width: 100% !important;
        text-align: left !important;
        border-bottom: 1px solid rgba(255,255,255,0.06) !important;
    }
    ul.wp-block-navigation__container li:last-child {
        border-bottom: none !important;
    }
    
    /* Menu Links */
    .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item a {
        font-size: 16px !important;
        font-weight: 500 !important;
        letter-spacing: 0.5px !important;
        padding: 16px 10px !important;
        color: #ffffff !important;
        text-transform: uppercase !important;
        display: block !important;
        width: 100% !important;
        text-align: left !important;
    }
    
    /* Services Dropdown in Mobile Menu */
    .wp-block-navigation-submenu__toggle {
        color: #ffffff !important;
        top: 5px !important;
        right: 5px !important;
    }
    .wp-block-navigation__submenu-container {
        background-color: rgba(0,0,0,0.1) !important;
        padding-left: 15px !important;
        padding-right: 15px !important;
    }
    .wp-block-navigation__submenu-container .wp-block-navigation-item a {
        font-size: 14px !important;
        padding: 12px 10px !important;
        border-bottom: none !important;
        text-transform: capitalize !important;
        color: #cbd5e1 !important;
    }
}
</style>
"""

files = glob.glob('*.html')
pattern = re.compile(r'<style id="zetta-header-mobile-fix">.*?</style>', re.DOTALL)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if pattern.search(content):
        # Replace existing
        content = pattern.sub(new_header_fix.strip(), content)
    else:
        # Inject before </head>
        content = content.replace('</head>', f'{new_header_fix.strip()}\\n</head>')
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f"Updated header CSS in {f}")
