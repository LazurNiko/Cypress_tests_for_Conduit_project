it('User be able to post the comment', () => {

    
    cy.get('.author')
      .should('contain', 'Randy.Murphy');
    cy.get('[href="#/articles/veniam-ut-dolor"]')
      .click();
    cy.url().should('include', '/veniam-ut-dolor');
    cy.get('.container.page')
      .should('contain', 'Qui ut ut veritatis.');
      cy.get('.form-control')
      .type('This is the comment!');
    cy.contains('.btn', 'Post Comment')
      .click();
  });

  it('User be able to delete the comment', () => {
    cy.get('.author')
      .should('contain', 'Randy.Murphy');
    cy.get('[href="#/articles/veniam-ut-dolor"]')
      .click();
    cy.url().should('include', '/veniam-ut-dolor');
    cy.get('.container.page')
      .should('contain', 'Qui ut ut veritatis.');
      cy.get('.card-footer')
        .should('contain', 'Niko')
    cy.contains('.form-control', 'This is the comment!')
      .should('not.exist');
  });