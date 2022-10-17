const logOutLnk = '.shop-menu > .nav > :nth-child(4) > a';
const logoImg = '.logo';
const testCasesLnk = '.shop-menu > .nav > :nth-child(5) > a';
const productsLnk = 'Products';
const allProductsLbl = 'all products';

class homePage {
  static clickLogOut() {
    cy.intercept('GET', '/logout', (req) => {
      req.redirect('/login');
    });
    cy.get(logOutLnk).click();
  }

  static navigateToHomepage() {
    cy.visit(`${Cypress.env('baseUrl')}`);
    cy.get(logoImg).should('be.visible');
  }

  static clickOnTestCases() {
    cy.get(testCasesLnk).click();
  }

  static navigateToProducts() {
    cy.contains(productsLnk).click();
    cy.contains(allProductsLbl, { matchCase: false }).should('be.visible');
  }
}

export default homePage;
