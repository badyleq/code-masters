import * as React from "react";
import {RefObject} from "react";
import {green} from "@material-ui/core/colors";
import {Color} from "@material-ui/core";
import ExecutionResultModal from "./ExecutionResultModal.component";
import Fade from "@material-ui/core/Fade";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Grid from "@material-ui/core/Grid/Grid";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography/Typography";
import {ColorWeight, ExecutionStatus} from "./ExecutionResult";
import {codeMastersUITheme} from "../../../App.theme";
import Switch from "@material-ui/core/Switch/Switch";
import {darkColorTheme, lightColorTheme} from "../../../common/AppColors";
import {ApplicationSettings} from "../../../common/ApplicationSettings";

export default class ExerciseBottomPanel extends React.Component<any, any> {
    public executionResultModalRef: RefObject<ExecutionResultModal>;
    public color: Color = green;
    public state = {
        showResult: false,
        selectedTab: 0,
        userDarkTheme: ApplicationSettings.useDarkTheme()
    };

    constructor(props: any) {
        super(props);
        this.executionResultModalRef = React.createRef();
    }

    public handleOpen = () => {
        if (this.executionResultModalRef.current) {
            this.executionResultModalRef.current.handleOpen();
        }
    };

    public handleShowResult = () => {
        this.setState({showResult: true});
    };

    public handleHideResult = () => {
        this.setState({showResult: false});
    };

    public noop() {
        alert();
    }

    public render() {
        return (
            <Fade in={this.state.showResult}>
                <div>
                    <AppBar position="static">
                        <Grid container={true} style={{backgroundColor: codeMastersUITheme.background, color: codeMastersUITheme.font}}>
                            <Grid item={true} sm={8}>
                                <Tabs
                                    value={this.state.selectedTab}
                                    onChange={this.handleTabChange}
                                    fullWidth={true}
                                >
                                    <Tab value={0} label="console"/>
                                    <Tab value={1} icon={<Icon>forum</Icon>}/>
                                    <Tab value={2} icon={<Icon style={{color: codeMastersUITheme.font}}>settings</Icon>}/>
                                </Tabs>
                            </Grid>
                            <Grid item={true} sm={4} style={{textAlign: "right"}}>
                                <IconButton>
                                    <Icon style={{color: codeMastersUITheme.font}} onClick={this.handleOpen}>fullscreen</Icon>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </AppBar>

                    <SwipeableViews axis={"x"} index={this.state.selectedTab} onChangeIndex={this.handleChangeIndex}>
                        <div style={{padding: "20px", backgroundColor: codeMastersUITheme.background}}>
                            <Typography variant="body2" gutterBottom={true}
                                        style={{
                                            color: this.color[ColorWeight.FONT],
                                            fontSize: "1.0em"
                                        }}>
                                > hello world
                            </Typography>
                            <ExecutionResultModal status={ExecutionStatus.ERROR} ref={this.executionResultModalRef}/>
                        </div>

                        <div>
                            bbb
                        </div>

                        <div>
                            <Switch checked={this.state.userDarkTheme}
                                    onChange={this.handleChange("userDarkTheme")}
                                    value="dark"
                            /> dark theme
                        </div>
                    </SwipeableViews>
                </div>
            </Fade>
        );
    }

    private handleChange = (name: any) => (event: any) => {
        this.setState({[name]: event.target.checked});
        ApplicationSettings.setUseDarkTheme(event.target.checked);

        if (event.target.checked) {
            codeMastersUITheme.background = darkColorTheme.background;
            codeMastersUITheme.font = darkColorTheme.font;
        } else {
            codeMastersUITheme.background = lightColorTheme.background;
            codeMastersUITheme.font = lightColorTheme.font;
        }
    };

    private handleTabChange = (event: React.ChangeEvent<{}>, selectedTab: any) => {
        this.setState({selectedTab});
    };

    private handleChangeIndex = (index: number) => {
        this.setState({selectedTab: index});
    };

}