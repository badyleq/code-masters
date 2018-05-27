import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';
import ICodeEditor = monaco.editor.ICodeEditor;

const code = `import java.util.List;
    
public class Hello {
   public static void main(String[] args) {
    System.out.println("hello world");
   }
}    
`;

export default class MonacoWrapper extends React.Component {

    private options /* IEditorOptions*/ = {
        minimap: {
            enabled: false
        },
        selectOnLineNumbers: true
    };

    public editorDidMount(editor: ICodeEditor, monacoModule: typeof monaco): void {
        // TODO: podczas unmount komponentu nalezy wywolac removeEventListener z przekazaca funkcja
        window.addEventListener('resize', () => editor.layout());
    }

    public render() {
        return (
            <div>
                <MonacoEditor
                    width="100%"
                    height="500"
                    language="java"
                    theme="vs-light"
                    value={code}
                    editorDidMount={this.editorDidMount}
                    options={this.options}
                />
            </div>
        );
    }
}