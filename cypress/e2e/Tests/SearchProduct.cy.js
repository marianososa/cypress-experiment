import homePage from '../PageObjects/HomePage';
import productsPage from '../PageObjects/ProductsPage';

const productToSearch = 'dress';
const searchResult = 'Sleeveless Dress';

describe('As a non registered user I want to perform a search of a product and see the results', () => {
  it('Given I am a non registered user located in the home page', () => {
    homePage.navigateToHomepage();
  });

  it('When I click on the -Products- button', () => {
    homePage.navigateToProducts();
  });

  it('And enter a product name in the search input and click on the search button', () => {
    productsPage.searchForProduct(productToSearch);
  });

  it('Then the products related to the search should be displayed', () => {
    productsPage.verifySearchResults(searchResult);
  });
});
