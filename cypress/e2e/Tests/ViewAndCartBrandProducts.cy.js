import homePage from "../PageObjects/HomePage";
import productsPage from "../PageObjects/ProductsPage";


describe('As a non registered user I want to search products by its brand and see the results', () => {
    it('Given I am a non registered user located in the home page', () => {
        homePage.navigateToHomepage();
    });

    it('When I click on the -Products- button', () => {
        homePage.navigateToProducts();
    });

    it('And I click on any brand name', () => {
        cy.get('.brands-name ul a').first().click(); // Navigates to first link in the brands list
    });

    it('Then I can see the products of that brand displayed', () => {
        // Gets the selected Brand by its URL
        // And then compares it with the brand of the first displayed product
        let selectedBrand;
        cy.url().then(url => {
            selectedBrand = url.split('/').pop(); // Stores the last part of the URL
            productsPage.clickViewProductOfFirstItem();
            cy.get('.product-information').find(`:contains("${selectedBrand}")`); // Checks if there is an element with the same text as selectedBrand
        });
        
    });

    it('When I click on another brand', () => {
        homePage.navigateToProducts();
        cy.get('.brands-name ul a').eq(1).click(); // Navigates to the second link the brands list
    });

    it('Then I can see the products of that brand displayed too', () => {
        // Gets the selected Brand by its URL
        // And then compares it with the brand of the first displayed product
        let selectedBrand;
        cy.url().then(url => {
            selectedBrand = url.split('/').pop(); // Stores the last part of the URL
            productsPage.clickViewProductOfFirstItem();
            cy.get('.product-information').find(`:contains("${selectedBrand}")`); // Checks if there is an element with the same text as selectedBrand
        });
    });
});