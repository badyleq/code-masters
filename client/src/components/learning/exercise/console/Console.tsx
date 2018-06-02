import * as React from "react";
import {codeMastersUITheme} from "../../../App.theme";
import Typography from "@material-ui/core/Typography/Typography";
import {green} from "@material-ui/core/colors";

export enum ExecutionStatus {
    SUCCESS,
    ERROR
}

export enum ExecutionColorWeight {
    BACKGROUND = 100,
    FONT = 500,
    TOOLBAR_BORDER = 300
}

export class Console extends React.Component<any, any> {
    public state = {
        color: green,
        executionResult: "hello world"
    };

    public render() {
        return (
            <div style={{padding: "20px", backgroundColor: codeMastersUITheme.background}}>
                <Typography variant="body2" gutterBottom={true}
                            style={{color: this.state.color[ExecutionColorWeight.FONT], fontSize: "1.0em"}}>
                    > {this.state.executionResult}
                </Typography>
            </div>
        );
    }
}