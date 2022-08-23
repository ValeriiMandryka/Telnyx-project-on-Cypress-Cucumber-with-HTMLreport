const url = 'https://telnyx.com/'
class MainPage {
    
    //Save+Telnyx Form
    elements={
        sendMassages: () => '//*[contains(text(),"Send messages" )]//following::div[6]',
        moduleSaveTelnyx: () => '//*[@class="sc-1e626587-1 fjgfOb"]',
        btnVoice() {return '//button[text()="Voice"]'}, 
        btnSms() {return '//button[text()="SMS"]'},
        sliderOutboundCalls_Send_messages() {return '(//main//div[@class="ant-slider-handle"])[1]'},
        sliderInboundCalls_Receivemessages() {return '(//main//div[@class="ant-slider-handle"])[2]'},
        sliderOutboundCalls_ReceivemessagesLeft() {return ':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle'},
        sliderInboundCalls_ReceivemessagesLeft() {return ':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle'},
        radioBtnNo() {return '//*[@id="no"]'},
        radioBtnYes() {return '//*[@id="yes"]'},
        radioBtnTollFreeNumbers() {return '//*[@id="toll-free-numbers"]'},
        radioBtnLocalNumbers() {return '//*[@id="local-numbers"]'},
        TelnyxCost() {return '//*[@class="sc-1a5981e5-12 gVMLpl"]'},
        TwilloCost() {return '//*[@class="sc-1a5981e5-13 geBsjY"]'},
        valueCompareCosts() {return '//*[contains(text(),"Compare Costs")]/following::div[6]'},
        btnCreateFreeAccount () {return '(//*[@href="https://telnyx.com/sign-up"] )[2]'},

        
    }
openMainPage() {cy.visit(url)}

}
module.exports = new MainPage