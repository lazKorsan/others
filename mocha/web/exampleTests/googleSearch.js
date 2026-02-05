const { chromium } = require('playwright');
const { expect } = require('chai');

describe('Google Search Test (Mocha + Playwright)', function () {
    this.timeout(60000); // 60 seconds timeout
    let browser;
    let context;
    let page;

    before(async function () {
        // Launch browser - headless: false allows you to see the browser opening
        browser = await chromium.launch({
            headless: false,
            slowMo: 1000 // Slows down operations by 1000ms so you can follow the steps
        });
        context = await browser.newContext();
        page = await context.newPage();
    });

    after(async function () {
        if (browser) {
            await browser.close();
        }
    });

    it('should search for "Mocha Playwright" on Google', async function () {
        await page.goto('https://www.google.com');

        // Handle cookies button if it appears (common in some regions)
        try {
            const acceptButton = await page.locator('button:has-text("Kabul et"), button:has-text("Accept all"), button:has-text("I agree")').first();
            if (await acceptButton.isVisible({ timeout: 2000 })) {
                await acceptButton.click();
            }
        } catch (e) {
            // Silence cookie banner errors
        }

        // Fill search input
        const searchInput = page.locator('textarea[name="q"], input[name="q"]');
        await searchInput.fill('Mocha Playwright');
        await searchInput.press('Enter');

        // Wait for results to load
        await page.waitForSelector('#search');

        // Verify title
        const title = await page.title();
        console.log('Page Title:', title);
        expect(title).to.contain('Mocha Playwright');
    });
});
