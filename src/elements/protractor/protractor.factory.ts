import {IClickable, IElement, IPageBehavior} from "../";
import {ISetupConfig} from "../../config";
import {IBehaviorFactory, IElementFactory} from "../factory";
import {browser, ElementFinder} from "protractor";

export class ProtractorElement implements IElement<ElementFinder> {
    constructor(private finder: ElementFinder) {}

    public get isDisplayed(): webdriver.promise.Promise<boolean> {
        return this.finder.isDisplayed();
    }

    public get nativeElement(): ElementFinder {
        return this.finder;
    }
}

export class ProtractorElementFactory implements IElementFactory<ElementFinder> {
    constructor(private config: ISetupConfig) {}

    public findByCss(cssSelector: string): IElement<ElementFinder> {
        return new ProtractorElement(browser.$(cssSelector));
    }
}

export class ProtractorBehaviorFactory implements IBehaviorFactory<ElementFinder> {
    constructor(private config: ISetupConfig) {
        if (config.baseUrl) {
            browser.baseUrl = config.baseUrl;
        }
    }

    public open(url: string): void {
        browser.get(url);
    };

    public pageBehavior(): IPageBehavior {
        return {
            get title(): webdriver.promise.Promise<string> {
                return browser.getTitle();
            },
        };
    };

    public clickBehavior(element: IElement<ElementFinder>): IClickable {
        return {
            click(): webdriver.promise.Promise<void> {
                return element.nativeElement.click();
            },
        };
    }
}
