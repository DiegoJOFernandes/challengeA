const { faker } = require('@faker-js/faker')

Cypress.Commands.add('prepareVehicleData', () => {
  const completeDate = faker.date.between('1996-01-01', '2015-01-01')
  const data = {
    cylinderCapacity: faker.random.numeric(3).toString(),
    enginePerformance: faker.random.numeric(3).toString(),
    dateOfManufacture: `${completeDate.getMonth() +1}/${completeDate.getDate()}/${completeDate.getFullYear()}`,
    numberOfSeats: faker.datatype.number({ min: 1, max: 9 }).toString(),
    numberOfSeatsMotorcycle: faker.datatype
      .number({ min: 1, max: 3 })
      .toString(),
    payload: faker.random.numeric(3).toString(),
    totalWeight: faker.random.numeric(3).toString(),
    listPrice: faker.random.numeric(4).toString(),
    licensePlateNumber: faker.random.numeric(3).toString(),
    annualMileage: faker.random.numeric(4).toString()
  }
  cy.wrap(data).as('vehicleData')
})
