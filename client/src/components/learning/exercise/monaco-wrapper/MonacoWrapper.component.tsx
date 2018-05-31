import * as React from "react";
import MonacoEditor from "react-monaco-editor";
import ICodeEditor = monaco.editor.ICodeEditor;

interface IMonacoWrapperState {
    editor: ICodeEditor | null,
    remeasureEditorLayout: () => void | null,
    editorHeight: number
}

export default class MonacoWrapper extends React.Component<any, IMonacoWrapperState> {

    public state: any = {
        editor: null,
        remeasureEditorLayout: null,
        editorHeight: 500
    };

    /**
     * Konfiguracja edutora Monaco.
     * @see{@link monaco.editor.IEditorOptions}
     */
    private options = {
        minimap: {
            enabled: false
        },
        selectOnLineNumbers: true,
        scrollbar: {}
    };

    public editorDidMount: (editor: ICodeEditor) => void = (editor) => {
        const editorLayoutFn = () => editor.layout();
        this.setState({
            remeasureEditorLayout: editorLayoutFn,
            editor
        });
        window.addEventListener("resize", editorLayoutFn);
    };

    public reRenderEditor() {
        if (this.state.editor) {
            this.state.editor.layout();
        }
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.state.remeasureEditorLayout);
    }

    public componentDidMount() {
        const wrapper = document.getElementById("monacoEditorWrapper");
        if (wrapper) {
            this.setState({editorHeight: wrapper.clientHeight});
        }
    }

    public render() {
        return (
            <div id="monacoEditorWrapper" style={{height: "calc(70vh)"}}>
                <MonacoEditor
                    width="100%"
                    height={this.state.editorHeight}
                    language="java"
                    theme="vs-light"
                    value={this.props.code}
                    editorDidMount={this.editorDidMount}
                    options={this.options}
                />
            </div>
        );
    }
}