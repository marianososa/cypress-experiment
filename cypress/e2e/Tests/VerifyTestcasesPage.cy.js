import testcasesPage from '../PageObjects/TestcasesPage';
import homePage from '../PageObjects/HomePage';

describe('As a non registered user I want to verify that the test cases page is displayed', () => {
  it('Given I am a non registered user located in the home page', () => {
    homePage.navigateToHomepage();
  });

  it('When I click on the -Test Cases- button', () => {
    homePage.clickOnTestCases();
  });

  it('Then the Test Cases page should be displayed', () => {
    testcasesPage.verifyTestCasesPage();
  });
});
