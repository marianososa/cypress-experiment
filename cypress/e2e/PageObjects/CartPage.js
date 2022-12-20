import productsData from '../../fixtures/products.json';

const firstProductBtn = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn';
const firstProductPrice = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > h2';
const firstProductDescription = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p';
const secondProductBtn = ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn';
const secondProductPrice = ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > h2';
const secondProductDescription = ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p';
const continueShoppingBtn = '.modal-footer > .btn';
const viewCartLnk = 'View Cart';
const firstPriceDescription = '.cart_price > p';
const firstDetailsDescription = '#product-2 > .cart_description > h4 > a';
const secondPriceDescription = '.cart_price > p';
const secondDetailsDescription = '#product-3 > .cart_description > h4 > a';
const cartQuantityLbl = '//td[@class="cart_quantity"]';

class cartPage {
  static addFirstProduct() {
    cy.get(firstProductBtn).click();
  }

  static getFirstProductInfo() {
    cy.get(firstProductPrice).invoke('text').as('firstPrice');
    cy.get(firstProductDescription).invoke('text').as('firstDescription');
  }

  static addSecondProduct() {
    cy.get(secondProductBtn).click();
  }

  static getSecondProductInfo() {
    cy.get(secondProductPrice).invoke('text').as('secondPrice');
    cy.get(secondProductDescription).invoke('text').as('secondDescription');
  }

  static clickContinueShopping() {
    cy.get(continueShoppingBtn).click();
  }

  static clickViewCart() {
    cy.contains(viewCartLnk).click();
  }

  static verifyCartItems() {
    cy.get(firstPriceDescription).contains(productsData.menShirtPrice);
    cy.get(firstDetailsDescription).contains(productsData.menShirtInfo);
    cy.get(secondPriceDescription).contains(productsData.dressPrice);
    cy.get(secondDetailsDescription).contains(productsData.dressInfo);
  }

  static verifyQuantityItems(qty) {
    cy.xpath(cartQuantityLbl).contains(qty);
  }
}
export default cartPage;
