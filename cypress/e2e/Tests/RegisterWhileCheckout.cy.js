import homePage from '../PageObjects/HomePage';
import cartPage from '../PageObjects/CartPage';
import productDetailsPage from '../PageObjects/ProductDetailsPage';
import registerPage from '../PageObjects/RegisterPage';
import checkoutPage from '../PageObjects/CheckoutPage';
import paymentPage from '../PageObjects/PaymentPage';

describe('As a user I want to add products into the cart and register on the page while checking out', () => {
  it('Given I am a user located at the home page', () => {
    homePage.navigateToHomepage();
    cy.clearCookie('sessionid'); // Clears the sessionid cookie to clean up the cart
  });

  it('And I have selected a product from the Home page', () => {
    homePage.selectFirstProduct();
    productDetailsPage.clickAddToCart();
  });

  it('And I have navigated to the cart page', () => {
    cartPage.clickViewCart();
  });

  it('When I click on Proceed to Checkout', () => {
    cartPage.clickProceedToCheckout();
    cartPage.clickRegisterLogin();
  });

  it('And I perform a registration by creating a new account', () => {
    registerPage.enterUserInformation();
    registerPage.clickSignupButton();
    registerPage.selectGender();
    registerPage.enterPassword();
    registerPage.enterBirth();
    registerPage.checkNewsletterAndOffers();
    registerPage.enterNameAndLastname();
    registerPage.enterCompany();
    registerPage.enterAddress();
    registerPage.enterMobile();
    registerPage.clickCreateBtn();
    registerPage.accountCreatedConfirmation();
    registerPage.clickContinueBtn();
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
