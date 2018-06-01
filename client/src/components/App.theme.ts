import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {darkColorTheme, lightColorTheme, primary, secondary} from "./common/AppColors";
import {ApplicationSettings} from "./common/ApplicationSettings";

const selectedTheme = ApplicationSettings.useDarkTheme() ? darkColorTheme : lightColorTheme;

export const codeMastersUITheme = {
    ...selectedTheme,
    primary,
    secondary,
    theme: createMuiTheme({
        palette: {
            primary: {
                main: primary,
            },
            secondary: {
                main: secondary,
            },
        },
    })
};
