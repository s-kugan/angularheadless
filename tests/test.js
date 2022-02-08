describe("Delta Modal", function () {
  this.tags = ["deltamodal"];

  this.retries(1);

  beforeEach(async (browser) => {
    this.delta = await browser.page.deltaLandingPO();
  });

  it("Verify chrome in headless for angular application", async (browser) => {
    await this.delta.launchDelta();

    this.delta.expect
      .element("@btnLangEng")
      .text.to.contain("CANADA - ENGLISH");
  });

  afterEach(async function (browser) {
    await browser.end();
  });
});
