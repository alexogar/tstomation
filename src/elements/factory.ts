import { IElement } from "./elements";
import { IClickable, IPageBehavior } from "./behaviors";

export interface IElementFactory<N> {
    findByCss(cssSelector: string): IElement<N>;
}

export interface IBehaviorFactory<N> {
    pageBehavior(): IPageBehavior;
    open(url: string): void;
    clickBehavior(element: IElement<N>): IClickable;
}
