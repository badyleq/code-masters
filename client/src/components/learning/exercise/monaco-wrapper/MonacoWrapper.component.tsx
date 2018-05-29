import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';
import ICodeEditor = monaco.editor.ICodeEditor;

export default class MonacoWrapper extends React.Component<any, any> {

    public state: any = {};

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
        this.setState({remeasureEditorLayout: editorLayoutFn});
        window.addEventListener('resize', editorLayoutFn);
    };

    public componentWillUnmount() {
        window.removeEventListener('resize', this.state.remeasureEditorLayout);
    }

    public render() {
        return (
            <div>
                <MonacoEditor
                    width="100%"
                    height="500"
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