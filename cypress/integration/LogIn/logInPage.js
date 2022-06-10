//This script has been added just for structure purposes
//Modifications need to be performed in order to be executed in
// automationexercise.com
const logo= 'a > img'

class logInPage{

    static homepage(){
        cy.visit(`${Cypress.env('baseUrl')}`)
        cy.get(logo).should('be.visible')
    }

    static loginUser() {
        //cy.loginOnly()
    }

    static logoutUser() {
        //cy.logout()
    }
}

export default logInPage