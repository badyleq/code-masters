enum STORAGE_KEY {
    USE_DARK_THEME = "useDarkTheme"
}

export class ApplicationSettings {

    public static useDarkTheme(): boolean {
        return sessionStorage.getItem(STORAGE_KEY.USE_DARK_THEME) === "true"
    }

    public static setUseDarkTheme(useDarkTheme: boolean) {
        return sessionStorage.setItem(STORAGE_KEY.USE_DARK_THEME, useDarkTheme + "");
    }

}