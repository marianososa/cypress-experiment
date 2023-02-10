import { faker } from '@faker-js/faker';

const productSearchTxt = '[id="search_product"]';
const submitSearchBtn = '[id="submit_search"]';
const productDetailsLst = '.features_items .nav > li >';
const productInformation = '.product-information';
const reviewTitleTxt = "//a[@href='#reviews']"; // xpath
const nameField = '#name';
const emailField = '#email';
const reviewField = '#review';
const submitBtn = '#button-review';
const reviewSuccessMsgTxt = '#review-section > div > div > span';
const womenDressCategoryLbl = '.title';
const menCategoryBtn = ':nth-child(2) > .panel-heading > .panel-title > a';
const menTshirtsCategoryBtn = '#Men > .panel-body > ul > :nth-child(1) > a';
const menTshirtsProductsLbl = '.title';
const brandProductsLink = '.brands-name ul a';

class productsPage {
  static searchForProduct(product) {
    cy.get(productSearchTxt).type(product);
    cy.get(submitSearchBtn).click();
  }

  static verifySearchResults(resultItem) {
    cy.contains(resultItem).should('be.visible');
  }

  static clickViewProductOfFirstItem() {
    cy.get(productDetailsLst).eq(0).click();
  }

  static verifyProductDetails(name, category, price, availability, condition, brand) {
    cy.get(productInformation).contains(name);
    cy.get(productInformation).contains(category);
    cy.get(productInformation).contains(price);
    cy.get(productInformation).contains(availability);
    cy.get(productInformation).contains(condition);
    cy.get(productInformation).contains(brand);
  }

  static verifyReviewTitle(reviewTitle) {
    cy.xpath(reviewTitleTxt).contains(reviewTitle);
  }

  static writeReview() {
    cy.get(nameField).type(faker.name.fullName());
    cy.get(emailField).type(faker.internet.email());
    cy.get(reviewField).type(faker.lorem.paragraphs(1));
    cy.get(submitBtn).click();
  }

  static verifyReviewSuccessMsg(reviewSuccessMsg) {
    cy.get(reviewSuccessMsgTxt).should('exist');
    cy.get(reviewSuccessMsgTxt).should('be.visible');
    cy.get(reviewSuccessMsgTxt).contains(reviewSuccessMsg);
  }

  static verifyWomenDressProducts() {
    cy.get(womenDressCategoryLbl).should('be.visible');
  }

  static clickOnMenCategory() {
    cy.get(menCategoryBtn).click();
  }

  static clickOnMenTshirtsCategory() {
    cy.get(menTshirtsCategoryBtn).click();
  }

  static verifyMenTshirtsProducts() {
    cy.get(menTshirtsProductsLbl).should('be.visible');

  static navigateToBrandFromList(brandIndex) {
    cy.get(brandProductsLink).eq(brandIndex).click();
  }
}

export default productsPage;
