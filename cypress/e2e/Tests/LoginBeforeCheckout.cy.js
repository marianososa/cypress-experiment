import homePage from '../PageObjects/HomePage';
import cartPage from '../PageObjects/CartPage';
import productDetailsPage from '../PageObjects/ProductDetailsPage';
import logInPage from '../PageObjects/LogInPage';
import checkoutPage from '../PageObjects/CheckoutPage';
import paymentPage from '../PageObjects/PaymentPage';

describe('As a user I want to login on the page before adding products into the cart and checking them out', () => {
  it('Given I am a user located at the home page', () => {
    homePage.navigateToHomepage();
    cy.clearCookie('sessionid'); // Clears the sessionid cookie to clean up the cart
  });

  it('And I have logged in on the page', () => {
    logInPage.navigateToLogin();
    logInPage.enterUserCreds();
    logInPage.clickLoginButton();
  });

  it('And I have added products to the cart', () => {
    homePage.selectFirstProduct();
    productDetailsPage.clickAddToCart();
  });

  it('When I review the cart and click on Proceed to Checkout', () => {
    cartPage.clickViewCart();
    cartPage.clickProceedToCheckout();
  });

  it('And I complete the checkout', () => {
    homePage.navigateToCartpage();
    cartPage.clickProceedToCheckout();
    checkoutPage.addComments();
    checkoutPage.clickPlaceOrder();
    paymentPage.fillCardInformation();
    paymentPage.clickPayAndConfirm();
  });

  it('Then a message explaining that the order has been palced successfully should be displayed', () => {
    paymentPage.orderSuccessMessageVisible();
  });
});
