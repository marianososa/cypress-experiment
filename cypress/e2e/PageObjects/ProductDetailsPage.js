const quantityTxt = '[id="quantity"]';
const addToCartBtn = '//button[@class="btn btn-default cart"]';
const prodBrand = '.product-information p';

class ProductDetailsPage {
  static selectProductQuantity(qty) {
    cy.get(quantityTxt).clear();
    cy.get(quantityTxt).type(qty);
  }

  static clickAddToCart() {
    cy.xpath(addToCartBtn).click();
  }

  static verifyProductBrand(brand) {
    cy.get(prodBrand).contains(brand);
  }
}
export default ProductDetailsPage;
