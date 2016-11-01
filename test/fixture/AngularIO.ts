import { Element, Button, Page, BasePage } from "../../src";

@Page({ url: "/" })
export class MainPage {
    @Element({ selector: "body nav button" })
    public siteMenu: Button;

    public openSiteMenu() {
        this.siteMenu.click();
    }
}

@Page({ url: "/protractor-demo/" })
export class ProtractorDemo { }

@Page({ url: "/" })
export class MainPageWithBase extends BasePage { }
