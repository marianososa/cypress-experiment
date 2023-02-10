import productsData from '../../fixtures/products.json';

const firstProductBtn = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn';
const firstProductPrice = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2';
const firstProductDescription = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p';
const secondProductBtn = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn';
const secondProductPrice = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > h2';
const secondProductDescription = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p';
const thirdProductBtn = ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn';
const continueShoppingBtn = '.modal-footer > .btn';
const viewCartLnk = 'View Cart';
const item1PriceDescription = '#product-1 > .cart_price > p';
const item1DetailsDescription = '#product-1 > .cart_description > h4 > a';
const item2PriceDescription = '#product-2 >.cart_price > p';
const item2DetailsDescription = '#product-2 > .cart_description > h4 > a';
const item8PriceDescription = '#product-8 >.cart_price > p';
const item8DetailsDescription = '#product-8 > .cart_description > h4 > a';
const item29PriceDescription = '#product-29 >.cart_price > p';
const item29DetailsDescription = '#product-29 > .cart_description > h4 > a';
const item31PriceDescription = '#product-31 >.cart_price > p';
const item31DetailsDescription = '#product-31 > .cart_description > h4 > a';
const cartQuantityLbl = '//td[@class="cart_quantity"]';
const proceedToCheckoutBtn = '.col-sm-6 > .btn';
const registerLoginLnk = '//*[@id="checkoutModal"]//u'; // Xpath

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

  static addThirdProduct() {
    cy.get(thirdProductBtn).click();
  }

  static clickContinueShopping() {
    cy.get(continueShoppingBtn).click();
  }

  static clickViewCart() {
    cy.contains(viewCartLnk).click();
  }

  static clickProceedToCheckout() {
    cy.get(proceedToCheckoutBtn).click();
  }

  static clickRegisterLogin() {
    cy.xpath(registerLoginLnk).click();
  }

  static verifyCartItems() {
    cy.get(item1PriceDescription).contains(productsData.blueTopPrice);
    cy.get(item1DetailsDescription).contains(productsData.blueTopInfo);
    cy.get(item2PriceDescription).contains(productsData.menShirtPrice);
    cy.get(item2DetailsDescription).contains(productsData.menShirtInfo);
  }

  static verifyQuantityItems(qty) {
    cy.xpath(cartQuantityLbl).contains(qty);
  }

  static verifyGreenCartItems() {
    cy.get(item8PriceDescription).contains(productsData.fancyTopPrice);
    cy.get(item8DetailsDescription).contains(productsData.fancyTopInfo);
    cy.get(item29PriceDescription).contains(productsData.greenTShirtPrice);
    cy.get(item29DetailsDescription).contains(productsData.greenTShirtInfo);
    cy.get(item31PriceDescription).contains(productsData.cottonTShirtPrice);
    cy.get(item31DetailsDescription).contains(productsData.cottonTShirtInfo);
  }
}
export default cartPage;
