import {IClickable} from "./behaviors";
import * as webdriver from "selenium-webdriver";

export interface IElement<N> {
    readonly isDisplayed: webdriver.promise.Promise<boolean>;
    readonly nativeElement: N;
}

export interface IButton extends IClickable, IElement<any> {}

export abstract class BaseElement<T> {
    public abstract get isDisplayed(): webdriver.promise.Promise<boolean>;
    public abstract get nativeElement(): T;
}

export abstract class Button extends BaseElement<any> implements IButton {
    public abstract click(): webdriver.promise.Promise<void>;
}
