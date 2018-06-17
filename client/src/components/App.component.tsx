import * as React from "react";
import "./App.css";
import { AppRouting } from "./App.routing";
import { BrowserRouter } from "react-router-dom";
import TopMenu from "./common/top-menu/TopMenu.component";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { codeMastersUITheme } from "./App.theme";

export default class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={codeMastersUITheme.theme}>
                    <TopMenu />
                    <AppRouting />
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}