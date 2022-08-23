
Feature: "Switch + save Telnyx" form
    Background:
        Given User opens main page
        When  User accept cookies
        And   User scroll down to "Switch+save Telnyx" module


    #TC1
    #@skip
    Scenario: Check the default condition of the module "Switch+save Telnyx"
        Then  User verify that module is present on the page
        And   Check data inside module
            | outbound_calls | inbound_calls | class                                       |
            | 240000         | 110000        | Button__StyledDefaultButton-vntg8h-0 bHtbuT |
    #TC2
    #@skip
    Scenario: Check the default condition of the module "Switch+save Telnyx" when "SMS" option is choosen
        When   User click on "SMS" button
        Then   Check data inside module when "SMS" option is choosen
            | send_messages | receive_messages |
            | 285000        | 350000           |
    #TC3
    #@skip
    Scenario: Check the clickability "Toll-free numbers" radio button and  proper "Compare Costs" calculation
        When   User Click on "Toll-free numbers" radio button
        Then   Check Compare Costs data of "Toll-free numbers" radio button
            | Telnyx | Twilio |
            | 2,490  | 5,747  |
    #TC4
    #@skip
    Scenario: Check clickability of the "Local numbers" radio button and  proper "Compare Costs" calculation
        When   User Click on "Local numbers" radio button
        Then   Check Compare Costs data of "Local numbers" radio button
            | Telnyx | Twilio |
            | 2,578  | 4,502  |
    #TC5
    #@skip
    Scenario: Check "Make outbound calls" slider and proper "Compare Costs" calculation
        When   User set Make outbound calls slider on min position
        Then   Check comparing costs after setting slider in min position: "Save up to $384 per month"
        When   User set Make outbound calls slider on max position
        Then   Check comparing costs after setting slider in max position: "Save up to $6854 per month"
    #TC6
    #@skip
    Scenario: Check "Receive inbound calls" slider, proper "Compare Costs" calculation
        When   User Set Receive inbound calls slide on min position
        Then   Check comparing costs after setting Inbound calls slider in min position: "Save up to $1608 per month"
        When   User set Receive inbound calls slider on max position
        Then   Check comparing costs after setting Inbound calls slider in max position: "Save up to $4697 per month"
    #TC7
    #@skip
    Scenario: Check the clickability "Programmable Voice: " radio buttons and  proper "Compare Costs" calculation
        When   User click on the "No" radio button
        Then   Check comparing costs after checking No radio button: "Save up to $267 per month"
        When   User click on the "Yes" radio button
        Then   Check comparing costs after checking Yes radio button: "Save up to $1924 per month"
    #TC8
    #@skip
    Scenario: Check the clickability "Make and receive messages from " radio buttons and proper "Compare Costs" calculation
        When   User click on the "SMS" radio button TC8
        And    User click on the "Toll-free numbers" radio button
        Then   Check comparing costs after checking Toll-free numbers radio button: "Save up to $1270 per month"
        When   User click on the "Local numbers" radio button
        Then   Check comparing costs after checking Local numbers radio button: "Save up to $2223 per month"
    #TC9
    #@skip
    Scenario: Check "Send messages" slider and proper "Compare Costs" calculation
        When   User click on the "SMS" radio button TC9
        And    User set "Send messages" slide on min position
        Then   Check comparing costs after seting Send messages in min position: "Save up to $1237 per month"
        When   User set "Send messages" slide on max position
        Then   Check comparing costs after seting Send messages in max position: "Save up to $4725 per month"
    #TC10
    #@skip
    Scenario: Check "Receive messages" slider and proper "Compare Costs" calculation
        When   User click on the "SMS" radio button TC10
        And    User Set "Receive messages" slide on min position
        Then   Check comparing costs after seting Receive messages in min position: "Save up to $1010 per month"
        When   User Set "Receive messages" slide on max position
        Then   Check comparing costs after seting Receive messages in max position: "Save up to $4498 per month"
