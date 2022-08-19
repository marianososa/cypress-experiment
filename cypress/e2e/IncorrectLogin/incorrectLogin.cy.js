import{ Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import logInPage from '../PageObjects/logInPage'

Given ('I am a registered user at the main page', () => {
    logInPage.homepage()
})

And ('I have clicked on the Login button', () => {
    logInPage.navigateToLogin()
})

When ('I enter the incorrect email and password in the log in page', () => {
    logInPage.enterInvalidCreds()
})

And ('I click on the login button', () => {
    logInPage.clickLoginButton()
})

Then ('An error message explaining that my credentials are not correct should be displayed', () => {
    logInPage.validateIncorrectLogin()
})
