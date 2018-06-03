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
    public readonly bottomPanelMinimizedHeight = 115;
    public readonly bottomPanelMaximizedHeight = 400;

    public state = {
        completed: 40,
        bottomPanelSize: this.bottomPanelMinimizedHeight,
        minimized: true
    };
    public monacoWrapperRef: RefObject<MonacoWrapper> = React.createRef();

    public render() {
        return (
            <div style={{backgroundColor: codeMastersUITheme.background}}>
                <Grid item={true} xs={12} sm={12}>
                    <LinearProgress variant="determinate" value={this.state.completed}/>
                </Grid>

                <SplitPane split="horizontal" size={`calc(100vh - ${this.state.bottomPanelSize}px)`}
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
                    <BottomPanel onMinimize={this.onMinimizeBottomPanel} onMaximize={this.onMaximizeBottomPanel}/>
                </SplitPane>
            </div>
        );
    }

    private onMaximizeBottomPanel = () => {
        if (this.state.minimized) {
            this.setState({
                bottomPanelSize: this.bottomPanelMaximizedHeight,
                minimized: false
            })
        }
    };

    private onMinimizeBottomPanel = () => {
        this.setState({
            bottomPanelSize: this.bottomPanelMinimizedHeight,
            minimized: true
        })
    };

    private onResize = () => {
        if (this.monacoWrapperRef.current) {
            this.monacoWrapperRef.current.reRenderEditor()
        }
    };

    private onResizeHorizontal = (size: number) => {
        this.setState({
            bottomPanelSize: this.bottomPanelMinimizedHeight,
            minimized: false
        });

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