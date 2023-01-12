import homePage from '../PageObjects/HomePage';
import productsPage from '../PageObjects/ProductsPage';
import cartPage from '../PageObjects/CartPage';
import logInPage from '../PageObjects/LogInPage';

const productToSearch = 'green';
const searchResult = ['Fancy Green Top', 'Green Side Placket Detail T-Shirt', 'Pure Cotton Neon Green Tshirt'];

describe('As a registered user I want to search for a product, log in, and verify that was added correctly to the cart', () => {
  it('Given I am a registered user located in the home page', () => {
    homePage.navigateToHomepage();
  });

  it('And I search for specific products I click on the -Products- button', () => {
    homePage.navigateToProducts();
    productsPage.searchForProduct(productToSearch);
    // Validate the array of products is displayed
    for (let i = 0; i < searchResult.length; i += 1) {
      productsPage.verifySearchResults(searchResult[i]);
    }
  });

  it('And I add all the products displayed to the cart', () => {
    cartPage.addFirstProduct();
    cartPage.clickContinueShopping();
    cartPage.addSecondProduct();
    cartPage.clickContinueShopping();
    cartPage.addThirdProduct();
    // Check every product was added correctly
    cartPage.clickViewCart();
    cartPage.verifyGreenCartItems();
  });

  it('When I log into my account', () => {
    logInPage.navigateToLogin();
    logInPage.enterUserCreds();
    logInPage.clickLoginButton();
    logInPage.validateUserIsLoggedIn();
  });

  it('Then All the products that I added to my cart are still there after I logged in', () => {
    homePage.navigateToCartpage();
    cartPage.verifyGreenCartItems();
  });
});
