export interface IClickable {
    click(): webdriver.promise.Promise<void>;
}

export interface ITextConsumer {
    input(text: string): void;
}

export interface IPageBehavior {
    readonly title: webdriver.promise.Promise<string>;
}
