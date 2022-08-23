const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor');

const commonPage = require('../pageObjects/commonPage');
const createAccountPage = require('../pageObjects/createAccountPage');
const LoginPage = require('../pageObjects/LoginPage');
const mainPage = require('../pageObjects/mainPage');
//function createRandomEmail() {return "Username" + Math.floor(Math.random() * 10000 ) + "@gmail.com" }
//TC11
Given('User opens main page', () => {
    mainPage.openMainPage()
    //cy.visit('https://telnyx.com/');
})
When('User accept cookies', () => {
    commonPage.acceptCookies()
});
And('User scroll down to "Switch+save Telnyx" module', () =>{
    commonPage.scrollToElement(mainPage.elements.moduleSaveTelnyx())  
    //cy.xpath('//*[@class="sc-1e626587-1 fjgfOb"]').scrollIntoView()

})
And('User click on "Create a free account" into "Switch + save Telnyx" form', () => {
    commonPage.clickElement(mainPage.elements.btnCreateFreeAccount())
    //cy.xpath('(//*[@href="https://telnyx.com/sign-up"] )[2]').click()
})
Then ('User should be redirected on: {string} page TC11',(url)=>{
    commonPage.checkUrl(url)
    //cy.url().should('eq', url)

})
//TC12
When('User scroll down to "Terms and Conditions"', () => {
    commonPage.scrollToElement(createAccountPage.elements.termsAndConditions())
    //cy.xpath('//*[@href="/terms-and-conditions-of-service"]',{ timeout: 10000 }).scrollIntoView()

})
And('User click on "Terms and Conditionst"', () => {
    commonPage.clickElementWithoutAttr(createAccountPage.elements.termsAndConditions())
    //cy.xpath('//*[@href="/terms-and-conditions-of-service"]').invoke('removeAttr', 'target').click()
})
Then('User should be redirected on: {string} page TC12', (url) => {
    commonPage.checkUrl(url)
    //cy.url().should('eq', url)
})
//TC13
When('User scroll down to "Privacy Policy"', () => {
    commonPage.scrollToElement(createAccountPage.elements.privecyPolicy())
    //cy.xpath('//*[@href="/privacy-policy"]',{ timeout: 10000 }).scrollIntoView()

})
And('User click on "Privacy Policy"', () => {
    commonPage.clickElementWithoutAttr(createAccountPage.elements.privecyPolicy())
    //cy.xpath('//*[@href="/privacy-policy"]').invoke('removeAttr', 'target').click()
})
Then('User should be redirected on: {string} page TC13', (url) => {
    commonPage.checkUrl(url)
    //cy.url().should('eq', url)
})
//TC14
When('User fill in form:', (datatable) => {
    commonPage.typeElemen(createAccountPage.elements.inputEmailfield(), commonPage.createRandomEmail())
    //cy.xpath('//*[@id="email"]').clear().type(createRandomEmail())
    datatable.hashes().forEach((element) => {
        commonPage.typeElemen(createAccountPage.elements.inputFullNamefield(),element.Full_name)
        commonPage.typeElemen(createAccountPage.elements.inputPasswordfield(),element.Password)
         
        //cy.xpath('//*[@id="full_name"]').type(element.Full_name)
        //cy.xpath('//*[@id="password"]').type(element.Password)
        })
})
And('User check  "I agree to the Terms and Conditions and Telnyxs Privacy Policy"', () => {
     commonPage.checkingElement(createAccountPage.elements.radioBtnPrivecyPolicy())   
    //cy.xpath('//*[@id="terms_and_conditions"]').check({force:true})
})
And('User check  "I want to receive emails from Telnyx"', () => {
    commonPage.checkingElement(createAccountPage.elements.radioBtnTermsAndConditions()) 
    //cy.xpath('//*[@id="subscription_opt_in"]').check({force:true})
})
And('User click on "Create Account" button', () => {
    commonPage.clickElement(createAccountPage.elements.btnCreateAccount())
    //cy.xpath('//*[@type="submit"]').click()
    
})

Then('User shoul be redirected on page with notification', (dataTable) => {
    dataTable.hashes().forEach((element) => {
        cy.wait(10000)
        commonPage.checkUrl(element.url)
        commonPage.checkElementText(createAccountPage.elements.lableNotification(), element.notifiction)
        //cy.url().should('eq', element.url, { timeout: 20000 })
        //cy.xpath('//*[@class="Text-sc-5o8owa-0 sc-81d2e95d-1 gkWopw etvJmf"]').should('have.text', element.notifiction)
      
        })
})
//TC15
When('User Scroll to "Login"', () => {
    commonPage.scrollToElement(createAccountPage.elements.btnLogin())
    //cy.xpath('//*[@href="https://portal.telnyx.com/#"]').scrollIntoView()
});
And('User Click on "Login"', () =>{
    commonPage.clickElement(createAccountPage.elements.btnLogin())
    //cy.xpath('//*[@href="https://portal.telnyx.com/#"]').click()

})
Then('User should be redirected on: {string} page TC15', (url) =>{
    commonPage.checkUrl(url)
    //cy.url().should('eq', url)
})
And('User On new page click on "Singl Sign-On"',()=>{
    commonPage.clickElement(LoginPage.elements.btnSingleSignOn())
    //cy.xpath('//*[@data-testid="login.signin.tab.sso"]').click()
})
And('User Fill in email: {string}',(email)=>{
    commonPage.typeElemen(LoginPage.elements.emailInput(),email)
    //cy.xpath('(//form//input[@name="email"])[2]').type(email)
})
And ('User Click on "Continue" button',()=>{
    commonPage.clickElement(LoginPage.elements.btnContinue())
    //cy.xpath('//button[text()="Continue"]').click()
})
Then('User shoul be notificated with: {string}',(text)=>{
    commonPage.checkElementText(LoginPage.elements.lableNotification(),text )
    //cy.xpath('//*[@class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]').should('have.text', text)
})