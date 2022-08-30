import{ Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import testcasesPage from '../PageObjects/testcasesPage'
import homePage from '../PageObjects/homePage'

Given ('I am a non registered user located in the home page', () => {
    homePage.navigateToHomepage()
})

When ('I click on the -Test Cases- button', () => {
    homePage.clickOnTestCases()
})

Then ('the Test Cases page should be displayed', () => {
    testcasesPage.verifyTestCasesPage()
})