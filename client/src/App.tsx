import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import './App.css';
import Highlight from 'react-highlight'
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ICodeEditor = monaco.editor.ICodeEditor;

class App extends React.Component {
    public code = `
public class Hello {
     public static void main(String[] args) {
     
     }
}    
    `;

    public options /* IEditorOptions*/ = {
        minimap: {
            enabled: false
        },
        selectOnLineNumbers: true
    };

    public state = {
        value: 0,
    };

    public editorDidMount(editor: ICodeEditor, monacoModule: typeof monaco): void {
        // TODO: podczas unmount komponentu nalezy wywolac removeEventListener z przekazaca funkcja
        window.addEventListener("resize", () => {
            editor.layout();
        });
    }

    public render() {
        const javaCode = `public static void main(String[] args) {
    // your code 
}`;

        return (
            <div>
                <Paper>
                    <Tabs
                        value={this.state.value}
                        indicatorColor="primary"
                        textColor="primary">
                        <Tab label="Kursy"/>
                        <Tab label="Profil"/>
                        <Tab label="Wyloguj"/>
                    </Tabs>
                </Paper>
                <br/>
                <Grid container={true} spacing={24} style={{padding: '15px'}}>
                    <Grid item={true} xs={12} sm={6}>
                        <Paper style={{padding: '15px'}}>
                            <Typography variant="display1" gutterBottom={true}>
                                Metoda main
                            </Typography>

                            Aplikacja zaimplementowana w języku Java to kolekcja klas. Każda z klas zawiera pewne
                            zmienne i
                            metody. Z pośród tych wszystkich klas i metod jedna klasa i jedna metoda jest szczególna.
                            Jest
                            to metoda od której wszystko się zaczyna; metoda która wywoływana jest jako pierwsza, gdy
                            uruchamiamy program. Metoda ta ma postać:

                            <Highlight language="java">{javaCode}</Highlight>

                            Metoda ta może być umieszczona w dowolnej klasie a nawet w kilku różnych klasach.
                            Uruchamiając
                            aplikację podajemy nazwę klasy której metoda main(…) ma być uruchomiona. Od metody main(…)
                            tej
                            właśnie klasy rozpoczyna się wykonywanie kodu naszego programu.<br/>

                            <Typography variant="headline" gutterBottom={true}>
                                Do zrobienia:
                            </Typography>

                            <List>
                                {[0, 1, 2, 3].map(value => (
                                    <ListItem key={value} dense={true} button={true}>
                                        <Checkbox/>
                                        <ListItemText primary={`Line item ${value + 1}`}/>
                                    </ListItem>
                                ))}
                            </List>

                            <p className="valign-wrapper"><i className="material-icons">check</i>&nbsp;Uruchom kod</p>
                            <p className="valign-wrapper"><i className="material-icons">close</i>&nbsp;Napisz metodę
                                main
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12} sm={6}>
                        <div className="col s6">
                            <Paper>
                                <MonacoEditor
                                    width="100%"
                                    height="800"
                                    language="java"
                                    theme="vs-dark"
                                    value={this.code}
                                    editorDidMount={this.editorDidMount}
                                    options={this.options}
                                />
                            </Paper>

                        </div>
                        <Button color="primary">
                            Uruchom
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
