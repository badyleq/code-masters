import * as React from "react";
import {RefObject} from "react";
import Grid from "@material-ui/core/Grid";
import {htmlToDraft} from "react-wysiwyg-typescript";
import * as NotificationSystem from "react-notification-system";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ExecutionResult from "./execution-result/ExecutionResult.component";
import SplitPane from "react-split-pane";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import {ExerciseContent} from "./exercise-content/ExerciseContent.component";
import MonacoWrapper from "./monaco-wrapper/MonacoWrapper.component";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";

const code = `import java.util.List;

public class Hello {
   public static void main(String[] args) {
    System.out.println("hello world");
   }
}`;

export class Exercise extends React.Component {
    public notificationSystem: NotificationSystem.System;
    public executionResultRef: RefObject<ExecutionResult> = React.createRef();
    public monacoWrapperRef: RefObject<MonacoWrapper> = React.createRef();

    public state = {
        buffer: 10,
        completed: 40,
        editorState: htmlToDraft("Your html contents"),
        value: 0,
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

    public componentDidMount() {
        if (this.executionResultRef.current) {
            this.executionResultRef.current.handleShowResult();
        }
    }

    public render() {
        return (<div style={{backgroundColor: "white"}}>
            <Grid item={true} xs={12} sm={12}>
                <LinearProgress variant="determinate" value={this.state.completed}/>
            </Grid>

            <SplitPane split="horizontal" size={"calc(100vh - 200px)"} minSize={400} onChange={this.onResizeHorizontal} style={{marginTop: "4.5em"}}>
                <SplitPane split="vertical"
                           minSize={400}
                           defaultSize={"calc(50%)"}
                           primary="second"
                           onChange={this.onResize}>
                    <ExerciseContent/>
                    <Card style={{lineHeight: "1.5em", height: "calc(100%)", minWidth: "300px", minHeight: "100px"}}>
                        <CardContent style={{lineHeight: "1.5em"}}>
                            <Grid style={{backgroundColor: "#ffffff", textAlign: "right"}}
                                  item={true} xs={12} sm={12} text-align="right">
                                <Button disabled={true} color="primary">
                                    <Icon>navigate_next</Icon> Dalej
                                </Button>
                                <Button color="primary" onClick={this.onExecuteCodeBtn}>
                                    <Icon>play_arrow</Icon> Uruchom
                                </Button>
                            </Grid>
                            <MonacoWrapper ref={this.monacoWrapperRef} style={{backgroundColor: "#ffffff", width: "100%"}} code={code}/>
                        </CardContent>
                    </Card>
                </SplitPane>
                <ExecutionResult ref={this.executionResultRef}/>
            </SplitPane>
            <NotificationSystem ref={(ref: NotificationSystem.System) => this.notificationSystem = ref}/>
        </div>);
    }

    private onResize = () => {
        if (this.monacoWrapperRef.current) {
            this.monacoWrapperRef.current.reRenderEditor()
        }
    };

    private onResizeHorizontal = (size: number) => {
        const exerciseContent = document.getElementById("exerciseContent");
        if (exerciseContent) {
            exerciseContent.style.height = `${size - 50}px`;

            const executionResult = document.getElementById("executionResult");
            if (executionResult) {
                executionResult.style.height = `${size - 50}px`;
            }
        }
    }


}