import * as React from 'react';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Icon from '@material-ui/core/es/Icon';
import IconButton from '@material-ui/core/es/IconButton';
import CardHeader from '@material-ui/core/es/CardHeader';
import Slide from "@material-ui/core/Slide/Slide";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import {green, red} from "@material-ui/core/colors";
import {Color} from "@material-ui/core";
import {ColorWeight, ExecutionStatus} from "./ExecutionResult";
import {codeMastersUITheme} from "../../../App.theme";

function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}

interface IExecutionResultModalProps {
    status: ExecutionStatus
}

export default class ExecutionResultModal extends React.Component<IExecutionResultModalProps> {
    public state = {
        open: false,
    };

    private color: Color = green;

    constructor(props: any) {
        super(props);

        if (props.status === ExecutionStatus.ERROR) {
            this.color = red;
        }
    }

    public handleOpen = () => {
        this.setState({open: true});
    };

    public handleClose = () => {
        this.setState({open: false});
    };

    public render() {
        return (<Dialog
                fullScreen={true}
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}>
                <AppBar style={{textAlign: 'right', backgroundColor: this.color[ColorWeight.TOOLBAR_BORDER]}}>
                    <Toolbar style={{backgroundColor: this.color[ColorWeight.TOOLBAR_BORDER]}}>
                        <Typography variant="title"
                                    style={{color: codeMastersUITheme.light, textAlign: 'left', flex: 1}}>
                            Code result
                        </Typography>
                        <IconButton onClick={this.handleClose}>
                            <Icon style={{color: 'white'}}>close</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <CardHeader style={{
                    backgroundColor: this.color[ColorWeight.TOOLBAR_BORDER],
                    color: this.color[ColorWeight.FONT]
                }}
                            action={
                                <IconButton>
                                    <Icon style={{color: 'red'}}>close</Icon>
                                </IconButton>
                            }/>

                <CardContent style={{backgroundColor: this.color[ColorWeight.BACKGROUND], height: '100%'}}>
                    <Typography style={{color: this.color[ColorWeight.FONT]}} variant="body2" gutterBottom={true}>
                        > hello world
                    </Typography>
                </CardContent>
            </Dialog>
        );
    }
}