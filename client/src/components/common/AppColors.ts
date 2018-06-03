import {blue, grey} from "@material-ui/core/colors";

export const darkBackground = "#1e1e1e";
export const lightBackground = "white";
export const primary = blue[500];
export const secondary = grey[100];

export interface IColorTheme {
    font: string,
    background: string,
    editorTheme: string,
    themeId: "dark" | "light",
}

export const lightColorTheme: IColorTheme = {
    font: darkBackground,
    background: lightBackground,
    editorTheme: "vs-light",
    themeId: "light"
};

export const darkColorTheme: IColorTheme = {
    font: "#d4d4d4",
    background: darkBackground,
    editorTheme: "vs-dark",
    themeId: "dark"
};
