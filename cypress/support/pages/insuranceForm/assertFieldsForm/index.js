/// <reference types='cypress' />

class AssertFieldsForm {
  checkInitialState(tabName) {
    this.verifyTabAccess(tabName)
    this.checkIfInputFieldsIsEmpty()
    this.verifySelectionFields()
  }

  checkIfInputFieldsIsEmpty() {
    cy.get('section').within(() => {
      cy.get('input[type=text]').should('be.empty')
      cy.get('[type=checkbox]').should('not.be.selected')
      cy.get('[type=radio]').should('not.be.selected')
    })
  }

  verifySelectionFields() {
    cy.get('select > option')
      .contains('please select')
      .should('have.value', 'default')
  }

  verifyTabAccess(tabName) {
    cy.get(`a[name="${tabName}"]`).should('contain.text', `${tabName}`)
  }

  verifyValidFields() {
    cy.get('.idealforms-field').should('have.class', 'valid')
  }

  checkCountFields(tabName) {
    cy.get(`[name="${tabName}"] .counter`).should('contain.text', '0')
  }

  verifyFieldMandatory(tabName, mandatoryField) {
    cy.get(`a[name="${tabName}"] > .counter`).should(
      'have.text',
      mandatoryField
    )
  }
}

export default new AssertFieldsForm()
