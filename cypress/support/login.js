Cypress.Commands.add('login', (email = 'niko@mail.com', password = '123456Qwert!') => {
  cy.visit('http://localhost:1667/#/login');
  cy.get('[placeholder="Email"]')
    .type(email);
  cy.get('[placeholder="Password"]')
    .type(password);
  cy.get('.btn')
    .click();
});

// Cypress.Commands.add('login', (email = 'niko@mail.com', password = '123456Qwert!') => {
//   cy.request({
//     method: "POST",
//     url: "http://localhost:1667/users/login",
//     body: {
//       "user": {
//         "email": email,
//         "password": password
//       }
//     }
//   }).then((responce) => {
//     window.localStorage.setItem('drash_sess', responce.body.user.token);
//   });
// });

