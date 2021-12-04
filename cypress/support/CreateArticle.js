Cypress.Commands.add('article', (email = 'niko@mail.com', password = '123456Qwert!') => {
    cy.request({
      method: "POST",
      url: "https://api.realworld.io/api/users/login",
      body: {
        "article": {"title":"New Article",
        "description":"About new Article",
        "body":"Lorem ipsum paragraph for new Article random text",
        "tagList":""
        }
      }
    }).then((responce) => {
      window.localStorage.setItem('jwt', responce.body.article.slug);
    });
  });