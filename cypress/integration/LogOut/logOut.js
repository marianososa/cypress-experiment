import{ Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import logInPage from '../PageObjects/logInPage'
import homePage from '../PageObjects/homePage'

Given ('I am a logged in user', () => {
    logInPage.homepage()
    logInPage.navigateToLogin()
    logInPage.enterUserCreds()
    logInPage.clickLoginButton()
    logInPage.validateUserIsLoggedIn()
})

When ('I click on the Logout button', () => {
    homePage.clickLogOut()
})

Then ('I should be navigated to the login page', () => {
    logInPage.validateLoginPageIsDisplayed()
})