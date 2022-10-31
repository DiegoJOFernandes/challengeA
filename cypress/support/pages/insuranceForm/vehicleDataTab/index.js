/// <reference types='cypress' />

class vehicleDataTab {
  visitPage() {
    cy.visit('/101/app.php')
  }

  assertVisitPage(){
    cy.title().should('deep.equal', 'Enter Vehicle Data')
    cy.url().should('be.eq', 'http://sampleapp.tricentis.com/101/app.php')
  }

  fillVehicleData() {
    cy.get('@vehicleData').then((data) => {
      cy.get('#make').select('Volkswagen').should('have.value', 'Volkswagen')
      cy.get('#model').select('Moped').should('have.value', 'Moped')
      cy.get('#cylindercapacity')
        .type(data.cylinderCapacity)
        .should('have.value', data.cylinderCapacity)
      cy.get('#engineperformance')
        .type(data.enginePerformance)
        .should('have.value', data.enginePerformance)
      cy.get('#dateofmanufacture')
        .type(data.dateOfManufacture)
        .should('have.value', data.dateOfManufacture)
      cy.get('#numberofseats')
        .select(data.numberOfSeats)
        .invoke('val')
        .should('deep.equal', data.numberOfSeats)
      cy.get('#numberofseatsmotorcycle')
        .select(data.numberOfSeatsMotorcycle)
        .invoke('val')
        .should('deep.equal', data.numberOfSeatsMotorcycle)
      cy.get('[name="Right Hand Drive"]')
        .check('Yes', { force: true })
        .should('be.checked')
      cy.get('#fuel').select('Diesel').should('have.value', 'Diesel')
      cy.get('#payload').type(data.payload).should('have.value', data.payload)
      cy.get('#totalweight')
        .type(data.totalWeight)
        .should('have.value', data.totalWeight)
      cy.get('#listprice')
        .type(data.listPrice)
        .should('have.value', data.listPrice)
      cy.get('#licenseplatenumber')
        .type(data.licensePlateNumber)
        .should('have.value', data.licensePlateNumber)
      cy.get('#annualmileage')
        .type(data.annualMileage)
        .should('have.value', data.annualMileage)
    })
  }

  clickNextEnterInsurantData() {
    cy.get('#nextenterinsurantdata').click()
  }
}

export default new vehicleDataTab()