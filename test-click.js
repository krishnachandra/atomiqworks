const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

    await page.goto('http://localhost:3004', { waitUntil: 'networkidle2' });

    console.log('Clicking Our Work...');
    await Promise.all([
        page.waitForNavigation({ timeout: 5000 }).catch(e => console.log('Navigation timeout for /work')),
        page.click('a[href="/work"]')
    ]);

    console.log('Current URL after /work:', page.url());

    // Try the "Let's Talk" button too
    console.log('Clicking Let\'s Talk button...');
    await page.click('button.hidden.sm\\:inline-flex');
    console.log('Current URL after button:', page.url());

    await browser.close();
})();
