it('increment', () => {
  cy.visit('/')
  cy.get('button').should('have.text', '0')
  cy.get('button').click()
  cy.get('button').should('have.text', '1')
})