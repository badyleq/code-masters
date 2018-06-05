import * as React from "react";
import { RefObject } from "react";
import Grid from "@material-ui/core/Grid";
import SplitPane from "react-split-pane";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import { ExerciseContent } from "./exercise-content/ExerciseContent.component";
import MonacoWrapper from "./monaco-wrapper/MonacoWrapper.component";
import { codeMastersUITheme } from "../../App.theme";
import "./Exercise.css";
import BottomPanel from "./bottom-panel/BottomPanel";
import codeExecutionService from "../service/CodeExecutionService";

const code = `import java.util.List;

public class Hello {
   public static void main(String[] args) {
    System.out.println("hello world");
   }
}`;

interface IExerciseState {
    completed: number,
    bottomPanelSize: number,
    minimized: boolean
}

interface IExerciseProps {
    completed: number,
    bottomPanelSize: number,
    minimized: boolean
}

export class Exercise extends React.Component<IExerciseProps, IExerciseState> {
    public readonly bottomPanelMinimizedHeight = 115;
    public readonly bottomPanelDefaultHeight = 400;
    public monacoWrapperRef: RefObject<MonacoWrapper> = React.createRef();

    constructor(props?: any) {
        super(props);
        this.state = {
            completed: 40,
            bottomPanelSize: this.bottomPanelMinimizedHeight,
            minimized: true
        }
    }

    public componentDidMount() {
        codeExecutionService.subscribeOnCodeExecutionResult(value => {
            if (this.state.minimized) {
                if (this.state.minimized) {
                    this.animateResizeToDefaultHeight();
                }
            }
        });
    }

    public animateResizeToDefaultHeight = () => {
        let start: number = 0;
        const animationTime = 0.025;

        const step = (timestamp: number) => {
            if (!start) {
                start = timestamp;
            }

            debugger;
            const elapsedTime = (timestamp - start) / 10000
            const progress = elapsedTime / animationTime;
            const nextSize  = this.bottomPanelMinimizedHeight + (this.bottomPanelDefaultHeight * progress);
            if (nextSize < this.bottomPanelDefaultHeight) {
                this.setState({
                    bottomPanelSize: nextSize
                });

                window.requestAnimationFrame(step);
            } else {
                this.setState({
                    bottomPanelSize: this.bottomPanelDefaultHeight,
                    minimized: false
                });
            }
        }

        window.requestAnimationFrame(step);
    }

    public render() {
        return (
            <div style={{ backgroundColor: codeMastersUITheme.background }}>
                <Grid item={true} xs={12} sm={12}>
                    <LinearProgress variant="determinate" value={this.state.completed} />
                </Grid>

                <SplitPane split="horizontal" size={`calc(100vh - ${this.state.bottomPanelSize}px)`}
                    minSize={200}
                    onChange={this.onResizeHorizontal}
                    style={{ marginTop: "4.3em" }}>
                    <SplitPane split="vertical"
                        minSize={400}
                        defaultSize={"calc(50%)"}
                        primary="second"
                        onChange={this.onResize}>
                        <ExerciseContent bottomPanelSize={this.state.bottomPanelSize} />
                        <MonacoWrapper ref={this.monacoWrapperRef} code={code} />
                    </SplitPane>
                    <BottomPanel bottomPanelSize={this.state.bottomPanelSize}
                        showFullScreenCallback={this.showFullScreenCallback}
                        closeFullScreenCallback={this.closeFullScreenCallback}
                        onMinimize={this.onMinimizeBottomPanel}
                        onMaximize={this.onMaximizeBottomPanel} />
                </SplitPane>
            </div>
        );
    }

    private onMaximizeBottomPanel = () => {
        if (this.state.minimized) {
            this.setState({
                minimized: false,
                bottomPanelSize: this.bottomPanelDefaultHeight
            })
        }
    };

    private showFullScreenCallback = () => {
        this.setState({
            bottomPanelSize: window.innerHeight,
        });
    };

    private closeFullScreenCallback = () => {
        this.setState({
            bottomPanelSize: this.bottomPanelDefaultHeight,
        });
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
            bottomPanelSize: window.innerHeight - size,
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