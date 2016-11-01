import { PageWrapper } from "../wrappers";
import "reflect-metadata";

export function reflect(target: Object): ReflectWrapper {
    return new ReflectWrapper(target);
}

export function getClassNameOfConstructor(type: Function): string {
    let funcNameRegex = /function (.{1,})\(/;
    let results = (funcNameRegex).exec(type.toString());
    return (results && results.length > 1) ? results[1] : "";
}

export class ReflectWrapper {

    constructor(private target: Object) { }

    public isPageObject(): boolean {
        return Reflect.getMetadata("automation:page", this.target.constructor) != null;
    }

    public asPageObject(): PageWrapper {
        return new PageWrapper(Reflect.getMetadata("automation:page", this.target.constructor));
    }

    public hasAnnotations(): boolean {
        return false;
    }

    public getAnnotations() {

        let classProperties = this.reflectClassProperties();
        let classAnnotations: any[] = [];
        let propertyAnnotations: any[] = [];
        classProperties.constructors.forEach((constructor) => {
            Reflect.getMetadataKeys(constructor).forEach((metaKey: string) => {
                if (metaKey.indexOf("automation") !== -1) {
                    let metaData = Reflect.getMetadata(metaKey, constructor);
                    classAnnotations.push({
                        constructor,
                        metaKey,
                        metaData,
                    });
                }
            });
        });

        classProperties.properties.forEach((propertyKey) => {
            Reflect.getMetadataKeys(classProperties.source.prototype, propertyKey).forEach((metaKey: string) => {
                if (metaKey.indexOf("automation") !== -1) {
                    let metaData = Reflect.getMetadata(metaKey, classProperties.source.prototype, propertyKey);
                    propertyAnnotations.push({
                        propertyKey,
                        metaKey,
                        metaData,
                    });
                }
            });
        });

        return {
            classAnnotations,
            propertyAnnotations,
        };
    }

    public getDecorators() {
        return Reflect.getMetadataKeys(this.target.constructor);
    }

    public getMetadataKeys(): any {
        return Reflect.getMetadataKeys(this.target.constructor);
    }

    public getClassName(): string {
        return getClassNameOfConstructor(this.target.constructor);
    }

    public reflectClassProperties() {
        const properties: Array<string> = [];
        const constructors: Array<Function> = [];
        let source = this.target.constructor;
        let current = this.target.constructor;

        while (current && current.prototype && current !== Function.prototype) {
            Object.getOwnPropertyNames(current.prototype)
                .reduce(this.uniqueNotConstructor, properties);
            constructors.push(current);
            current = Object.getPrototypeOf(current);
        }

        return {
            source,
            properties,
            constructors,
        };
    }

    private uniqueNotConstructor(names: Array<string>, name: string) {
        if (names.indexOf(name) || name !== "constructor") {
            names.push(name);
        }
        return names;
    }
}
