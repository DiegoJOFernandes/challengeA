/// <reference types='cypress' />
const { faker } = require('@faker-js/faker');
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

  fillVehicleData() {
    cy.get('#make').select('Mazda').should('have.value', 'Mazda')
    cy.get('#model').select('Moped').should('have.value', 'Moped')
    const rand = faker.random.numeric(3)
    cy.get('#cylindercapacity').type(rand).should('have.value', rand)
    cy.get('#engineperformance').type(rand).should('have.value', rand)
    cy.get('#dateofmanufacture').type(faker.date.between('1996-01-01', '2015-01-01'))
    cy.get('#numberofseats').select('4').invoke('val').should('deep.equal', '4')
    cy.get('#righthanddriveyes').check().should('be.checked')
    cy.get('#fuel').select('Diesel').should('have.value', 'Diesel')
    cy.get('#payload').type(faker.random.numeric(3))
    cy.get('#totalweight').type(faker.random.numeric(3))
    cy.get('#listprice').type(faker.random.numeric(3))
    cy.get('#llicenseplatenumber').type(faker.random.numeric(3))
    cy.get('#annualmileage').type(faker.random.numeric(4))
    cy.get('#nextenterinsurantdata').click()
  }

  fillInsurantData() {
    cy.get('#firstname').type(faker.name.firstName())
    cy.get('#lastname').type(faker.name.lastName())
    cy.get('#birthdate').type(faker.date.birthdate({min: 18, max:65, mode: 'age'}))
    cy.get('#gendermale').check().should('be.checked')
    cy.get('#streetaddress').type(faker.address.streetAddress(true))
    cy.get('#country').select('Canada').should('have.value', 'Canada')
    cy.get('#zipcode').type(faker.address.zipCode())
    cy.get('#city').type(faker.address.city())
    cy.get('#occupation').select('Employee').should('have.value', 'Employee')
    cy.get('.ideal-radiocheck-label [type=checkbox]').check(['Speeding', 'Bungee Jumping', 'Cliff Diving']).should('be.checked')
    cy.get('#website').type(faker.internet.url())
    cy.get('#picture').attachFile(faker.image.abstract())
    cy.get('#nextenterproductdata').click()
  }

  fillProductData() {
    cy.get('#startdate')
    cy.get('#insurancesum')
    cy.get('#meritrating')
    cy.get('#damageinsurance')
    cy.get('.ideal-radiocheck-label').find('[type=checkbox]').check(['Euro Protection', 'Legal Defense Insurance']).should('be.checked')
    cy.get('#courtesycar').select('Yes').should('be.selected')
    cy.get('#nextselectpriceoption').click()
  }

  selectPriceOption() {

  }

  selectSendQuote() {

  }

}

export default new RegisterPage()
