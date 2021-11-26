describe('', () => {
  let user;

  before(() => {
    cy.task('newUser').then((newUser) => {
        user = newUser;
    });
  });

  it('User should have an ability to create a new account', () => {
    cy.visit('/');
    cy.get('[href="#/register"]')
      .click();
    cy.get('[placeholder="Username"]')
      .type(user.username);
    cy.get('[placeholder="Email"]')
      .type(user.email);
    cy.get('[placeholder="Password"]')
      .type(user.password);
    cy.get('.btn')
      .click();
    cy.get('.swal-modal')
      .should('contain', 'Welcome!', 'Your registration was succesful!');
    cy.get('.swal-button')
      .click()
    });

    beforeEach(() => {
      cy.login();
    })

  it('User should have ability to logout', () => {
    cy.get('[href="#/settings"]')
      .click();
      cy.url()
      .should('include','/settings')
    cy.contains('.btn', 'Or click here to logout.')
      .click()
  });

  it('User should have an ability to edit the email and password in profile settings', () => {
    cy.get('[href="#/settings"]')
      .click();
      cy.url()
      .should('include','/settings');
    cy.get('[placeholder="Short bio about you"]')
      .clear()
      .type('My edited bio');
    cy.get('[placeholder="Email"]')
      .clear()
      .type('niko1@mail.com');
    cy.get('[placeholder="Password"]')
      .clear()
      .type('123456Qwert!');
    cy.contains('.btn', 'Update Settings')
      .click();
    cy.get('.swal-modal')
      .should('contain', 'Update successful!');
    cy.get('.swal-button')
      .click();
    cy.get('[placeholder="Email"]')
      .clear()
      .type('niko@mail.com');
    cy.get('[placeholder="Password"]')
      .clear()
      .type('123456Qwert!');
    cy.get('.btn-lg')
      .click();
    cy.get('.swal-button')
      .click();
  });

  it('User should have an ability to change username', () => {
    cy.get('[href="#/settings"]')
      .click();
      cy.url()
      .should('include','/settings');
    cy.get('[placeholder="Your username"]')
      .clear()
      .type('NikoUser');
    cy.get('.btn-lg')
      .click();
    cy.get('.swal-button')
      .click();
    cy.get('[placeholder="Your username"]')
      .clear()
      .type('Niko');
    cy.get('.btn-lg')
      .click();
    cy.get('.swal-button')
      .click();
  });

  it('User should have an ability to add the image in profile settings', () => {
    cy.get('[href="#/settings"]')
      .click();
      cy.url()
      .should('include','/settings');
    cy.get('[placeholder="URL of profile picture"]')
      .clear()
      .type('https://static3.depositphotos.com/1000627/109/i/600/depositphotos_1095588-stock-photo-green-eyed-cat.jpg');
    cy.get('.btn-lg')
      .click();
    cy.get('.swal-button')
      .click();
  });

  it('User should have an ability to create new article', () => {
    cy.get('[href="#/editor"]')
      .click();
    cy.url()
      .should('include', 'editor');
    cy.get('[placeholder="Article Title"]')
      .type('My new Article');
    cy.get(`[placeholder="What's this article about?"]`)
      .type('Article');
    cy.get('[placeholder="Write your article (in markdown)"]')
      .type('My new article is created');
    cy.contains('.btn', 'Publish Article')
      .click();
  });

  it('User be able to edit own created Article', () => {
    cy.get('[href="#/@Niko/"]')
      .click();
    cy.url()
      .should('include', '/@Niko/');
    cy.contains('.article-meta', 'Niko');
    cy.contains('.profile-page', 'My new Article');
    cy.get('[href="#/articles/quia-sint-cupidatat"]')
      .click();
    cy.url()
    .should('include', '/quia-sint-cupidatat');
    cy.contains('.banner', 'My new Article', 'Niko', '.date');
    cy.contains('[href="#/editor/quia-sint-cupidatat"]', 'Edit Article')
      .click();
    cy.url()
      .should('include', '/editor/quia-sint-cupidatat'); 
    cy.get('[placeholder="Article Title"]')
      .clear()
      .type('My edited Article');
    cy.get(`[placeholder="What's this article about?"]`)
      .clear()
      .type('Edited Article');
    cy.get('[placeholder="Write your article (in markdown)"]')
      .clear()
      .type('My edited Article is edited many times:)');
    cy.contains('[type="submit"]', 'Publish Article')
      .click();
    cy.contains('[href="#/editor/quia-sint-cupidatat"]', 'Edit Article')
      .click();
      cy.get('[placeholder="Article Title"]')
      .clear()
      .type('My new Article');
    cy.get(`[placeholder="What's this article about?"]`)
      .clear()
      .type('Edited new article');
    cy.get('[placeholder="Write your article (in markdown)"]')
      .clear()
      .type('Edited Article');
    cy.contains('[type="submit"]', 'Publish Article')
      .click();
    cy.url()
      .should('include', '/editor/quia-sint-cupidatat'); 
  });

  it('User should be able to delete article', () => {
    cy.get('[href="#/editor"]')
      .click();
    cy.url()
      .should('include', 'editor');
    cy.get('[placeholder="Article Title"]')
      .type('My best Article');
    cy.get(`[placeholder="What's this article about?"]`)
      .type('Article');
    cy.get('[placeholder="Write your article (in markdown)"]')
      .type('My new article is created');
    cy.contains('[type="submit"]', 'Publish Article')
      .click();
    cy.contains('.article-actions > .article-meta > :nth-child(3) > .btn-outline-danger', 'Delete Article')
      .click();
    cy.contains('[href="#/@Niko/"]', 'Niko')
      .click();
    cy.url().
      should('include', '/');  
    cy.get('[href="#/articles/my-best-Article"]')
      .should('not.exist');
  });

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
