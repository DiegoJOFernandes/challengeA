/// <reference types='cypress' />

const el = require('./elements')

class RegisterPage {

  visitPage(){
    cy.visit('/')
  }

  checkInitialState(aba) {
    cy.get('.idealsteps-step-active').find('a').contains(aba)
    cy.get('[type=radio]').should('not.be.selected')
    cy.get('select > option').contains('please select').should('have.value', 'default')
    cy.get('section').find('input[type=text]').should('be.empty')
  }


}

export default new RegisterPage()
