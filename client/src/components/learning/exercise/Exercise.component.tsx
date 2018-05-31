import * as React from "react";
import {RefObject} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import LinearProgress from "@material-ui/core/LinearProgress";
import {htmlToDraft} from "react-wysiwyg-typescript";
import {EditorState} from "draft-js";
import * as NotificationSystem from "react-notification-system";
import MonacoWrapper from "./monaco-wrapper/MonacoWrapper.component";
import {ExerciseContent} from "./exercise-content/ExerciseContent.component";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ExecutionResult from "./execution-result/ExecutionResult.component";

const code = `import java.util.List;
    
public class Hello {
   public static void main(String[] args) {
    System.out.println("hello world");
   }
}`;

export class Exercise extends React.Component {
    public notificationSystem: NotificationSystem.System;
    public executionResultRef: RefObject<ExecutionResult> = React.createRef();
    public state = {
        buffer: 10,
        completed: 40,
        editorState: htmlToDraft("Your html contents"),
        value: 0
    };

    public editState = (newState: EditorState) => {
        this.setState(state => ({
            editorState: newState
        }));
    };

    public onExecuteCodeBtn = () => {
        this.notificationSystem.addNotification({
            message: "",
            level: "info",
            autoDismiss: 1,
            onRemove: () => {
                if (this.executionResultRef.current) {
                    this.executionResultRef.current.handleShowResult();
                }
            },
            children: (
                <Grid container={true} spacing={24}>
                    <Grid item={true} sm={2}>
                        <CircularProgress/>
                    </Grid>
                    <Grid item={true} sm={6}>
                        <h3>Kompilacja</h3>
                    </Grid>
                </Grid>
            )
        });
    };

    public render() {
        return (<div>
            <Grid item={true} xs={12} sm={12}>
                <LinearProgress variant="determinate" value={this.state.completed}/>
            </Grid>

            <div className="app-container">
                <Grid container={true} spacing={24}>
                    <Grid item={true} xs={12} sm={12} text-align="right" style={{"textAlign": "right"}}>
                        Lekcja 5 z 12
                    </Grid>

                    <ExerciseContent/>

                    <Grid item={true} xs={12} sm={6}>
                        <div className="col s6">
                            <Card>
                                <CardContent style={{padding: 0}}>
                                    <Grid style={{backgroundColor: "#ffffff", textAlign: "right"}}
                                          item={true} xs={12} sm={12} text-align="right">
                                        <Button color="primary" onClick={this.onExecuteCodeBtn}>
                                            <Icon>play_arrow</Icon> Uruchom
                                        </Button>
                                    </Grid>

                                    <MonacoWrapper style={{backgroundColor: "#ffffff"}} code={code}/>
                                </CardContent>
                            </Card>

                            <NotificationSystem ref={(ref: NotificationSystem.System) => this.notificationSystem = ref}/>

                            <Grid item={true} xs={12} sm={12} text-align="right">
                                <ExecutionResult ref={this.executionResultRef}/>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item={true} xs={12} sm={12} text-align="right" style={{"textAlign": "right"}}>
                        <Button color="primary" disabled={true}>
                            <Icon>navigate_next</Icon> Dalej
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>);
    }
}