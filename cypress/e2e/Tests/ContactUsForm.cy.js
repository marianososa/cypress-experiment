import contactUsPage from '../PageObjects/ContactUsPage';
import homePage from '../PageObjects/HomePage';

describe('As a non registered user I want to verify that I can complete and submit a Contact Us form', () => {
  it('Given I am a non registered user located in the home page', () => {
    homePage.navigateToHomepage();
  });

  it('When I click on the -Contact Us- button', () => {
    homePage.clickOnContactUs();
    contactUsPage.verifyContactUsPage();
  });

  it('And I complete the Contact Us form', () => {
    contactUsPage.enterContactDetails();
  });

  it('And I click the submit button', () => {
    contactUsPage.clickSubmitButton();
  });

  it('Then I see a success message displayed after details were submitted', () => {
    contactUsPage.verifySuccessMessage();
  });

  it('And I am able to return to home page', () => {
    contactUsPage.navigateToHomepage();
  });
});
