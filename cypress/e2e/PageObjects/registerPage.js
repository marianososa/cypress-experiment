import { faker } from '@faker-js/faker';

const ranDay = () => Cypress._.random(0, 10);
const rdmDay = ranDay();
const ranYear = () => Cypress._.random(1940, 2000);
const rdmYear = ranYear();
const signupLnk = '.shop-menu > .nav > :nth-child(4) > a';
const nameTxt = '[type="text"]';
const emailTxt = '.signup-form > form > [type="email"]';
const signupBtn = '.signup-form > form > .btn';
const genderChk = '#id_gender1';
const passwordSignupTxt = '#password';
const dayBirthCbo = '#days';
const monthBirthCbo = '#months';
const yearBirthCbo = '#years';
const newsletterChk = '#newsletter';
const offersChk = '#optin';
const firstNameTxt = '#first_name';
const lastNameTxt = '#last_name';
const companyTxt = '#company';
const address1Txt = '#address1';
const address2Txt = '#address2';
const countryCbo = '#country';
const stateTxt = '#state';
const cityTxt = '#city';
const zipCodeTxt = '#zipcode';
const mobileNumberTxt = '#mobile_number';
const createAccountBtn = '[data-qa="create-account"]';
const accountCreatedLbl = '[data-qa="account-created"]';
const continueBtn = '[data-qa="continue-button"]';
const usernameLbl = ':nth-child(10) > a';
const deleteAccountBtn = '.shop-menu > .nav > :nth-child(5) > a';
const confirmDeleteBtn = '.modal-footer > .button-form > .btn';
const logoImg = '.logo';

class registerPage {
  static homepage() {
    cy.visit(`${Cypress.env('baseUrl')}`);
    cy.get(logoImg).should('be.visible');
  }

  static navigateToRegister() {
    cy.get(signupLnk).click();
  }

  static enterUserInformation() {
    cy.get(nameTxt).type(`${faker.name.firstName()} ${faker.name.lastName()}`);
    cy.get(emailTxt).type(faker.internet.email());
  }

  static selectGender() {
    cy.get(genderChk).click();
  }

  static enterPassword() {
    cy.get(passwordSignupTxt).type(faker.internet.password());
  }

  static enterBirth() {
    cy.get(dayBirthCbo).select(rdmDay);
    cy.get(monthBirthCbo).select(faker.date.month());
    cy.get(yearBirthCbo).select(rdmYear.toString());
  }

  static checkNewsletterAndOffers() {
    cy.get(newsletterChk).check();
    cy.get(offersChk).check();
  }

  static enterNameAndLastname() {
    cy.get(firstNameTxt).type(faker.name.firstName());
    cy.get(lastNameTxt).type(faker.name.lastName());
  }

  static enterCompany() {
    cy.get(companyTxt).type(faker.company.companyName());
  }

  static enterAddress() {
    cy.get(address1Txt).type(faker.address.street());
    cy.get(address2Txt).type(faker.address.secondaryAddress());
    cy.get(countryCbo).select('United States');
    cy.get(stateTxt).type(faker.address.state());
    cy.get(cityTxt).type(faker.address.city());
    cy.get(zipCodeTxt).type(faker.address.zipCode());
  }

  static enterMobile() {
    cy.get(mobileNumberTxt).type(faker.phone.number());
  }

  static clickCreateBtn() {
    cy.get(createAccountBtn).click();
  }

  static accountCreatedConfirmation() {
    cy.get(accountCreatedLbl).should('be.visible');
  }

  static clickContinueBtn() {
    cy.get(continueBtn).click();
  }

  static checkUsernameDisplayed() {
    cy.get(usernameLbl).should('be.visible');
  }

  static deleteAccountBtn() {
    cy.get(deleteAccountBtn).click();
    cy.get(confirmDeleteBtn).click();
  }

  static clickSignupButton() {
    cy.get(signupBtn).click();
  }
}
export default registerPage;
