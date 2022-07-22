Feature: Log in in the app

     As a user I want to log in with correct email and password

     Scenario: Log in into the app with valid credentials
         Given I am a registered user at the main page
         And I have clicked on the Login button
         When I enter the correct email and password in the log in page
         And I click on the login button
         Then I should be logged in and my username should be displayed