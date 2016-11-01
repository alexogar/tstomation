import {reflect} from "../../../src/util/reflect";
import { PageWrapper } from "../../../src/wrappers";
import { GooglePage } from "../../fixture/GooglePage";
import * as chai from "chai";
import "jasmine";

const expect = chai.expect;

describe("Utils: reflect", () => {
  it("isPageObject should return true for @Page annotation", () => {
      expect(reflect(new GooglePage()).isPageObject()).to.be.true;
  });

  it("asPageObject should return PageWrapper", () => {
      let actual: PageWrapper = reflect(new GooglePage()).asPageObject();
      expect(actual).to.be.not.null;
      expect(actual).to.be.not.a("Array");
      expect(actual.data.url).to.be.not.null;
  });

  it("should check if object is decorated", () => {
      // expect(reflect(new GooglePage()).hasAnnotations()).to.be.true;
  });
});
