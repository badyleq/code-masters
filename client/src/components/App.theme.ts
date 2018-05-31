import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue, grey} from "@material-ui/core/colors";

const colors = {
    primary: blue[500],
    secondary: grey[100],
    dark: '#333333',
    light: '#f3f3f3'
};

export const codeMastersUITheme = {
    ...colors,
    theme: createMuiTheme({
        palette: {
            primary: {
                main: colors.primary
            },
            secondary: {
                main: colors.secondary
            },
        },
    })
};
