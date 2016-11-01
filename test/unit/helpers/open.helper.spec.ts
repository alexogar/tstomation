import {Automation} from "../../../src/automation";
import {open} from "../../../src/helpers";
import { GooglePage } from "../../fixture/GooglePage";
import * as chai from "chai";
import "jasmine";
import * as sinon from "sinon";
import * as chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

const expect = chai.expect;
let sandbox: Sinon.SinonSandbox;
beforeEach( () => {
    sandbox = sinon.sandbox.create();
});

afterEach(() => {
    sandbox.restore();
});

describe("Helpers: open", () => {
  it("should throw for object without annotations", () => {
      expect(() => { open({}); }).to.throw(/does't have @Page annotation/);
  });

  it("should execute factory open for pageobject", () => {
      let mock = sandbox.mock(Automation.behaviorFactory);
      mock.expects("open").once().withArgs("/");
      open(new GooglePage());
  });
});
