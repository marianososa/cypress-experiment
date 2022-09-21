import logInPage from '../PageObjects/LogInPage';
import homePage from '../PageObjects/HomePage';

describe('As a user I want to log out from the app', () => {
  it('Given I am a logged in user', () => {
    logInPage.homepage();
    logInPage.navigateToLogin();
    logInPage.enterUserCreds();
    logInPage.clickLoginButton();
    logInPage.validateUserIsLoggedIn();
  });

  it('When I click on the Logout button', () => {
    homePage.clickLogOut();
  });

  it('Then I should be navigated to the login page', () => {
    logInPage.validateLoginPageIsDisplayed();
  });
});
