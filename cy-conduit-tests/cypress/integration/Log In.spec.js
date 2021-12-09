import LogInObj from './pageObj/login'

describe('Log In', () => {
  const login = new LogInObj();

  it('User should succesfull login', () => {
    cy.visit('/');
    cy.get('[href="#login"]')
      .click();
    login.email().type('niko12@mail.com');
    login.password().type('12345Qwert!');
    login.signInBtn().should('be.visible').click();
  });
});