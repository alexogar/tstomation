import {
    IBehaviorFactory,
    IElementFactory,
    IPageBehavior,
    ElementWrapperDelegate,
    IElement,
    IClickable,
} from "../../src";
import * as webdriver from "selenium-webdriver";

export class TestElementFactory implements IElementFactory<any> {
    public findByCss(cssSelector: string): IElement<any> {
        return new ElementWrapperDelegate({
            get isDisplayed(): webdriver.promise.Promise<boolean> {
                return webdriver.promise.fullyResolved(true);
            },
            get nativeElement(): any {
                return {};
            },
        });
    }
}

export class TestBehaviorFactory implements IBehaviorFactory<any> {
    public open(url: string): void { return; };
    public pageBehavior(): IPageBehavior { return null; };
    public clickBehavior(element: IElement<any>): IClickable {
        return {
            click(): webdriver.promise.Promise<void> {
                let p = webdriver.promise.defer<void>();
                let voidValue = (() => { return; })();
                p.fulfill(voidValue);
                return p;
            },
        };
    }
}
