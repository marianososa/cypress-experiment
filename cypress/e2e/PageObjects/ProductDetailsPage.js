const quantityTxt = '[id="quantity"]';
const addToCartBtn = '//button[@class="btn btn-default cart"]';

class ProductDetailsPage {
  static selectProductQuantity(qty) {
    cy.get(quantityTxt).clear();
    cy.get(quantityTxt).type(qty);
  }

  static clickAddToCart() {
    cy.xpath(addToCartBtn).click();
  }
}
export default ProductDetailsPage;
