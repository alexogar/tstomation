import { Automation } from "../../../src/automation";
import { GooglePage } from "../../fixture/GooglePage";
import * as chai from "chai";
import { open } from "../../../src/helpers";
import "jasmine";
import * as sinon from "sinon";

const expect = chai.expect;
let sandbox: Sinon.SinonSandbox;
beforeEach( () => {
    sandbox = sinon.sandbox.create();
});

afterEach(() => {
    sandbox.restore();
});

describe("Behaviors: click", () => {
  it("should be able to click", () => {
    let mock = sandbox.mock(Automation.behaviorFactory);
    let wrapperFactory = sandbox.mock(Automation.wrapperFactory);
    let clickCalled = false;
    wrapperFactory.expects("wrapperForElement").once().returns({
      click() { clickCalled = true; },
    });
    mock.expects("open").once().withArgs("/");
    mock.expects("clickBehavior").once();
    let page = new GooglePage();

    open(page);

    page.button.click();
    expect(clickCalled).to.be.true;
  });

  it("should be able to click without mock", () => {
    let mock = sandbox.mock(Automation.behaviorFactory);
    mock.expects("open").once().withArgs("/");

    let page = new GooglePage();

    open(page);

    page.button.click();
  });

});
