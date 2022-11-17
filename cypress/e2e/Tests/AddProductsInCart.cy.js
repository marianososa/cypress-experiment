import homePage from '../PageObjects/HomePage';
import cartPage from '../PageObjects/CartPage';

describe('As a user I want to add products into the cart and verify that the information is correct', () => {
  it('Given I am a user located in the home page', () => {
    homePage.navigateToHomepage();
  });

  it('And I have navigated to the Products page', () => {
    homePage.navigateToProducts();
  });

  it('When I add a product to the cart', () => {
    cartPage.addFirstProduct();
  });

  it('And I click on the -Continue shopping- button', () => {
    cartPage.clickContinueShopping();
  });

  it('And I add a second product to the cart', () => {
    cartPage.addSecondProduct();
  });

  it('And I click on the -View products- button', () => {
    cartPage.clickViewCart();
  });

  it('Then the selected products should be added into the cart', () => {
    cartPage.verifyCartItems();
  });
});
