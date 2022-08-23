class LoginPage {
    elements={
        btnSingleSignOn: () => '//*[@data-testid="login.signin.tab.sso"]',
        emailInput: () => '(//form//input[@name="email"])[2]',
        btnContinue: () => '//button[text()="Continue"]',
        lableNotification: () => '//*[@class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]', 

}
}
module.exports = new LoginPage