import "reflect-metadata";

/**
 * Page configuration object
 * 
 * @export
 * @class IPageDecoratorData
 */
export class IPageDecoratorData {
    /**
     * Url relative to baseUrl configured, used for navigation
     * 
     * @type {string}
     * @memberOf IPageDecoratorData
     */
    public url?: string;
}

/**
 * Page decorator to be used on classes representing PageObjects
 * 
 * @export
 * @param {IPageDecoratorData} [data]
 * @returns {ClassDecorator}
 */
export function Page(data?: IPageDecoratorData): ClassDecorator {
    // Do something with constructor

    return (target: Function) => {
        Reflect.metadata("automation:page", data)(target);
    };
}