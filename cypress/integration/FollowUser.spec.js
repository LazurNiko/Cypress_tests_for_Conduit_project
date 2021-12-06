describe('Follow', () => {

    beforeEach(() => {
      cy.login();
      cy.visit('/');
      cy.contains('.nav-link', 'Global Feed')
        .click();
    });

    it('User should have ability to follow other user', () => {
        cy.get(':nth-child(4) > .article-meta > .info > .author')
            .should('contain', 'Gerome')
            .click()
        cy.get('[class="btn btn-sm action-btn btn-outline-secondary"]')
            .should('contain', 'Follow Gerome')
            .click();
        cy.get('[class="btn btn-sm action-btn btn-secondary"]')
            .should('contain', 'Unfollow Gerome')
    });

    it('User should have ability to unfollow other user', () => {
        cy.get(':nth-child(4) > .article-meta > .info > .author')
            .should('contain', 'Gerome')
            .click()
        cy.get('[class="btn btn-sm action-btn btn-secondary"]')
            .should('contain', 'Unfollow Gerome')
            .click();
        cy.get('[class="btn btn-sm action-btn btn-outline-secondary"]')
            .should('contain', 'Follow Gerome')
    });
    
});
