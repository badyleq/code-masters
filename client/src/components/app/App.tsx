import * as React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import LinearProgress from '@material-ui/core/LinearProgress';
import {htmlToDraft} from 'react-wysiwyg-typescript';
import {EditorState} from 'draft-js';
import MonacoWrapper from '../course/monaco-wrapper/MonacoWrapper';
import AppToolbar from '../main-app-toolbar/MainAppToolbar';
import {ExerciseContent} from '../course/exercise-content/ExerciseContent';
import * as NotificationSystem from 'react-notification-system';

const code = `import java.util.List;
    
public class Hello {
   public static void main(String[] args) {
    System.out.println("hello world");
   }
}`;

class App extends React.Component {
    public notificationSystem: NotificationSystem.System;

    public state = {
        buffer: 10,
        completed: 40,
        editorState: htmlToDraft('Your html contents'),
        value: 0
    };

    public editState = (newState: EditorState) => {
        this.setState(state => ({
            editorState: newState
        }));
    };

    public onExecuteCodeBtn = () => {
        this.notificationSystem.addNotification({
            message: 'Compilation error',
            autoDismiss: 0,
            level: 'error',
            children: (
                <Grid item={true} xs={12} sm={12} text-align="right">
                    <div style={{color: red[500]}}>
                        java.lang.NullPointerException<br/>
                        at com.company...nonNull (ArgumentChecker.java:67)<br/>
                        at com.company...wrap (CheckArgumentsAspect.java:82)<br/>
                        at com.company.product.MyTest.test (MyTest.java:37)
                    </div>
                </Grid>
            )
        });
    };

    public render() {
        return (
            <div style={{backgroundColor: '#f8f8f8'}}>
                <AppToolbar/>

                <Grid item={true} xs={12} sm={12}>
                    <LinearProgress variant="determinate" value={this.state.completed}/>
                </Grid>

                <div className="app-container">
                    <Grid container={true} spacing={24}>

                        <Grid item={true} xs={12} sm={12} text-align="right" style={{'textAlign': 'right'}}>
                            Lekcja 5 z 12
                        </Grid>

                        <ExerciseContent/>

                        <Grid item={true} xs={12} sm={6}>
                            <div className="col s6">
                                <div style={{backgroundColor: '#ffffff'}}>
                                    <Grid item={true} xs={12} sm={12} text-align="right" style={{'textAlign': 'right'}}>
                                        <Button color="primary" onClick={this.onExecuteCodeBtn}>
                                            <Icon>play_arrow</Icon> Uruchom
                                        </Button>
                                    </Grid>

                                    <MonacoWrapper code={code}/>

                                    <NotificationSystem
                                        ref={(ref: NotificationSystem.System) => this.notificationSystem = ref}/>

                                    <Grid item={true} xs={12} sm={12} text-align="right">
                                        <Typography variant="body2" gutterBottom={true}>
                                            Error
                                        </Typography>
                                    </Grid>


                                </div>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} sm={12} text-align="right" style={{'textAlign': 'right'}}>
                            <Button color="primary" disabled={true}>
                                <Icon>navigate_next</Icon> Dalej
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
