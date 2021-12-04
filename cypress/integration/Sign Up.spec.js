describe('Sign Up', () => {
    let user;
  
    before(() => {
      cy.task('newUser').then((newUser) => {
          user = newUser;
      });
    });
  
    it('User should have an ability to create a new account', () => {
      cy.visit('/');
      
      cy.get('[href="#register"]')
        .click();
        cy.url().should('include', '/register');
      cy.get('[placeholder="Username"]')
        .type(user.username);
      cy.get('[placeholder="Email"]')
        .type(user.email);
      cy.get('[placeholder="Password"]')
        .type(user.password);
      cy.get('.btn')
        .click();
      });
  
      
  
  
    
  
    
  
    
  })