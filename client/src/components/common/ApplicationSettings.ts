import Logger from "./service/Logger";

enum STORAGE_KEY {
    USE_DARK_THEME = "useDarkTheme"
}

class ApplicationSettings {
    private logger = new Logger(ApplicationSettings);
    private settingsStorage = localStorage;

    constructor() {
        this.logger.log("creating ApplicationSettings")
    }

    public useDarkTheme(): boolean {
        return this.settingsStorage.getItem(STORAGE_KEY.USE_DARK_THEME) === "true"
    }

    public setUseDarkTheme(useDarkTheme: boolean) {
        return this.settingsStorage.setItem(STORAGE_KEY.USE_DARK_THEME, useDarkTheme + "");
    }
}

export const applicationSettings = new ApplicationSettings();