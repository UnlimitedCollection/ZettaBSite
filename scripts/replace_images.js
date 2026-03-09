const fs = require('fs');
const path = require('path');

const imgMap = {
    'Web Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    'UI/UX Design App': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    'Software Engineering': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    'Custom Software': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    'Cloud Infrastructure': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    'Mobile App Development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    'Marketing Analytics': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    'Cloud & DevOps Infrastructure': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    'Dashboard Mockup': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    'FinTech Dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    'FinTech': 'https://images.unsplash.com/photo-1531538512162-28266299d638?auto=format&fit=crop&q=80&w=1200',
    'E-Commerce App': 'https://images.unsplash.com/photo-1556742049-0c37d80f6fa9?auto=format&fit=crop&q=80&w=1200',
    'Healthcare Analytics': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    'Client Avatar': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    'Our Workspace': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    'CEO': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    'CTO': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    'Design Director': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    'Delivery': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    'Office Culture': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    'Team Event': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    'Coding': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    'Meeting': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    'Retail': 'https://images.unsplash.com/photo-1556742049-0c37d80f6fa9?auto=format&fit=crop&q=80&w=1200',
    'Cloud': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
};

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            for (const [alt, newSrc] of Object.entries(imgMap)) {
                // Regex to look for img tags with alt="Alt Text" and src starting with https://lh3...
                const regexStr1 = `alt="${alt}"(?:[^>]+?)src="https:\\/\\/lh3\\.googleusercontent\\.com\\/aida-public\\/[^"]+"`;
                const regex1 = new RegExp(regexStr1, 'g');

                content = content.replace(regex1, (match) => {
                    return match.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida-public\/[^"]+"/, `src="${newSrc}"`);
                });

                const regexStr2 = `src="https:\\/\\/lh3\\.googleusercontent\\.com\\/aida-public\\/[^"]+"(?:[^>]+?)alt="${alt}"`;
                const regex2 = new RegExp(regexStr2, 'g');

                content = content.replace(regex2, (match) => {
                    return match.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida-public\/[^"]+"/, `src="${newSrc}"`);
                });
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated images in ${fullPath}`);
            }
        }
    }
}

walkDir(path.join(process.cwd(), 'src/app'));
