import { Automation } from "../automation";
import { reflect } from "../util/reflect";

export function open(target: Object) {
    // Need to check target
    if (reflect(target).isPageObject()) {
        let page = reflect(target).asPageObject();
        Automation.behaviorFactory.open(page.data.url);
    } else {
        throw new Error(`${reflect(target).getClassName()} does't have @Page annotation`);
    }
}
