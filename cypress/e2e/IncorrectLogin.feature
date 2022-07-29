Feature: Incorrect log in in the app

     As a user I want to try to log in with incorrect email and password

     Scenario: Try to log in into the app with invalid credentials
         Given I am a registered user at the main page
         And I have clicked on the Login button
         When I enter the incorrect email and password in the log in page
         And I click on the login button
         Then An error message explaining that my credentials are not correct should be displayed