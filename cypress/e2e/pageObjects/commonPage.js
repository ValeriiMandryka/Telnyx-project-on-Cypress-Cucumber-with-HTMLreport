class CommonPage {
   createRandomEmail() {return "Username" + Math.floor(Math.random() * 1000000 ) + "@gmail.com" }

    acceptCookies() {
        cy.get('body').then(($body) => {
        if ($body.find('[aria-label="close and deny"]').length > 0) {
          cy.get('[aria-label="close and deny"]').click();
        }
      })
    }

    checkingElement(element) {cy.xpath(element).check({force:true})}
    shouldBeVisible(element) {cy.xpath(element).should('be.visible')}
    scrollToElement(element) {cy.xpath(element).scrollIntoView()}
    checkElementText(element,text) {cy.xpath(element).should('have.text',text) }
    checkUrl(url) {cy.url().should('eq', url)}
    checkVlueAttribut(element,text) {cy.xpath(element).invoke('attr', 'aria-valuenow').should('contain', text)}
    shouldHaveClass(element,text) {cy.xpath(element).should('have.class', text)}
    shouldBeChecked(element) {return cy.xpath(element).should('be.checked')}
    clickElement(element) {return cy.xpath(element).click()}
    clickElementWithoutAttr(element) {return cy.xpath(element).invoke('removeAttr', 'target').click()}
    typeElemen(element, text) {return cy.xpath(element).type(text)}
    shoulContain(element,text) {return cy.xpath(element).should('contain', text)}
    setSliderValue(element,value) {return cy.xpath(element).invoke('attr','style', `left: ${value}%`).click()}
    setSliderValueCSS(element,value) {return cy.get(element).invoke('attr','style', `left: ${value}%`).click()}
}
module.exports = new CommonPage