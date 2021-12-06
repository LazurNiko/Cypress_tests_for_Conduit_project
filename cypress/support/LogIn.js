// Cypress.Commands.add('login', (email = 'niko@mail.com', password = '12345Qwert!') => {
//     cy.visit('/login');
//     cy.get('[placeholder="Email"]')
//       .type(email);
//     cy.get('[placeholder="Password"]')
//       .type(password);
//     cy.get('.btn')
//       .click();
//   });


Cypress.Commands.add('login', (email = 'niko12@mail.com', password = '12345Qwert!') => {
    cy.request({
        method: "POST",
        url: "https://api.realworld.io/api/users/login",
        body: {
        "user": {
            "email": email,
            "password": password,
        }
        }
    }).then((resp) => {
        window.localStorage.setItem('jwt', resp.body.user.token);
    });
});
