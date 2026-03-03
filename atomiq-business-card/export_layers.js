(async () => {
    const playwright = require('puppeteer');
    const path = require('path');
    const fs = require('fs');

    const browser = await playwright.launch({ headless: true });
    const page = await browser.newPage();

    const filePath = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
    await page.goto(filePath, { waitUntil: 'networkidle0' });

    const scale = 20;

    // Function to hide all and then show specific elements
    const captureLayer = async (selector, fileName, folder) => {
        await page.evaluate((sel) => {
            // Hide everything first
            const all = document.querySelectorAll('*');
            all.forEach(el => {
                if (el.style) el.style.visibility = 'hidden';
            });

            // Show only the requested element and its parents
            const target = document.querySelector(sel);
            if (target) {
                target.style.visibility = 'visible';
                let parent = target.parentElement;
                while (parent) {
                    parent.style.visibility = 'visible';
                    parent = parent.parentElement;
                }
            }

            // Special handling: remove background of card for transparency if possible
            const cards = document.querySelectorAll('.micro-card');
            cards.forEach(c => {
                c.style.boxShadow = 'none';
                c.style.background = 'transparent';
            });

            // Hide the browser chrome if we only want the content
            const chromes = document.querySelectorAll('.chrome-bar');
            chromes.forEach(c => c.style.visibility = 'hidden');
        }, selector);

        const folderPath = path.join('atomiq-layers', folder);
        if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

        const element = await page.$(selector);
        if (element) {
            await element.screenshot({
                path: path.join(folderPath, fileName),
                omitBackground: true,
                type: 'png'
            });
        }
    };

    // Reset everything back to visible for next layer
    const resetVisibility = async () => {
        await page.evaluate(() => {
            document.querySelectorAll('*').forEach(el => {
                if (el.style) el.style.visibility = 'visible';
            });
        });
    };

    console.log('Capturing Front Layers...');
    // Front Layers
    await captureLayer('#cardElement .logo-container', '01-logo.png', 'front');
    await resetVisibility();
    await captureLayer('#cardElement .wordmark', '02-wordmark.png', 'front');
    await resetVisibility();
    await captureLayer('#cardElement .tagline', '03-tagline.png', 'front');
    await resetVisibility();
    await captureLayer('#cardElement .we-create', '04-we-create-text.png', 'front');
    await resetVisibility();
    await captureLayer('#cardElement .creation-labels', '05-labels.png', 'front');
    await resetVisibility();
    await captureLayer('#cardElement .front-contact', '06-contact-float.png', 'front');
    await resetVisibility();

    console.log('Capturing Back Layers...');
    // Back Layers
    await captureLayer('#cardBackElement .stats-container', '01-stats.png', 'back');
    await resetVisibility();
    await captureLayer('#cardBackElement .contact-links', '02-contact-links.png', 'back');
    await resetVisibility();
    await captureLayer('#cardBackElement .qr-placeholder', '03-qr-group.png', 'back');
    await resetVisibility();

    await browser.close();
    console.log('Done.');
})();
