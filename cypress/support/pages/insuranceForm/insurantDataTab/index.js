/// <reference types='cypress' />
const { faker } = require('@faker-js/faker')

class InsurantDataTab {

  fillInsurantData() {
    cy.get('#firstname').type(faker.name.firstName())
    cy.get('#lastname').type(faker.name.lastName())
    const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
    cy.get('#birthdate').type(
      `${birthDate.getMonth() + 1}/${birthDate.getDate()}/${birthDate.getFullYear()}`
    )
    cy.get('[type="radio"]').check('Male', { force: true }).should('be.checked')
    cy.get('#streetaddress').type(faker.address.streetAddress(true))
    cy.get('#country').select('Germany').should('have.value', 'Germany')
    cy.get('#zipcode').type(faker.address.zipCode('#######'))
    cy.get('#city').type(faker.address.city())
    cy.get('#occupation').select('Employee').should('have.value', 'Employee')
    cy.get('[type=checkbox]')
      .check(
        ['Speeding', 'BungeeJumping', 'CliffDiving', 'Skydiving', 'Other'],
        { force: true }
      )
      .should('be.checked')
    cy.get('#website').type(faker.internet.url())        
  }
  
  clickNextEnterProductData(){
    cy.get('#nextenterproductdata').click()
  }

}

export default new InsurantDataTab()
