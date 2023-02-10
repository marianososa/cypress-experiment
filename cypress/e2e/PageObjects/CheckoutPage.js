import { faker } from '@faker-js/faker';

const commentsTxt = '[name="message"]';
const placeOrderBtn = '//a[@href="/payment"]'; // Xpath

class checkoutPage {
  static addComments() {
    cy.get(commentsTxt).type(faker.lorem.paragraph());
  }

  static clickPlaceOrder() {
    cy.xpath(placeOrderBtn).click();
  }
}
export default checkoutPage;
