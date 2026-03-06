import re
import os

with open('original.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract all <style> blocks
styles = []
pattern = re.compile(r'<style[^>]*>(.*?)</style>', re.DOTALL | re.IGNORECASE)
for match in pattern.finditer(html):
    styles.append(match.group(1))

# Remove <style> blocks from html
html_no_style = pattern.sub('', html)

# Add our own stylesheet link right before </head>
html_no_style = html_no_style.replace('</head>', '  <link rel="stylesheet" href="styles/original-style.css">\n</head>')

# Ensure styles directory exists
os.makedirs('styles', exist_ok=True)

# Create a clean base.html
with open('base.html', 'w', encoding='utf-8') as f:
    f.write(html_no_style)

# Save combined styles
with open('styles/original-style.css', 'w', encoding='utf-8') as f:
    f.write('\n'.join(styles))

print("Extraction complete!")
