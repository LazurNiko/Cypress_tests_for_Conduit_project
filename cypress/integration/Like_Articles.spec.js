describe('', () => {

  beforeEach(() => {
    cy.login();
    cy.visit('/');
    cy.contains('.nav-link', 'Global Feed')
      .click();
  });

  it('User should be able to "like" the articles', () => {

    cy.get('.info')
      .should('contain', 'Wed Nov 24 2021');

    cy.get(':nth-child(3) > .article-meta > .pull-xs-right > .btn')
      .should('contain', '208')
      .click();
    cy.get(':nth-child(3) > .article-meta > .pull-xs-right > .btn')
      .should('contain', '209');
    cy.get(':nth-child(4) > .nav-link')
      .should('contain','niko')
      .click();
    cy.get('[href="#@niko/favorites"]') 
      .click();
    cy.contains('.article-preview', 'Gerome')
      .should('exist'); 
    });
  
  it('User should be able to "unlike" the article', () => {

    cy.get(':nth-child(3) > .article-meta > .pull-xs-right > .btn')
      .should('contain', '209')
      .click();
    cy.get(':nth-child(3) > .article-meta > .pull-xs-right > .btn')
      .should('contain', '208');
      cy.get(':nth-child(4) > .nav-link').should('contain','niko')
      .click();
    cy.get('[href="#@niko/favorites"]') 
      .click();
    cy.contains('.article-preview', 'Gerome')
      .should('not.exist'); 

  });
})