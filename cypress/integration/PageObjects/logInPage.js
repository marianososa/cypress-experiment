const logoImg = 'a > img'
const loginLnk = '.shop-menu > .nav > :nth-child(4) > a'
const emailTxt = '.login-form > form > [type="email"]'
const passwordTxt = '[type="password"]'
const loginBtn = '.login-form > form > .btn'
const loggedInLbl = ':nth-child(9) > a'

class logInPage{

    static homepage(){
        cy.visit(`${Cypress.env('baseUrl')}`)
        cy.get(logoImg).should('be.visible')
    }

    static navigateToLogin() {
        cy.get(loginLnk).click()
    }

    static enterUserCreds() {
        cy.get(emailTxt).type(`${Cypress.env('QaAutomationUser')}`)
        cy.get(passwordTxt).type(`${Cypress.env('QaAutomationPassword')}`)
    }

    static clickLoginButton() {
        cy.get(loginBtn).click()
    }

    static validateUserIsLoggedIn() {
        cy.get(loggedInLbl).should('be.visible')
    }
}

export default logInPage