import * as React from "react";
import {RefObject} from "react";
import {green} from "@material-ui/core/colors";
import {Color} from "@material-ui/core";
import ExecutionResultModal from "./ExecutionResultModal.component";
import CardHeader from "@material-ui/core/es/CardHeader";
import {ColorWeight, ExecutionStatus} from "./ExecutionResult";
import Card from "@material-ui/core/Card/Card";
import Icon from "@material-ui/core/Icon/Icon";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Fade from "@material-ui/core/Fade";
import {codeMastersUITheme} from "../../../App.theme";

export default class ExecutionResult extends React.Component<any, any> {
    public executionResultModalRef: RefObject<ExecutionResultModal>;
    public color: Color = green;
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

    public noop() {
        alert();
    }

    public render() {
        return (
            <Fade in={this.state.showResult}>
                <Card style={{width: "100%", height: "100%", minHeight: "50px"}}>
                    <CardHeader style={{
                        backgroundColor: codeMastersUITheme.primary,
                        color: this.color[ColorWeight.FONT],
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        lineHeight: "1em",
                    }}
                                title={<div style={{color: "white", fontSize: "0.8em"}}> Execution result </div>}
                                action={
                                    <div>
                                        <IconButton>
                                            <Icon style={{color: "white"}} onClick={this.handleOpen}>fullscreen</Icon>
                                        </IconButton>
                                    </div>
                                }/>

                    <CardContent id="executionResult">
                        <Typography variant="body2" gutterBottom={true} style={{
                            color: this.color[ColorWeight.FONT],
                            fontSize: "1.0em"
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