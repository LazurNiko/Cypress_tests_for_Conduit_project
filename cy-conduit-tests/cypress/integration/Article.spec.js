describe('Creating, editing, deleting article', () => {

  let article;

  before(() => {
    cy.task('newArticle').then((newArticle) => {
        article = newArticle;
    });
  });

  beforeEach(() => {
      cy.login();
      cy.visit('/')
  })

  it('User should have an ability to create new article', () => {
      cy.get('[href="#editor"]')
        .click();
      cy.url()
        .should('include', 'editor');
      cy.get('[placeholder="Article Title"]')
        .type(article.title);
      cy.get(`[placeholder="What's this article about?"]`)
        .type(article.description);
      cy.get('[placeholder="Write your article (in markdown)"]')
        .type(article.body);
      cy.contains('.btn', 'Publish Article')
        .click();
    });
  
    it('User be able to edit own created Article', () => {
      cy.visit('/');
      cy.contains('.nav-link', 'Global Feed')
          .click();
      cy.contains('h1', 'fdg').click()
      cy.url()
        .should('include', '#/article/fdg-2283');
      cy.contains('.author', 'niko');
      cy.contains('h1', 'fdg');
      cy.contains('.col-xs-12', 'My contains lorem ipsum article body');
      cy.contains('[href="#/editor/fdg-2283"]', 'Edit Article')
        .click();
      cy.url()
      .should('include', '#/editor/fdg-2283');
      cy.url()
        .should('include', '#/editor/fdg-2283'); 
      cy.get('[placeholder="Article Title"]')
        .clear();
      cy.get('[placeholder="Article Title"]')
        .type('My new');
      cy.get(`[placeholder="What's this article about?"]`)
        .clear();
      cy.get(`[placeholder="What's this article about?"]`)
        .type('About');
      cy.get('[placeholder="Write your article (in markdown)"]')
        .clear();
      cy.get('[placeholder="Write your article (in markdown)"]')
        .type('Whatever');
      cy.contains('.btn', 'Publish Article')
        .click();
      cy.url()
        .should('include', '#/article/fdg-2283')  
      cy.contains('[href="#/editor/fdg-2283"]', 'Edit Article')
        .click();
      cy.get('[placeholder="Article Title"]')
        .clear({timeout: 3000});
      cy.get('[placeholder="Article Title"]')
        .type('fdg');
      cy.get(`[placeholder="What's this article about?"]`)
        .clear();
      cy.get(`[placeholder="What's this article about?"]`)
        .type('My contains lorem ipsum article body');
      cy.get('[placeholder="Write your article (in markdown)"]')
        .clear({timeout: 3000});
      cy.get('[placeholder="Write your article (in markdown)"]')
        .type('My contains lorem ipsum article body');
      cy.contains('.btn', 'Publish Article')
        .click();
      cy.url()
        .should('include', '/#/article/fdg-2283'); 
    });
  
    it('User should be able to delete article', () => {
      cy.get('[href="#editor"]')
        .click();
      cy.url()
        .should('include', 'editor');
      cy.get('[placeholder="Article Title"]')
        .type('My best Article');
      cy.get(`[placeholder="What's this article about?"]`)
        .type('Article');
      cy.get('[placeholder="Write your article (in markdown)"]')
        .type('My new article is created');
      cy.contains('.btn', 'Publish Article')
        .click();
      cy.get('.btn.btn-outline-danger.btn-sm')
        .click();
      cy.url().
        should('include', '/');  
      cy.get('[href="#/articles/my-best-Article"]')
        .should('not.exist');
    });
})

