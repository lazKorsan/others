describe('Cypress Example Test', () => {
    it('should open a website', () => {
        cy.visit('https://example.com');
        cy.title().should('include', 'Example Domain');
    });
});
