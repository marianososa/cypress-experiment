import registerPage from '../PageObjects/RegisterPage';
import logInPage from '../PageObjects/LogInPage';

describe('As a non registered user I want to register into the app', () => {
  it('Given I am a non registered user located in the register page', () => {
    logInPage.homepage();
    registerPage.navigateToRegister();
  });

  it('And I have filled in the corresponding details of my personal information', () => {
    registerPage.enterUserInformation();
  });

  it('And I have clicked on the Create Account button', () => {
    registerPage.clickSignupButton();
  });

  it('And I have filled in the corresponding details of my address -First,Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile number-', () => {
    registerPage.selectGender();
    registerPage.enterPassword();
    registerPage.enterBirth();
    registerPage.checkNewsletterAndOffers();
    registerPage.enterNameAndLastname();
    registerPage.enterCompany();
    registerPage.enterAddress();
    registerPage.enterMobile();
  });

  it('When the Account Created message has been displayed', () => {
    registerPage.clickCreateBtn();
    registerPage.accountCreatedConfirmation();
    registerPage.clickContinueBtn();
  });

  it('Then the Logged in as -username- label is visible', () => {
    registerPage.checkUsernameDisplayed();
  });
});
