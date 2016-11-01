import {Automation} from "../";

export interface IPage {
    readonly title: webdriver.promise.Promise<string>;
}

export class BasePage implements IPage {
    get title(): webdriver.promise.Promise<string> {
        return Automation.behaviorFactory.pageBehavior().title;
    }
}
