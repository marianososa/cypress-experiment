const productSearchTxt = '[id="search_product"]';
const submitSearchBtn = '[id="submit_search"]';

class productsPage {
  static searchForProduct(product) {
    cy.get(productSearchTxt).type(product);
    cy.get(submitSearchBtn).click();
  }

  static verifySearchResults(resultItem) {
    cy.contains(resultItem).should('be.visible');
  }
}

export default productsPage;
