import * as React from 'react';
import './App.css';
import Highlight from 'react-highlight';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import LinearProgress from '@material-ui/core/LinearProgress';
import Draft, {htmlToDraft} from 'react-wysiwyg-typescript';
import {EditorState} from 'draft-js';
import MonacoWrapper from '../monaco-wrapper/MonacoWrapper';
import AppToolbar from '../main-app-toolbar/MainAppToolbar';

const code = `import java.util.List;
    
public class Hello {
   public static void main(String[] args) {
    System.out.println("hello world");
   }
}`;

class App extends React.Component {
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

    public getCheckboxColor(value: number) {
        if (value === 0) {
            return green[500];
        }
        else if (value === 1) {
            return red[500];
        }

        return grey[500];
    }

    public render() {
        const javaCode = `public static void main(String[] args) {
    // your code 
}`;
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

                        <Grid item={true} xs={12} sm={6}>
                            <div style={{padding: '15px', lineHeight: '2em', backgroundColor: '#ffffff'}}>
                                <Typography variant="display1" gutterBottom={true}>
                                    Metoda main
                                </Typography>

                                Aplikacja zaimplementowana w języku Java to kolekcja klas. Każda z klas zawiera pewne
                                zmienne i
                                metody. Z pośród tych wszystkich klas i metod jedna klasa i jedna metoda jest
                                szczególna.
                                Jest
                                to metoda od której wszystko się zaczyna; metoda która wywoływana jest jako pierwsza,
                                gdy
                                uruchamiamy program. Metoda ta ma postać:

                                <Highlight language="java">{javaCode}</Highlight>

                                Metoda ta może być umieszczona w dowolnej klasie a nawet w kilku różnych klasach.
                                Uruchamiając
                                aplikację podajemy nazwę klasy której metoda main(…) ma być uruchomiona. Od metody
                                main(…)
                                tej
                                właśnie klasy rozpoczyna się wykonywanie kodu naszego programu.<br/><br/>

                                <Typography variant="headline" gutterBottom={true}>
                                    Do zrobienia:
                                </Typography>
                                <Draft
                                    editorState={this.state.editorState}
                                    onEditorStateChange={this.editState}
                                />
                                <List>
                                    {[0, 1, 2, 3].map(value => (
                                        <ListItem key={value} dense={true} button={true}>
                                            <Checkbox disabled={true} checked={value === 0}
                                                      style={{color: this.getCheckboxColor(value)}}/>
                                            <ListItemText primary={`Line item ${value + 1}`}/>
                                            <Icon>help</Icon>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </Grid>
                        <Grid item={true} xs={12} sm={6}>
                            <div className="col s6">
                                <div style={{backgroundColor: '#ffffff'}}>
                                    <Grid item={true} xs={12} sm={12} text-align="right" style={{'textAlign': 'right'}}>
                                        <Button color="primary">
                                            <Icon>play_arrow</Icon> Uruchom
                                        </Button>
                                    </Grid>

                                    <MonacoWrapper code={code}/>

                                    <Grid item={true} xs={12} sm={12} text-align="right">
                                        <Typography variant="body2" gutterBottom={true}>
                                            Error
                                        </Typography>
                                    </Grid>

                                    <Grid item={true} xs={12} sm={12} text-align="right">
                                        <Typography variant="body1" gutterBottom={true} style={{color: red[500]}}>
                                            java.lang.NullPointerException
                                            at com.company...nonNull(ArgumentChecker.java:67)
                                            at com.company...wrap(CheckArgumentsAspect.java:82)
                                            at com.company.product.MyTest.test(MyTest.java:37)
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
