import { faker } from '@faker-js/faker';

const logOutLnk = '.shop-menu > .nav > :nth-child(4) > a';
const logoImg = '.logo';
const testCasesLnk = '.shop-menu > .nav > :nth-child(5) > a';
const contactUsLnk = '.shop-menu > .nav > :nth-child(8) > a';
const productsLnk = 'Products';
const allProductsLbl = 'all products';
const subscriptionLbl = 'SUBSCRIPTION';
const subscribeTxt = '[id="susbscribe_email"]';
const arrowIconBtn = '[class="fa fa-arrow-circle-o-right"]';
const successfullSubscribedLbl = '.alert-success';
const cartLnk = 'Cart';
const shoppingCartLbl = '.active';
const firstProductLnk = '//a[@href="/product_details/1"]'; // xpath

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

  static navigateToCartpage() {
    cy.contains(cartLnk).click();
    cy.get(shoppingCartLbl).should('be.visible');
  }

  static clickOnTestCases() {
    cy.get(testCasesLnk).click();
  }

  static clickOnContactUs() {
    cy.get(contactUsLnk).click();
  }

  static navigateToProducts() {
    cy.contains(productsLnk).click();
    cy.contains(allProductsLbl, { matchCase: false }).should('be.visible');
  }

  static enterEmailInSubscription() {
    cy.contains(subscriptionLbl, { matchCase: false }).should('be.visible');
    cy.get(subscribeTxt).type(faker.internet.email());
  }

  static clickSubscribeArrowIcon() {
    cy.get(arrowIconBtn).click();
  }

  static verifySubscribed() {
    cy.get(successfullSubscribedLbl).should('be.visible');
  }

  static selectFirstProduct() {
    cy.xpath(firstProductLnk).click();
  }
}

export default homePage;
