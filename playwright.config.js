const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './playwright',
    use: {
        browserName: 'chromium',
        headless: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
});
