import { Element, Button, IClickable, ITextConsumer, Page } from "../../src";

export class InputText implements ITextConsumer {
    public input(text: string) { return; }
}

@Page()
export class ButtonBlock implements IClickable {
    public click(): webdriver.promise.Promise<void> {
        return null;
    }
}

class FormData {
    public name: string;
}

@Page({ url: "/" })
export class GooglePage {
    @Element({ selector: "input" })
    public name: InputText;

    @Element({ selector: "input" })
    public button: Button;

    // @PageBlock(selector="block")
    // private block: ButtonBlock;

    // @NavigationAction()
    public search(): SearchResultsPage {
        this.button.click();
        return new SearchResultsPage();
    }

    public inputSearchQuery(query: string) {
        return;
    }
}

@Page()
export class SearchResultsPage {
    // @Validate()
    public validate(): boolean {
        // check that we are on page
        return false;
    }
}
