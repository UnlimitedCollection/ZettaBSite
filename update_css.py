import os
import glob

files = glob.glob('*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = content.replace('href="styles/original-style.css"', 'href="styles/original-style.css?v=2"')
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print("Done")
