/// <reference types="cypress" />

context('clearSearch', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('cy.visit() - visit a remote url', () => {
    cy.get('.search-bar').type('Heal')
    cy.wait(2000)
    cy.get('.clear-icon').click()
    cy.get('input').should('have.value', '')
  })
})
