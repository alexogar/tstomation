import {IBehaviorFactory, IElementFactory} from "./elements";
import {IWrapperFactory} from "./wrappers";

export class Automation {
    private static _elementFactory: IElementFactory<any>;
    private static _behaviorFactory: IBehaviorFactory<any>;
    private static _wrapperFactory: IWrapperFactory;

    public static get wrapperFactory() {
        return this._wrapperFactory;
    }

    public static set wrapperFactory(wrapperFactory: IWrapperFactory) {
        this._wrapperFactory = wrapperFactory;
    }

    public static get elementFactory() {
        return this._elementFactory;
    }

    public static set elementFactory(elementFactory: IElementFactory<any>) {
        this._elementFactory = elementFactory;
    }

    public static get behaviorFactory() {
        return this._behaviorFactory;
    }

    public static set behaviorFactory(behaviorFactory: IBehaviorFactory<any>) {
        this._behaviorFactory = behaviorFactory;
    }

}
