import homePage from '../PageObjects/HomePage';

describe('As a user I want to subscribe in the home to the page using my email address', () => {
  it('Given I am a non registered user at the main page', () => {
    homePage.navigateToHomepage();
  });

  it('When I enter my email address into the subscription field', () => {
    homePage.enterEmailInSubscription();
  });

  it('And I click on the arrow button', () => {
    homePage.clickSubscribeArrowIcon();
  });

  it('Then the message -You have been successfully subscribed!- should be displayed', () => {
    homePage.verifySubscribed();
  });
});
