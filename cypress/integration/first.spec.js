/// <reference types="cypress"/>

describe('google search', () => {
    it('should work', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('hello world')
      cy.get('[data-cy="blue"]')
      cy.get("[data-cy='submit']").click()

    });
  });