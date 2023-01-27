import homePage from "../PageObjects/HomePage";
import productDetailsPage from "../PageObjects/ProductDetailsPage";
import productsPage from "../PageObjects/ProductsPage";

const firstBrandIndex = 0;

describe('As a non registered user I want to search products by its brand and see the results', () => {
    it('Given I am a non registered user located in the home page', () => {
        homePage.navigateToHomepage();
    });

    it('When I click on the -Products- button', () => {
        homePage.navigateToProducts();
    });

    it('And I click on any brand name', () => {
        productsPage.navigateToBrandFromList(firstBrandIndex);
    });

    it('Then I can see the products of that brand displayed', () => {
        let selectedBrand;
        cy.url().then(url => {
            selectedBrand = url.split('/').pop();
            productsPage.clickViewProductOfFirstItem();
            ProductDetailsPage.verifyProductBrand(selectedBrand);
        });
    });
});