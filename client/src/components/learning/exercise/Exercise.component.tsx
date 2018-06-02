import * as React from "react";
import {RefObject} from "react";
import Grid from "@material-ui/core/Grid";
import SplitPane from "react-split-pane";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import {ExerciseContent} from "./exercise-content/ExerciseContent.component";
import MonacoWrapper from "./monaco-wrapper/MonacoWrapper.component";
import {codeMastersUITheme} from "../../App.theme";
import "./Exercise.css";
import BottomPanel from "./bottom-panel/BottomPanel";

const code = `import java.util.List;

public class Hello {
   public static void main(String[] args) {
    System.out.println("hello world");
   }
}`;

export class Exercise extends React.Component {
    public monacoWrapperRef: RefObject<MonacoWrapper> = React.createRef();

    public state = {
        completed: 40,
    };

    public render() {
        return (
            <div style={{backgroundColor: codeMastersUITheme.background}}>
                <Grid item={true} xs={12} sm={12}>
                    <LinearProgress variant="determinate" value={this.state.completed}/>
                </Grid>

                <SplitPane split="horizontal" size={"calc(100vh - 300px)"}
                           minSize={200}
                           onChange={this.onResizeHorizontal}
                           style={{marginTop: "4.3em"}}>
                    <SplitPane split="vertical"
                               minSize={400}
                               defaultSize={"calc(50%)"}
                               primary="second"
                               onChange={this.onResize}>
                        <ExerciseContent/>
                        <MonacoWrapper ref={this.monacoWrapperRef} code={code}/>
                    </SplitPane>
                    <BottomPanel/>
                </SplitPane>
            </div>
        );
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