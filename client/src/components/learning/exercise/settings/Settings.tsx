import * as React from "react";
import Switch from "@material-ui/core/Switch/Switch";
import {codeMastersUITheme} from "../../../App.theme";
import {darkColorTheme, lightColorTheme} from "../../../common/AppColors";
import {applicationSettings} from "../../../common/ApplicationSettings";
import Logger from "../../../common/service/Logger";

export default class Settings extends React.Component<any, any> {
    private logger = new Logger(Settings);

    constructor(props?: any) {
        super(props);

        this.state = {
            useDarkTheme: applicationSettings.useDarkTheme()
        };
    }

    public render() {
        return (
            <div style={{padding: "20px", backgroundColor: codeMastersUITheme.background}}>
                <Switch checked={this.state.useDarkTheme}
                        onChange={this.handleChange("useDarkTheme")}
                        value="dark"/>
                dark theme
            </div>
        );
    }

    private handleChange = (name: any) => (event: any) => {
        this.logger.log(`Using dark theme: ${event.target.checked}`);
        this.setState({[name]: event.target.checked});

        applicationSettings.setUseDarkTheme(event.target.checked);

        const colorTheme = event.target.checked ? darkColorTheme : lightColorTheme;
        codeMastersUITheme.background = colorTheme.background;
        codeMastersUITheme.font = colorTheme.font;
    };

}