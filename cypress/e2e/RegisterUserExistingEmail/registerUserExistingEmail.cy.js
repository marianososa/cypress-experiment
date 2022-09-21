import{ Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import registerPage from '../PageObjects/registerPage'
import logInPage from '../PageObjects/logInPage'

Given ('I am a registered user located in the register page', () => {
    logInPage.homepage()
    registerPage.navigateToRegister()
})

And ('I have filled in the corresponding details of my personal information using the same email account as in my other account', () => {
    registerPage.enterExistingUserInformation()
})

When ('I click on the Create Account button', () => {
    registerPage.clickSignupButton()
})

Then ('the Email address already exist error should be displayed', () => {
    registerPage.validateEmailExistError()
})