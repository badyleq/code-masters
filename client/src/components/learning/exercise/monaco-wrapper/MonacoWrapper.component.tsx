import * as React from 'react';
import {RefObject} from 'react';
import MonacoEditor from 'react-monaco-editor';
import {codeMastersUITheme} from '../../../App.theme';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Grid from '@material-ui/core/Grid/Grid';
import Icon from '@material-ui/core/Icon/Icon';
import Button from '@material-ui/core/Button/Button';
import BottomPanel from '../bottom-panel/BottomPanel';
import * as NotificationSystem from 'react-notification-system';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import ICodeEditor = monaco.editor.ICodeEditor;
import codeExecutionService from '../../service/CodeExecutionService';

interface IMonacoWrapperState {
    editor: ICodeEditor | null,
    remeasureEditorLayout: () => void | null,
    editorHeight: number
}

export default class MonacoWrapper extends React.Component<any, IMonacoWrapperState> {
    public executionResultRef: RefObject<BottomPanel> = React.createRef();
    public notificationSystem: NotificationSystem.System;

    public state: any = {
        editor: null,
        remeasureEditorLayout: null,
        editorHeight: 500
    };

    /**
     * Konfiguracja edutora Monaco.
     * @see{@link monaco.editor.IEditorOptions}
     */
    private options: monaco.editor.IEditorOptions = {
        minimap: {
            enabled: false
        },
        fontSize: 12,
        lineHeight: 20,
        selectOnLineNumbers: true,
        scrollbar: {}
    };

    public editorDidMount: (editor: ICodeEditor) => void = (editor) => {
        const editorLayoutFn = () => editor.layout();
        this.setState({
            remeasureEditorLayout: editorLayoutFn,
            editor
        });
        window.addEventListener('resize', editorLayoutFn);
    };

    public reRenderEditor() {
        if (this.state.editor) {
            this.state.editor.layout();
        }
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.state.remeasureEditorLayout);
    }

    public componentDidMount() {
        const wrapper = document.getElementById('monacoEditorWrapper');
        if (wrapper) {
            this.setState({editorHeight: wrapper.clientHeight});
        }

        if (this.executionResultRef.current) {
            this.executionResultRef.current.handleShowResult();
        }
    }

    public onExecuteCodeBtn = () => {
        codeExecutionService.executeCode();

        this.notificationSystem.addNotification({
            message: '',
            level: 'info',
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
        return (
            <Card style={{lineHeight: '1.5em', height: 'calc(100%)', minWidth: '300px', minHeight: '100px'}}>
                <CardContent style={{lineHeight: '1.5em', backgroundColor: codeMastersUITheme.background}}>
                    <Grid style={{backgroundColor: codeMastersUITheme.background, textAlign: 'right'}}
                          item={true} xs={12} sm={12} text-align="right">
                        <Button disabled={true} color="primary">
                            <Icon>navigate_next</Icon> Dalej
                        </Button>
                        <Button color="primary" onClick={this.onExecuteCodeBtn}>
                            <Icon>play_arrow</Icon> Uruchom
                        </Button>
                    </Grid>

                    <div id="monacoEditorWrapper" style={{height: 'calc(70vh)'}}>
                        <MonacoEditor
                            width="100%"
                            height={this.state.editorHeight}
                            language="java"
                            theme={codeMastersUITheme.editorTheme}
                            value={this.props.code}
                            editorDidMount={this.editorDidMount}
                            options={this.options}
                        />
                    </div>
                </CardContent>

                <NotificationSystem ref={(ref: NotificationSystem.System) => this.notificationSystem = ref}/>
            </Card>
        );
    }
}