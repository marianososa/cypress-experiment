Feature: Log out of the app

     As a user I want to log out from the app

     Scenario: Log out from the app once I validated that I'm logged in
         Given I am a logged in user
         When I click on the Logout button
         Then I should be navigated to the login page