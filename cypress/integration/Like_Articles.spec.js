const { describe } = require("mocha");

describe('', () => {
    it('User should be able to "like" the articles', () => {
        cy.get(':nth-child(1) > .article-meta > .btn > .counter')
          .should('contain', '2')
        cy.get(':nth-child(1) > .article-meta > .btn')
          .click();
        cy.get(':nth-child(1) > .article-meta > .btn > .counter')
          .should('contain', '3')
      });
    
      it('User should be able to "unlike" the article', () => {
        cy.get(':nth-child(1) > .article-meta > .btn')
          .click();
        cy.get(':nth-child(1) > .article-meta > .btn > .counter')
          .should('contain', '2');
      });
})