import {Automation} from "../../../src/automation";
import {Framework} from "../../../src/config";
import {setup} from "../../../src/helpers";
import {reflect} from "../../../src/util/reflect";
import * as chai from "chai";
import "jasmine";
// import * as sinon from "sinon";

const expect = chai.expect;

describe("Helpers: setup", () => {
  it("should be protractor for null or empty", () => {
      setup();
      expect(reflect(Automation.behaviorFactory).getClassName()).to.be.eq("ProtractorBehaviorFactory");
      setup({ framework: Framework.PROTRACTOR });
      expect(reflect(Automation.behaviorFactory).getClassName()).to.be.eq("ProtractorBehaviorFactory");
  });

});
