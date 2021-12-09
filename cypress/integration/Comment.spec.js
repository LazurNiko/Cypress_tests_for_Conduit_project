describe('Comment', () => {

  beforeEach(() => {
    cy.login();
    cy.visit('/');
    cy.contains('.nav-link', 'Global Feed')
      .click();
  });

 it('User be able to post comments', () => {
    cy.get('.author')
      .should('contain', 'Gerome');
    cy.get('h1')
      .contains('Explore implementations')
      .click();
    cy.url().should('include', '/Explore-implementations');
    cy.get('.col-xs-12>div>p')
      .should('contain', 'Over 100 implementations have been created using various languages, libraries, and frameworks.')
      .and('contain', 'Explore them on CodebaseShow.');
    cy.get('.form-control')
      .type('This is the comment!');
    cy.contains('.btn', 'Post Comment')
      .click();
}); 

  it('User be able to delete the comment', () => {
    cy.get('.author')
      .should('contain', 'Gerome');
    cy.get('h1')
      .contains('Explore implementations')
      .click();
    cy.url().should('include', '/Explore-implementations');
    cy.get('.col-xs-12>div>p')
      .should('contain', 'Over 100 implementations have been created using various languages, libraries, and frameworks.')
      .and('contain', 'Explore them on CodebaseShow.');
    cy.contains('.card-text', 'This is the comment!', '.date-posted', 'Mon Dec 09 2021')
    cy.get(':nth-child(2) > .card-footer > .mod-options > .ion-trash-a')
      .click();
    cy.contains('.card-text', 'This is the comment!', '.date-posted', 'Mon Dec 09 2021')
      .should('not.exist') 
  });
});