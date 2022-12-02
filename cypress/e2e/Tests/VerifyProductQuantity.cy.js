import homePage from '../PageObjects/HomePage';
import productDetailsPage from '../PageObjects/ProductDetailsPage';
import cartPage from '../PageObjects/CartPage';

const quantityOfProducts = '4';
describe('As a user I want to add an specific quantity of the same product into the cart and verify that the information is correct', () => {
  it('Given I am a user located in the home page', () => {
    homePage.navigateToHomepage();
    cy.clearCookie('sessionid'); // Clears the sessionid cookie to clean up the cart
  });

  it('And I have selected a product from the Home page', () => {
    homePage.selectFirstProduct();
  });

  it('When I increase the product quantity to 4', () => {
    productDetailsPage.selectProductQuantity(quantityOfProducts);
  });

  it('And I add the product into the cart', () => {
    productDetailsPage.clickAddToCart();
  });

  it('And I click on the -View Cart- button', () => {
    cartPage.clickViewCart();
  });

  it('Then the selected product should be added into the cart with the quantity added', () => {
    cartPage.verifyQuantityItems(quantityOfProducts);
  });
});
