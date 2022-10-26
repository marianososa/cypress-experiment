const logOutLnk = '.shop-menu > .nav > :nth-child(4) > a';
const logoImg = '.logo';
const testCasesLnk = '.shop-menu > .nav > :nth-child(5) > a';
const contactUsLnk = '.shop-menu > .nav > :nth-child(8) > a';

class homePage {
  static clickLogOut() {
    cy.get(logOutLnk).click();
  }

  static navigateToHomepage() {
    cy.visit(`${Cypress.env('baseUrl')}`);
    cy.get(logoImg).should('be.visible');
  }

  static clickOnTestCases() {
    cy.get(testCasesLnk).click();
  }
  
  static clickOnContactUs() {
    cy.get(contactUsLnk).click();
  }
}

export default homePage;
