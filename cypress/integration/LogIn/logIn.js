import{ Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import logInPage from './logInPage'

Given ('I am a registered user at the main page', () => {
    logInPage.homepage()
})

And ('I have clicked on the Login button', () => {
    logInPage.navigateToLogin()
})

When ('I enter the correct email and password in the log in page', () => {
    logInPage.enterUserCreds()
})

And ('I click on the login button', () => {
    logInPage.clickLoginButton()
})

Then ('I should be logged in and my username should be displayed', () => {
    logInPage.validateUserIsLoggedIn()
})