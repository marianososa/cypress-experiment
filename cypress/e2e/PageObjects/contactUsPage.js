import { faker } from '@faker-js/faker';

const contactUsTitle = '.contact-form > .title';
const nameTxt = ':nth-child(2) > .form-control';
const emailTxt = ':nth-child(3) > .form-control';
const subjectTxt = ':nth-child(4) > .form-control';
const messageTxt = '#message';
const fileTxt = ':nth-child(6) > .form-control';
const submitButton = ':nth-child(7) > .btn';
const successfulMessageTxt = '.status';
const logoImg = '.logo';

class contactUsPage {
  static verifyContactUsPage() {
    cy.get(contactUsTitle).contains('GET IN TOUCH', { matchCase: false })
  }

  static enterContactDetails() {
    cy.get(nameTxt).type(`${faker.name.firstName()} ${faker.name.lastName()}`);
    cy.get(emailTxt).type(faker.internet.email());
    cy.get(subjectTxt).type('This is a Test');
    cy.get(messageTxt).type('This is a test for the cypress experiment');
    cy.get(fileTxt).selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'file.txt',
        lastModified: Date.now(),
      })
  }

  static clickSubmitButton() {
    cy.get(submitButton).click();
  }

  static verifySuccessMessage() {
    cy.get(successfulMessageTxt).contains('Success! Your details have been submitted successfully.');
  }

  static navigateToHomepage() {
    cy.visit(`${Cypress.env('baseUrl')}`);
    cy.get(logoImg).should('be.visible');
  }
}
export default contactUsPage;