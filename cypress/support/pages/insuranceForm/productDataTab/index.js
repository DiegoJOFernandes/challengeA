/// <reference types='cypress' />

const { faker } = require('@faker-js/faker')

class ProductDataTab {

  fillProductData() {
    const futureDate = faker.date.future(10)
    cy.get('#startdate').type(
      `${futureDate.getMonth()}/${futureDate.getDate()}/${futureDate.getFullYear()}`
    )
    cy.get('#insurancesum').select('3000000').should('have.value', '3000000')
    cy.get('#meritrating').select('Malus 17').should('have.value', 'Malus 17')
    cy.get('#damageinsurance')
      .select('Full Coverage')
      .should('have.value', 'Full Coverage')
    cy.get('[name^="Optional Products"]')
      .click({ force: true, multiple: true })
      .should('be.checked')
    cy.get('#courtesycar').select('Yes').should('have.value', 'Yes')
  }

  clickNextSelectPriceOption() {
    cy.get('#nextselectpriceoption').click()
  }

}

export default new ProductDataTab()
