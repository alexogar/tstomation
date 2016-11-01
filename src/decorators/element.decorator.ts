import { Automation } from "../";
import { getClassNameOfConstructor } from "../util/reflect";
import "reflect-metadata";

export interface IElementSelector {
    /**
     * CSS selector for finding element
     * 
     * @type {string}
     * @memberOf IElementDecoratorParameters
     */
    selector: string;
}

/**
 * Element decorator to setup elements selectors
 * 
 * @export
 * @param {IElementDecoratorParameters} value
 * @returns {PropertyDecorator}
 */
export function Element(data: IElementSelector): PropertyDecorator {
    // Do something with constructor
    return (target: Object, propertyKey: string | symbol) => {
        Reflect.metadata("automation:element", data)(target, propertyKey);
        let typeReference: Function = Reflect.getMetadata("design:type", target, propertyKey);
        let typeName: string = getClassNameOfConstructor(typeReference);
        if (!target.hasOwnProperty(propertyKey.toString())) {
            // no property need to define it
            Object.defineProperty(target.constructor.prototype, propertyKey.toString(), {
                get: () => {
                    let element = Automation.elementFactory.findByCss(data.selector);
                    let wrapper = Automation.wrapperFactory.wrapperForElement(typeName, element);

                    return wrapper;
                },
            });
        }
    };
}
