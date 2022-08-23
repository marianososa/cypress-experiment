Feature: Register user

     As a registered user I want to attempt to register again with an existing email

     Scenario: Enter information to create a new user account with a registered email
         Given I am a registered user located in the register page
         And I have filled in the corresponding details of my personal information using the same email account as in my other account
         When I click on the Create Account button
         Then  the Email address already exist error should be displayed