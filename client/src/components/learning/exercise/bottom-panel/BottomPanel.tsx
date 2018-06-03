import * as React from "react";
import {RefObject} from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Grid from "@material-ui/core/Grid/Grid";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import SwipeableViews from "react-swipeable-views";
import {codeMastersUITheme} from "../../../App.theme";
import {applicationSettings} from "../../../common/ApplicationSettings";
import {CommentList} from "../comments/comment-list/Comment-list.component";
import {Console} from "../console/Console";
import Settings from "../settings/Settings";
import {ModalWrapper} from "../../../common/modal-wrapper/ModalWrapper";
import Logger from "../../../common/service/Logger";

export default class BottomPanel extends React.Component<any, any> {
    public state: any;

    private logger = new Logger(BottomPanel);
    private consoleModalRef: RefObject<ModalWrapper> = React.createRef();
    private commentsModalRef: RefObject<ModalWrapper> = React.createRef();
    private settingsModalRef: RefObject<ModalWrapper> = React.createRef();

    constructor(props?: any) {
        super(props);

        this.state = {
            selectedTab: 0,
            userDarkTheme: applicationSettings.useDarkTheme()
        };
    }

    public handleShowResult = () => {
        this.setState({showResult: true});
    };

    public render() {
        return (
            <div style={{borderTop: `1px solid ${codeMastersUITheme.primary}`}}>
                <AppBar position="static">
                    <Grid container={true} style={{backgroundColor: codeMastersUITheme.background, color: codeMastersUITheme.font}}>
                        <Grid item={true} sm={8}>
                            <Tabs
                                value={this.state.selectedTab}
                                onChange={this.handleTabChange}
                                fullWidth={true}>
                                <Tab value={0} label="console"/>
                                <Tab value={1} icon={<Icon>forum</Icon>}/>
                                <Tab value={2} icon={<Icon style={{color: codeMastersUITheme.font}}>settings</Icon>}/>
                            </Tabs>
                        </Grid>
                        <Grid item={true} sm={4} style={{textAlign: "right"}}>
                            <IconButton>
                                <Icon style={{color: codeMastersUITheme.font}} onClick={this.minimize}>minimize</Icon>
                            </IconButton>
                            <IconButton>
                                <Icon style={{color: codeMastersUITheme.font}} onClick={this.showFullScreen}>fullscreen</Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </AppBar>

                <SwipeableViews axis={"x"} index={this.state.selectedTab} onChangeIndex={this.handleChangeIndex}>
                    <ModalWrapper ref={this.consoleModalRef} modalTitle="console" content={<Console/>}/>
                    <ModalWrapper ref={this.commentsModalRef} modalTitle="comments" content={<CommentList/>}/>
                    <ModalWrapper ref={this.settingsModalRef} modalTitle="settings" content={<Settings/>}/>
                </SwipeableViews>
            </div>
        );
    }

    private handleTabChange = (event: React.ChangeEvent<{}>, selectedTab: any) => {
        this.setState({selectedTab});
        this.props.onMaximize();
    };

    private handleChangeIndex = (index: number) => {
        this.setState({selectedTab: index});
    };

    private minimize = () => {
        this.props.onMinimize();
    };

    private showFullScreen = () => {
        function handleOpen<T>(component: RefObject<{ handleOpen: () => void }>) {
            if (component.current) {
                component.current.handleOpen();
            }
        }

        this.logger.log(`show tab: ${this.state.selectedTab} in fullscreen`);
        switch (this.state.selectedTab) {
            case 0:
                return handleOpen(this.consoleModalRef);
            case 1:
                return handleOpen(this.commentsModalRef);
            case 2:
                return handleOpen(this.settingsModalRef);
        }
    }
}