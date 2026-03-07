import os
import glob
import re

html_files = glob.glob('*.html')

# Read the inline style block from index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Extract the style block
match = re.search(r'(<style id="zetta-header-mobile-fix">.*?</style>)', index_content, re.DOTALL)
if not match:
    print("Could not find the style block in index.html")
    exit(1)

style_block = match.group(1)

# Apply to all other html files
updated_count = 0
for file_path in html_files:
    if file_path == 'index.html':
        continue
        
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    # Replace existing block if it exists
    if '<style id="zetta-header-mobile-fix">' in content:
        new_content = re.sub(r'<style id="zetta-header-mobile-fix">.*?</style>', style_block, content, flags=re.DOTALL)
    else:
        # Otherwise, insert it before </head>
        new_content = content.replace('</head>', f'{style_block}\n</head>')
        
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
            f.write(new_content)
        updated_count += 1
        print(f"Updated {file_path}")

print(f"Done. Updated {updated_count} files.")
