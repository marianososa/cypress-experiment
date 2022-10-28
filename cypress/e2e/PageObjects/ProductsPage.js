const productSearchTxt = '[id="search_product"]';
const submitSearchBtn = '[id="submit_search"]';
const productDetailsLst = '.features_items .nav > li >';
const productInformation = '.product-information';

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
}

export default productsPage;
