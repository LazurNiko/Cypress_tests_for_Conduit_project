describe('Log In', () => {

  it('User should succesfull login', () => {
    cy.visit('/');
    cy.get('[href="#login"]')
      .click();
    cy.get('[placeholder="Email"]')
      .type('niko12@mail.com');
    cy.get('[placeholder="Password"]')
      .type('12345Qwert!');
    cy.get('.btn')
      .click();
  });

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