import homePage from '../PageObjects/HomePage';
import productsPage from '../PageObjects/ProductsPage';

const productName = 'Blue Top';
const productCategory = 'Tops';
const productPrice = '500';
const productAvailability = 'In Stock';
const productCondition = 'New';
const productBrand = 'Polo';

describe('As a non registered user I want to perform a search of a product and see the results', () => {
  it('Given I am a non registered user located in the home page', () => {
    homePage.navigateToHomepage();
  });

  it('When I click on the -Products- button', () => {
    homePage.navigateToProducts();
  });

  it('And click on the -View Product- option of the first product', () => {
    productsPage.clickViewProductOfFirstItem();
  });

  it('Then all the details of the products should be displayed -product name, category, price, availability, condition, brand-', () => {
    productsPage.verifyProductDetails(
      productName,
      productCategory,
      productPrice,
      productAvailability,
      productCondition,
      productBrand,
    );
  });
});
