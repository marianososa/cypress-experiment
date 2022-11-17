import homePage from '../PageObjects/homePage';
import productsPage from '../PageObjects/ProductsPage';

const reviewTitle = 'Write Your Review';
const reviewSuccessMsg = 'Thank you for your review.';

describe('As a non-registered user I want to leave a review of a product succesfully', () => {
  it('Given I am a non-registered user at the main page', () => {
    homePage.navigateToHomepage();
  });
  it('And I click on the -Products- button', () => {
    homePage.navigateToProducts();
  });
  it('And click on the -View Product- option of the first product', () => {
    productsPage.clickViewProductOfFirstItem();
  });
  it('When I write a review and click submit', () => {
    productsPage.verifyReviewTitle(reviewTitle);
    productsPage.writeReview();
  });
  it('Then I receive a success message', () => {
    productsPage.verifyReviewSuccessMsg(reviewSuccessMsg);
  });
});
