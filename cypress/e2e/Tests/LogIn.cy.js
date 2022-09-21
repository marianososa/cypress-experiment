import logInPage from '../PageObjects/LogInPage';

describe('As a user I want to log in with correct email and password', () => {
  it('Given I am a registered user at the main page', () => {
    logInPage.homepage();
  });

  it('And I have clicked on the Login button', () => {
    logInPage.navigateToLogin();
  });

  it('When I enter the correct email and password in the log in page', () => {
    logInPage.enterUserCreds();
  });

  it('And I click on the login button', () => {
    logInPage.clickLoginButton();
  });

  it('Then I should be logged in and my username should be displayed', () => {
    logInPage.validateUserIsLoggedIn();
  });
});
