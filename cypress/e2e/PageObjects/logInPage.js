const logoImg = 'a > img'
const loginLnk = '.shop-menu > .nav > :nth-child(4) > a'
const emailTxt = '.login-form > form > [type="email"]'
const passwordTxt = '[type="password"]'
const loginBtn = '.login-form > form > .btn'
const loggedInLbl = ':nth-child(9) > a'
const incorrectEmailLbl = '.login-form > form > p'

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

    static enterInvalidCreds() {
        cy.get(emailTxt).type('invalid_user@email.com')
        cy.get(passwordTxt).type('notValidPassword')
    }

    static clickLoginButton() {
        cy.get(loginBtn).click()
    }

    static validateUserIsLoggedIn() {
        cy.get(loggedInLbl).should('be.visible')
    }

    static validateIncorrectLogin() {
        cy.get(incorrectEmailLbl).should('be.visible')
    }

}

export default logInPage