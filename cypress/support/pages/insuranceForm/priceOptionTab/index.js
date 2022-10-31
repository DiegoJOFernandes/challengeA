/// <reference types='cypress' />

class PriceOptionTab {

  selectPriceOption() {
    cy.get('#selectplatinum').check({ force: true }).should('be.checked')
    cy.get('#viewquote').should('be.visible')
    cy.get('#downloadquote').should('be.visible')
  }

  clickNextSendQuote() {
    cy.get('#nextsendquote').click()
  }

}

export default new PriceOptionTab()
