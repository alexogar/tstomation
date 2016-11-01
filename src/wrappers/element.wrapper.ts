import {Automation} from "../";
import {IButton, IElement} from "../elements";

export class ElementWrapperDelegate implements IElement<any> {
    constructor(private element: IElement<any>) {
    }

    public get isDisplayed(): webdriver.promise.Promise<boolean> {
        return this.element.isDisplayed;
    }

    public get nativeElement(): any {
        return this.element.nativeElement;
    }
}

export class ButtonWrapper extends ElementWrapperDelegate implements IButton {
    public click(): webdriver.promise.Promise<void> {
        return Automation.behaviorFactory.clickBehavior(this).click();
    }
}
