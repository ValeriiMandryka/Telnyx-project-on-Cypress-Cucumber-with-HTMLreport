const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor');
const commonPage = require('../pageObjects/commonPage');
const coomonPage = require('../pageObjects/commonPage');
const { elements } = require('../pageObjects/mainPage');
const mainPage = require('../pageObjects/mainPage');

//TC1
Given('User opens main page', () => {
    mainPage.openMainPage()
    //cy.visit('https://telnyx.com/');
})
When('User accept cookies', () => {
    coomonPage.acceptCookies()
   
    //cy.get('body').then(($body) => {
    //    if ($body.find('[aria-label="close and deny"]').length > 0) {
    //      cy.get('[aria-label="close and deny"]').click();
    //    }
    //  });
});
And('User scroll down to "Switch+save Telnyx" module', () =>{
    coomonPage.scrollToElement(mainPage.elements.moduleSaveTelnyx())
    //cy.xpath('//*[@class="sc-1e626587-1 fjgfOb"]').scrollIntoView()

})

Then('User verify that module is present on the page', () => {
    commonPage.shouldBeVisible(mainPage.elements.moduleSaveTelnyx())
    //cy.xpath('//*[@class="sc-1e626587-1 fjgfOb"]').should('be.visible')
})

And('Check data inside module', (datatable) =>{
    
    //cy.xpath('//button[text()="Voice"]').should('have.class', 'Button__StyledDefaultButton-vntg8h-0 bHtbuT')
    datatable.hashes().forEach((value) => {
    commonPage.shouldHaveClass(mainPage.elements.btnVoice(), value.class )
    commonPage.checkVlueAttribut(mainPage.elements.sliderOutboundCalls_Send_messages(), value.outbound_calls)
    commonPage.checkVlueAttribut(mainPage.elements.sliderInboundCalls_Receivemessages(), value.inbound_calls)
    })
    commonPage.shouldBeChecked(mainPage.elements.radioBtnYes())
}) 
    //cy.xpath('(//main//div[@class="ant-slider-handle"])[1]').invoke('attr', 'aria-valuenow').should('contain', element.outbound_calls)
    //cy.xpath('(//main//div[@class="ant-slider-handle"])[2]').invoke('attr', 'aria-valuenow').should('contain', element.inbound_calls)
    
    
    //cy.xpath('//*[@id="yes"]').should('be.checked')

//TC2 
When('User click on "SMS" button', () =>{
    commonPage.clickElement(mainPage.elements.btnSms())
    //cy.xpath('//button[text()="SMS"]').click()
})
Then('Check data inside module when "SMS" option is choosen', (datatable) =>{
    datatable.hashes().forEach((value) => {
    commonPage.checkVlueAttribut(mainPage.elements.sliderInboundCalls_Receivemessages(), value.receive_messages)
    commonPage.checkVlueAttribut(mainPage.elements.sliderOutboundCalls_Send_messages(), value.send_messages)
    //cy.xpath('(//main//div[@class="ant-slider-handle"])[1]').invoke('attr', 'aria-valuenow').should('contain', element.send_messages)
    //cy.xpath('(//main//div[@class="ant-slider-handle"])[2]').invoke('attr', 'aria-valuenow').should('contain', element.receive_messages)
    })
})  
//TC3
When('User Click on "Toll-free numbers" radio button',() =>{
    commonPage.clickElement(mainPage.elements.radioBtnTollFreeNumbers())
    //cy.xpath('//*[@id="toll-free-numbers"]').click()
})
Then('Check Compare Costs data of "Toll-free numbers" radio button', (datatable) =>{
  datatable.hashes().forEach((value) => {
    commonPage.shoulContain(mainPage.elements.TelnyxCost(),value.Telnyx)
    commonPage.shoulContain(mainPage.elements.TwilloCost(),value.Twilio)
    //cy.xpath('//*[@class="sc-1a5981e5-12 gVMLpl"]').should('contain', element.Telnyx)
    //cy.xpath('//*[@class="sc-1a5981e5-13 geBsjY"]').should('contain', element.Twilio)
    })
})
//TC4
When('User Click on "Local numbers" radio button',() =>{
    commonPage.clickElement(mainPage.elements.radioBtnLocalNumbers())
      //cy.xpath('//*[@id="local-numbers"]').click()
})
Then('Check Compare Costs data of "Local numbers" radio button', (datatable) =>{
    datatable.hashes().forEach((value) => {
    commonPage.shoulContain(mainPage.elements.TelnyxCost(), value.Telnyx)
    commonPage.shoulContain(mainPage.elements.TwilloCost(), value.Twilio)
    //cy.xpath('//*[@class="sc-1a5981e5-12 gVMLpl"]').should('contain', element.Telnyx)
    //cy.xpath('//*[@class="sc-1a5981e5-13 geBsjY"]').should('contain', element.Twilio)
    })    
})
//TC5
When('User set Make outbound calls slider on min position',() =>{
    commonPage.setSliderValue(mainPage.elements.sliderOutboundCalls_Send_messages(), 0)
    //cy.xpath('(//*[@class="ant-slider-handle"])[1]').invoke('attr','style', 'left: 0%').click()
})
Then('Check comparing costs after setting slider in min position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(),text )
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
When('User set Make outbound calls slider on max position',() =>{
    commonPage.setSliderValueCSS(mainPage.elements.sliderOutboundCalls_ReceivemessagesLeft(), 100)
    //cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle').invoke('attr','style', 'left: 100%').click()
 })  
Then('Check comparing costs after setting slider in max position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(), text)
   //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
//TC6
When('User Set Receive inbound calls slide on min position',() =>{
    coomonPage.setSliderValue(mainPage.elements.sliderInboundCalls_Receivemessages(), 0)
    //cy.xpath('//*[contains(text(),"inbound calls")]/following::div[6]').invoke('attr','style', 'left: 0%').click()
})
Then('Check comparing costs after setting Inbound calls slider in min position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(), text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
When('User set Receive inbound calls slider on max position',() =>{
    commonPage.setSliderValueCSS(mainPage.elements.sliderInboundCalls_ReceivemessagesLeft(), 100)
    //cy.get(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle').invoke('attr','style', 'left: 100%').click()
 })  
Then('Check comparing costs after setting Inbound calls slider in max position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(), text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
//TC7
When('User click on the "No" radio button',() =>{
    commonPage.checkingElement(mainPage.elements.radioBtnNo())
    //cy.xpath('//*[@id="no"]').check()
})
Then('Check comparing costs after checking No radio button: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(), text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
When('User click on the "Yes" radio button',() =>{
    commonPage.checkingElement(mainPage.elements.radioBtnYes())
    //cy.xpath('//*[@id="yes"]').check()
 })  
Then('Check comparing costs after checking Yes radio button: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(), text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
//TC8
When('User click on the "SMS" radio button TC8',() =>{
    commonPage.clickElement(mainPage.elements.btnSms())
    //cy.get('[class*=hANPHj]').click()
})
And('User click on the "Toll-free numbers" radio button',() =>{
    commonPage.checkingElement(mainPage.elements.radioBtnTollFreeNumbers())
    //cy.xpath('//*[@id="toll-free-numbers"]').check()
})
Then('Check comparing costs after checking Toll-free numbers radio button: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(), text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
When('User click on the "Local numbers" radio button',() =>{
    commonPage.checkingElement(mainPage.elements.radioBtnLocalNumbers())
    //cy.xpath('//*[@id="local-numbers"]').check()
 })  
Then('Check comparing costs after checking Local numbers radio button: {string}', (text) =>{
   commonPage.checkElementText(mainPage.elements.valueCompareCosts(), text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
//TC9
When('User click on the "SMS" radio button TC9',() =>{
    commonPage.clickElement(mainPage.elements.btnSms())
    //cy.get('[class*=hANPHj]').click()
})
And('User set "Send messages" slide on min position',() =>{
    commonPage.setSliderValue(mainPage.elements.sliderOutboundCalls_Send_messages(), 0)
    //cy.xpath('//*[contains(text(),"Send messages" )]//following::div[6]').invoke('attr','style', 'left: 0%').click()
})
Then('Check comparing costs after seting Send messages in min position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(),text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
When('User set "Send messages" slide on max position',() =>{
    commonPage.setSliderValue(mainPage.elements.sendMassages(), 100)
    //cy.xpath('//*[contains(text(),"Send messages" )]//following::div[6]').invoke('attr','style', 'left: 100%').click()
 })  
Then('Check comparing costs after seting Send messages in max position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(),text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
//TC10
When('User click on the "SMS" radio button TC10',() =>{
    commonPage.clickElement(mainPage.elements.btnSms())
    //cy.get('[class*=hANPHj]').click()
})
And('User Set "Receive messages" slide on min position',() =>{
    commonPage.setSliderValueCSS(mainPage.elements.sliderInboundCalls_ReceivemessagesLeft(), 0)
    //cy.xpath('//*[contains(text(),"Send messages" )]//following::div[16]').invoke('attr','style', 'left: 0%').click()
})
Then('Check comparing costs after seting Receive messages in min position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(),text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
When('User Set "Receive messages" slide on max position',() =>{
    commonPage.setSliderValueCSS(mainPage.elements.sliderInboundCalls_ReceivemessagesLeft(), 100)
    //cy.xpath('//*[contains(text(),"Send messages" )]//following::div[16]').invoke('attr','style', 'left: 100%').click()
 })  
Then('Check comparing costs after seting Receive messages in max position: {string}', (text) =>{
    commonPage.checkElementText(mainPage.elements.valueCompareCosts(),text)
    //cy.xpath('//*[contains(text(),"Compare Costs")]/following::div[6]').should('have.text',text) 
})
