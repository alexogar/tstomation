import {Automation} from "../automation";
import {Framework, ISetupConfig} from "../config";
import {ProtractorBehaviorFactory, ProtractorElementFactory} from "../elements/protractor";
import {DefaultWrapperFactory} from "../wrappers";

export function setup(config: ISetupConfig = {
    framework: Framework.PROTRACTOR
}) {
    Automation.wrapperFactory = new DefaultWrapperFactory();

    // Here we`ll set in global scope a property which factory use
    switch (config.framework) {
        case Framework.PROTRACTOR:
        default:
            Automation.elementFactory = new ProtractorElementFactory(config);
            Automation.behaviorFactory = new ProtractorBehaviorFactory(config);
            break;
    }

}
