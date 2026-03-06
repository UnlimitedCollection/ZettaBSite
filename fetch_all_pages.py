import urllib.request
import re

pages = {
    'index.html': 'https://zettab.io/',
    'cloud-deployments.html': 'https://zettab.io/?page_id=67',
    'web-development.html': 'https://zettab.io/?page_id=71',
    'mobile-applications.html': 'https://zettab.io/?page_id=148',
    'digital-marketing.html': 'https://zettab.io/?page_id=175',
    'ui-ux-designs.html': 'https://zettab.io/?page_id=183',
    'software-development.html': 'https://zettab.io/?page_id=194',
    'contact.html': 'https://zettab.io/?page_id=236',
    'careers.html': 'https://zettab.io/?page_id=267',
}

headers = {'User-Agent': 'Mozilla/5.0'}

stylesheet_link = '<link rel="stylesheet" href="styles/original-style.css">'

for filename, url in pages.items():
    print(f"Fetching {filename} from {url}...")
    req = urllib.request.Request(url, headers=headers)
    response = urllib.request.urlopen(req)
    html_content = response.read().decode('utf-8')
    
    # Check if there's any block-library style we might need to remove
    # Actually, we can just remove ALL <style id="...">...</style> blocks that matched our extraction.
    # To be safe, we will remove any style blocks that have an id starting with 'wp-block' or 'global-styles' or 'core-block'
    # Wait, the best way is to use a regex to match all <style ...>...</style> that we know we put in the original-style.css
    
    # We remove all <style> blocks from the <head> entirely to be clean, 
    # except maybe some very small inline ones that don't matter, but let's just use re.sub
    cleaned_html = re.sub(r'<style.*?>.*?</style>', '', html_content, flags=re.DOTALL)
    
    # Also inject the stylesheet link before </head>
    cleaned_html = cleaned_html.replace('</head>', f'{stylesheet_link}\n</head>')
    
    # Replace exact URLs with absolute paths or specific local file names
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=67"', 'href="cloud-deployments.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=71"', 'href="web-development.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=148"', 'href="mobile-applications.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=175"', 'href="digital-marketing.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=183"', 'href="ui-ux-designs.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=194"', 'href="software-development.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=236"', 'href="contact.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/?page_id=267"', 'href="careers.html"')
    cleaned_html = cleaned_html.replace('href="https://zettab.io/"', 'href="index.html"')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(cleaned_html)
        
    print(f"Saved {filename}")

print("All pages fetched and processed.")
