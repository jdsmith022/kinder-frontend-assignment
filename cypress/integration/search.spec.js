/// <reference types="cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('cy.visit() - visit a remote url', () => {
    cy.get('.search-bar').type('health')
    cy.get('.search-icon').click()
  })
})
