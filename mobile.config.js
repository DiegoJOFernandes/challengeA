const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36",
    baseUrl: "http://sampleapp.tricentis.com",
    viewportWidth: 380,
    viewportHeight: 800,
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 40000,
    chromeWebSecurity: false,
  },  
  retries: {
    runMode: 2,
    openMode: 1
  }
});
