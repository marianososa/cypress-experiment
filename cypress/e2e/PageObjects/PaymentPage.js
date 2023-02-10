import { faker } from '@faker-js/faker';

const nameOnCardTxt = '[data-qa="name-on-card"]';
const cardNumberTxt = '[data-qa="card-number"]';
const cvcTxt = '[data-qa="cvc"]';
const expirationMonthTxt = '[data-qa="expiry-month"]';
const expirationYearTxt = '[data-qa="expiry-year"]';
const payAndConfirmBtn = '[data-qa="pay-button"]';
const orderSuccessLbl = '.col-sm-9 > p';

class paymentPage {
  static fillCardInformation() {
    cy.get(nameOnCardTxt).type(`${faker.name.firstName()} ${faker.name.lastName()}`);
    cy.get(cardNumberTxt).type(faker.finance.creditCardNumber());
    cy.get(cvcTxt).type(faker.finance.creditCardCVV());
    cy.get(expirationMonthTxt).type('5');
    cy.get(expirationYearTxt).type('2026');
  }

  static clickPayAndConfirm() {
    cy.get(payAndConfirmBtn).click();
  }

  static orderSuccessMessageVisible() {
    cy.get(orderSuccessLbl).should('be.visible');
  }
}

export default paymentPage;
