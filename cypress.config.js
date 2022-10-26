const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
    baseUrl: "http://sampleapp.tricentis.com/101/app.php",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 40000
  },
});
