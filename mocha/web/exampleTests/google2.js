const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

describe('Google Arama Testi', function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('Google\'da arama yapabilmeli', async function () {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('Mocha');
        await driver.findElement(By.name('btnK')).click();
        await driver.wait(until.titleContains('Mocha'), 1000);
        const title = await driver.getTitle();
        assert.strictEqual(title.includes('Mocha'), true);
    });
});
