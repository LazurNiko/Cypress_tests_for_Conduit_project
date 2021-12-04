describe('Log In', () => {

    before(() => {
        cy.login();
        cy.visit('/');
      });
  
    it('User should have ability to logout', () => {
      cy.get('[href="#settings"]')
        .click();
        cy.url()
        .should('include','/settings');
      cy.contains('.btn', 'Or click here to logout.')
        .click();
    });
})