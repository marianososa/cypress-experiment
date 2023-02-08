import productsPage from '../PageObjects/ProductsPage';
import homePage from '../PageObjects/homePage';

describe('As a non registered user I want to verify that I am able to view the products for each category', () => {
  it('Given I am a non registered user located in the home page', () => {
    homePage.navigateToHomepage();
  });

  it('And I can view the categories on the left side bar', () => {
    homePage.verifyCategories();
  });

  it('When I click on "Women" category', () => {
    homePage.clickOnWomenCategory();
  });

  it('And I click on "Dress" under "Women" category', () => {
    homePage.clickOnWomenDressCategory();
  });

  it('Then I can see category page is displayed and I see the text "WOMEN - DRESS PRODUCTS"', () => {
    productsPage.verifyWomenDressProducts();
  });

  it('And I am also able to click on any sub-category link of "Men category"', () => {
    productsPage.clickOnMenCategory();
    productsPage.clickOnMenTshirtsCategory();
  });

  it('And I am navigated to that category', () => {
    productsPage.verifyMenTshirtsProducts();
  });
});
