const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();

    const pages = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'FAQ', path: '/faq' },
    ];

    const viewports = [
        { name: 'Desktop', width: 1280, height: 720 },
        { name: 'Mobile', width: 375, height: 812 },
    ];

    const context = await browser.newContext();

    for (const vp of viewports) {
        for (const p of pages) {
            const page = await context.newPage();
            await page.setViewportSize({ width: vp.width, height: vp.height });
            console.log(`Navigating to ${p.name} on ${vp.name}...`);
            try {
                await page.goto(`http://localhost:3001${p.path}`, { waitUntil: 'networkidle' });
                await page.screenshot({ path: `screenshot-${p.name}-${vp.name}.png`, fullPage: false });
                console.log(`Saved screenshot-${p.name}-${vp.name}.png`);
            } catch (e) {
                console.error(`Failed to load ${p.name}: ${e.message}`);
            }
            await page.close();
        }
    }

    await browser.close();
})();
