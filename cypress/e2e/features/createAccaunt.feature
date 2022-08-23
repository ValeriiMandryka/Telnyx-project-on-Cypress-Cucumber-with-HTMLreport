Feature: Create a free account form
    
    Background:
        Given User opens main page
        When  User accept cookies
        And   User scroll down to "Switch+save Telnyx" module
        And   User click on "Create a free account" into "Switch + save Telnyx" form


   
    Scenario: Check redirection to "Create a free account" throu "Switch + save Telnyx" form
        Then  User should be redirected on: "https://telnyx.com/sign-up" page TC11
    #TC12
    
    Scenario: Verify  "Terms and Conditions" page
        When  User scroll down to "Terms and Conditions"
        And   User click on "Terms and Conditionst"
        Then  User should be redirected on: "https://telnyx.com/terms-and-conditions-of-service" page TC12
    #TC13
    
    Scenario: Verify  "Privacy Policy" page
        When  User scroll down to "Privacy Policy"
        And   User click on "Privacy Policy"
        Then  User should be redirected on: "https://telnyx.com/privacy-policy" page TC13
    
    #TC14
    
    Scenario: Sign up with valid cradantials
        When  User fill in form:

            | Email                   | Full_name | Password     |
            | valerii_s2tn4@gmail.com | Valerii   | Qwerty!12345 |

        And   User check  "I agree to the Terms and Conditions and Telnyxs Privacy Policy"
        And   User check  "I want to receive emails from Telnyx"
        And   User click on "Create Account" button
        Then   User shoul be redirected on page with notification
            | url                                       | notifiction                                      |
            | https://telnyx.com/sign-up/verify-email/f | We've sent you an email to activate your account |
    #15
    Scenario: Single sign-on from "Create a free account" form with invalid cradantials
        When  User Scroll to "Login"
        And   User Click on "Login" 
        Then  User should be redirected on: "https://portal.telnyx.com/#/login/sign-in" page TC15
        And   User On new page click on "Singl Sign-On"
        And   User Fill in email: "valerii_s2tn4@mailsac.com"
        And   User Click on "Continue" button
        Then  User shoul be notificated with: "The requested resource or URL could not be found."