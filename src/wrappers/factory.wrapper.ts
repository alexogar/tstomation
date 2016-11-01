import { IElement } from "../elements/elements";
import { ElementWrapperDelegate, ButtonWrapper } from "./element.wrapper";

export interface IWrapperFactory {
    wrapperForElement(type: string, element: IElement<any>): ElementWrapperDelegate;
}

export class DefaultWrapperFactory implements IWrapperFactory {
    public wrapperForElement(type: string, element: IElement<any>): ElementWrapperDelegate {
        if (type === "Button") {
            return new ButtonWrapper(element);
        }
        return null;
    }
}
