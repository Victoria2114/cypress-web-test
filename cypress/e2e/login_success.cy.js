import loginPage from '../pages/loginPage';

describe('Successful login', () => {
  it('Logs in with valid credentials', () => {
    // Visit the login page
    loginPage.visit();

    // Fill in valid username and password
    loginPage.fillUserName('tomsmith');
    loginPage.fillPassword('SuperSecretPassword!');

    // Submit the login form
    loginPage.submit();

    // Verify success message is displayed
    loginPage.assertSuccess();
  });
});