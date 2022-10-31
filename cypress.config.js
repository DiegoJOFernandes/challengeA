const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
    baseUrl: "http://sampleapp.tricentis.com",
    viewportWidth: 1440,
    viewportHeight: 900,
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
