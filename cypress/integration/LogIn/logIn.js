import{ Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import logInPage from './logInPage'

Given ('I am a user', () => {
    logInPage.homepage() //Function not implemented, added just for structure purposes
})

When ('I login in the app', () => {
    logInPage.loginUser()//Function not implemented, added just for structure purposes
})

Then ('I logout in the app', () => {
    logInPage.logoutUser()//Function not implemented, added just for structure purposes
})