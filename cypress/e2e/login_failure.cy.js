import loginPage from '../pages/loginPage';

describe('Unsuccessful login', () => {
  it('Fails to log in with invalid credentials', () => {
    // Visit the login page
    loginPage.visit();

    // Fill in incorrect username and password
    loginPage.fillUserName('wronguser');
    loginPage.fillPassword('wrongpass');

    // Submit the login form
    loginPage.submit();

    // Verify error message is displayed
    loginPage.assertError();
  });
});
