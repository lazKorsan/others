const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        specPattern: "cypress/web/**/*.{cy.js,feature}",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
