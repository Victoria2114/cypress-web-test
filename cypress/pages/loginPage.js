class LoginPage {
  visit() {
    cy.visit('https://the-internet.herokuapp.com/login');
  }

  fillUserName(username) {
    cy.get('#username').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit(){
    cy.get('button[type="submit"]').click();
  }

  assertSuccess() {
    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');
  }
  assertError() {
    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!');
  }
}
export default new LoginPage();