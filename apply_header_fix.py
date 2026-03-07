import os
import glob

# The CSS block to force the header Stacking fix on mobile
style_block = """
<style id="zetta-header-mobile-fix">
@media (max-width: 800px) {
    header .wp-block-columns.inner-menu-header {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        align-items: center !important;
        justify-content: space-between !important;
    }
    header .wp-block-column.logo-block {
        display: block !important;
        flex-basis: auto !important;
        width: auto !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    header .wp-block-column.logo-block img.custom-logo {
        max-width: 140px !important;
        height: auto !important;
        display: block !important;
    }
    header .wp-block-column.nav-block {
        display: block !important;
        flex-basis: auto !important;
        width: auto !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    .wp-block-navigation__responsive-container-open svg {
        width: 30px !important;
        height: 30px !important;
    }
}
</style>
"""

files = glob.glob('*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '<style id="zetta-header-mobile-fix">' not in content:
        content = content.replace('</head>', f'{style_block}</head>')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Injected header fix into {f}")
    else:
        print(f"{f} already has the header fix.")
