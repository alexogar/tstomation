export enum Framework {
    NOOP, PROTRACTOR
}

export interface ISetupConfig {
    framework: Framework;
    baseUrl?: string;
}
