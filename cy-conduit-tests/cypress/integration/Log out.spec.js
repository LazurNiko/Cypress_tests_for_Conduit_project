import LogOut from './pageObj/logout'

describe('Log out', () => {
    const logout = new LogOut()

    before(() => {
        cy.login();
        cy.visit('/');
      });
  
    it('User should have ability to logout', () => {
        logout.settings().click();
        logout.url().should('include','/settings');
        logout.message().click();
    });
});
