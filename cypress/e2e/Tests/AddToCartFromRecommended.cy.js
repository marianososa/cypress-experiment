import cartPage from "../PageObjects/CartPage";
import homePage from "../PageObjects/homePage";

describe('As a non-registered user I want to succesfully add products to Cart from the recommended items list', () => {
    it('Given I am a non-registered uset at the main page', () => {
        homePage.navigateToHomepage();
    });

    it('When I navigate to the bottom of the page', () => {
        homePage.navigateToRecommendedItems();
    });

    it('And I click on -Add to Cart- on -Recommended Items-', () => {
        cy.wait(5000);
        homePage.addToCartRecommendedProduct();
        cartPage.clickViewCart();
    });

    it('Then the product should be displayed in the Cart', () => {
        cartPage.verifyQuantityItems(1);
    });
});
 