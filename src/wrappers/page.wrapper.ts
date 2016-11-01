import { IPageDecoratorData } from "../decorators";

export class PageWrapper {
    constructor(private _data: IPageDecoratorData) { }

    public get data(): IPageDecoratorData {
        return this._data;
    }
}
