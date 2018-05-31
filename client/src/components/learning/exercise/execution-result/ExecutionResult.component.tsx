import * as React from 'react';
import {RefObject} from 'react';
import {red} from "@material-ui/core/colors";
import {Color} from "@material-ui/core";
import ExecutionResultModal from "./ExecutionResultModal.component";
import CardHeader from "@material-ui/core/es/CardHeader";
import {ColorWeight, ExecutionStatus} from "./ExecutionResult";
import Card from "@material-ui/core/Card/Card";
import Icon from "@material-ui/core/Icon/Icon";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Fade from '@material-ui/core/Fade';

export default class ExecutionResult extends React.Component {
    public executionResultModalRef: RefObject<ExecutionResultModal>;
    public color: Color = red;
    public state = {
        showResult: false
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

    public render() {
        return (
            <Fade in={this.state.showResult}>
                <Card style={{width: '100%', marginTop: '1em'}}>
                    <CardHeader style={{
                        backgroundColor: this.color[ColorWeight.TOOLBAR_BORDER],
                        color: this.color[ColorWeight.FONT],
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        fontSize: '1.0em'
                    }}
                                title={<div style={{color: 'white'}}> Execution result </div>}
                                action={
                                    <div>
                                        <IconButton>
                                            <Icon style={{color: 'white'}} onClick={this.handleOpen}>fullscreen</Icon>
                                        </IconButton>
                                        <IconButton>
                                            <Icon style={{color: 'white'}} onClick={this.handleHideResult}>close</Icon>
                                        </IconButton>
                                    </div>
                                }/>

                    <CardContent style={{backgroundColor: this.color[ColorWeight.BACKGROUND]}}>
                        <Typography variant="body2" gutterBottom={true} style={{
                            color: this.color[ColorWeight.FONT],
                            fontSize: '1.0em'
                        }}>
                            > hello world
                        </Typography>
                    </CardContent>
                    <ExecutionResultModal status={ExecutionStatus.ERROR} ref={this.executionResultModalRef}/>
                </Card>
            </Fade>
        );
    }
}