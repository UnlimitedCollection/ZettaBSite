const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkDir(fullPath);
        } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const newContent = content.replace(/ dark:[a-zA-Z0-9:/\[\].\-]+/g, '');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Fixed:', fullPath);
            }
        }
    }
}

walkDir('./src');
console.log('Done!');
