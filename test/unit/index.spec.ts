import * as typomation from "../../src";
import {Automation} from "../../src/automation";
import { TestBehaviorFactory, TestElementFactory} from "../fixture/factory";

// import * as chai from "chai";
import "jasmine";

// const expect = chai.expect;

beforeAll( () => {
  Automation.behaviorFactory = new TestBehaviorFactory();
  Automation.elementFactory = new TestElementFactory();
  Automation.wrapperFactory = new typomation.DefaultWrapperFactory();
});

describe("Init/Setup", () => {
  it("should use allow auto setup with protractor", () => {
    // typomation.open(new GooglePage());
    // should open browser page with https://google.com

    // const greeter = new Greeter("friend");
    // expect(greeter.greet()).to.equal("Bonjour, friend!");
  });
});
