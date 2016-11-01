import {Framework} from "../../src/config";
import {open, setup} from "../../src/helpers";
import { MainPage, MainPageWithBase, ProtractorDemo } from "../fixture/AngularIO";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

import "jasmine";
import {browser, by} from "protractor";

const expect = chai.expect;

beforeAll( () => {
    setup({framework: Framework.PROTRACTOR});
});

describe("Protractor:", () => {
  it("should throw for object without annotations", () => {
      expect(() => { open({}); }).to.throw(/does't have @Page annotation/);
  });

  it("should execute factory open for pageobject", () => {
      open(new MainPage());
      expect(browser.getCurrentUrl()).to.eventually.be.eq("https://angular.io/");
  });

  it("should full open for page with baseUrl", () => {
      setup({baseUrl: "http://juliemr.github.io/protractor-demo/", framework: Framework.PROTRACTOR });
      open(new ProtractorDemo());
      expect(browser.getCurrentUrl()).to.eventually.be.eq("http://juliemr.github.io/protractor-demo/");
      setup({baseUrl: "https://angular.io/", framework: Framework.PROTRACTOR });
  });

  it("should return basic page properties with basePage", () => {
      let mainPage = new MainPageWithBase();
      open(new MainPageWithBase());
      expect(mainPage.title).to.eventually.be.eq("One framework. - Angular");
  });

  it("should find button by selector", () => {
      let mainPage = new MainPage();
      open(mainPage);
      expect(mainPage.siteMenu.isDisplayed).to.eventually.be.false;
  });

  it("should be able to click button", () => {
      let mainPage = new MainPage();
      open(mainPage);

      mainPage.openSiteMenu();
      expect(browser.element(by.css(".main-nav ul")).isDisplayed()).to.eventually.fulfilled.with.true;
  });

});
