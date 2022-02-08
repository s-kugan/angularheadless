module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    btnLangEng: {
      selector: "//button[contains(text(),'Canada - English')]",
      locateStrategy: "xpath",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    iconBellNotification: {
      selector: '.hp-notification-container  a[aria-haspopup="true"]',
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
  },
  commands: [
    {
      async launchDelta() {
        await this.navigate();
      },
      async selectlang() {
        await this.waitForElementVisible("@btnLangEng", 25000);
        await this.click("@btnLangEng");
      },
    },
  ],
};
