import{ Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import registerPage from '../PageObjects/registerPage'
import logInPage from '../PageObjects/logInPage'

Given ('I am a non registered user located in the register page', () => {
    logInPage.homepage()
    registerPage.navigateToRegister()
})

And ('I have filled in the corresponding details of my personal information', () => {
    registerPage.enterUserInformation()
})

And ('I have clicked on the Create Account button', () => {
    registerPage.clickSignupButton()
})

And ('I have filled in the corresponding details of my address -First,Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile number-', () => {
    registerPage.selectGender()
    registerPage.enterPassword()
    registerPage.enterBirth()
    registerPage.checkNewsletterAndOffers()
    registerPage.enterNameAndLastname()
    registerPage.enterCompany()
    registerPage.enterAddress()
    registerPage.enterMobile()

})

When ('the Account Created message has been displayed', () => {
    registerPage.clickCreateBtn()
    registerPage.accountCreatedConfirmation()
    registerPage.clickContinueBtn()
})

Then ('the Logged in as -username- label is visible', () => {
    registerPage.checkUsernameDisplayed()
})