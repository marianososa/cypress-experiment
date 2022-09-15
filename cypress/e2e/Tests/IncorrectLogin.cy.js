import logInPage from '../PageObjects/LogInPage';

describe('As a user I want to try to log in with incorrect email and password', () => {
  it('Given I am a registered user at the main page', () => {
    logInPage.homepage();
  });
  it('And I have clicked on the Login button', () => {
    logInPage.navigateToLogin();
  });

  it('When I enter the incorrect email and password in the log in page', () => {
    logInPage.enterInvalidCreds();
  });

  it('And I click on the login button', () => {
    logInPage.clickLoginButton();
  });

  it('Then an error message explaining that my credentials are not correct should be displayed', () => {
    logInPage.validateIncorrectLogin();
  });
});
