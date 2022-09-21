const testCasesTitleLbl = '.title';

class testCasesPage {
  static verifyTestCasesPage() {
    cy.get(testCasesTitleLbl).contains('Test Cases');
  }
}

export default testCasesPage;
