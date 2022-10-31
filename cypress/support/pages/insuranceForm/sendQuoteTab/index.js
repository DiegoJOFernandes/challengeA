/// <reference types='cypress' />

const { faker } = require('@faker-js/faker')

class SendQuoteTab {

  fillQuoteData() {
    const generatePassword = faker.internet.password(20)
    cy.get('#finished-container').should('be.visible')
    cy.get('#email').type(faker.internet.email())
    cy.get('#phone').type(faker.phone.number('#########'))
    cy.get('#username').type(faker.internet.userName())
    cy.get('#password').type(generatePassword)
    cy.get('#confirmpassword').type(generatePassword)
    cy.get('#Comments').type(faker.lorem.lines(1))
  }

  clickSendQuote() {
    cy.get('#sendemail').click()
  }

  assertEmailSentSuccessfully() {
    cy.get('#LoadingPDF').should('be.visible')
    cy.get('.sweet-alert').should('be.visible')
    cy.get('.sa-success').should('be.visible')
    cy.get('h2').should('contain.text', 'Sending e-mail success!')
    cy.get('.confirm').contains('OK').click()
  }

}

export default new SendQuoteTab()