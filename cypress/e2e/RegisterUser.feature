Feature: Register user

     As a non registered user I want to register into the app

     Scenario: Enter information to create a new user account and delete the account
         Given I am a non registered user located in the register page
         And I have filled in the corresponding details of my personal information
         And I have clicked on the Create Account button
         And I have filled in the corresponding details of my address -First,Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile number-
         When the Account Created message has been displayed
         Then  the Logged in as -username- label is visible