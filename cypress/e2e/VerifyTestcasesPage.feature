Feature: Test cases

     As a non registered user I want to verify that the test cases page is displayed

     Scenario: Navigate to test cases page to confirm that the page is displayed
         Given I am a non registered user located in the home page
         When I click on the -Test Cases- button
         Then the Test Cases page should be displayed