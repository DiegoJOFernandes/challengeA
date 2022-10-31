/// <reference types="cypress" />
const { Before } = require('cypress-cucumber-preprocessor/steps')

Before({ tags: '@prepareData' }, () => {
  cy.prepareVehicleData()
})