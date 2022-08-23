class CreateAccountPage {
    elements={
        termsAndConditions: () => '//*[@href="/terms-and-conditions-of-service"]',
        privecyPolicy: () => '//*[@href="/privacy-policy"]',
        inputEmailfield: () => '//*[@id="email"]',
        inputFullNamefield: () => '//*[@id="full_name"]',
        inputPasswordfield: () => '//*[@id="password"]',
        radioBtnTermsAndConditions: () => '//*[@id="terms_and_conditions"]',
        radioBtnPrivecyPolicy: () => '//*[@id="subscription_opt_in"]',
        btnCreateAccount: () => '//*[@type="submit"]',
        lableNotification: () => '//*[@class="Text-sc-5o8owa-0 sc-81d2e95d-1 gkWopw etvJmf"]',
        btnLogin: () => '//*[@href="https://portal.telnyx.com/#"]',

}
}
module.exports = new CreateAccountPage