/// <reference types="cypress" />
const { Before } = require('cypress-cucumber-preprocessor/steps')

Before({ tags: '@form' }, () => {
  cy.visit('/')
})