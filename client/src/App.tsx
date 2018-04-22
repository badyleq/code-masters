import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import './App.css';
import Highlight from 'react-highlight'

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

    public render() {
        const javaCode = `public static void main(String[] args) {
    // your code 
}`;
        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue">
                        <a href="#" className="brand-logo">&nbsp;CodeMasters</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Kursy</a></li>
                            <li><a href="badges.html">Profil</a></li>
                            <li><a href="collapsible.html">Wyloguj</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="row editor-row">
                    <div className="col s6">
                        Aplikacja zaimplementowana w języku Java to kolekcja klas. Każda z klas zawiera pewne zmienne i
                        metody. Z pośród tych wszystkich klas i metod jedna klasa i jedna metoda jest szczególna. Jest
                        to metoda od której wszystko się zaczyna; metoda która wywoływana jest jako pierwsza, gdy
                        uruchamiamy program. Metoda ta ma postać:

                        <Highlight language="java">{javaCode}</Highlight>

                        Metoda ta może być umieszczona w dowolnej klasie a nawet w kilku różnych klasach. Uruchamiając
                        aplikację podajemy nazwę klasy której metoda main(…) ma być uruchomiona. Od metody main(…) tej
                        właśnie klasy rozpoczyna się wykonywanie kodu naszego programu.


                        <p className="valign-wrapper"><i className="material-icons">check</i>&nbsp;Uruchom kod</p>
                        <p className="valign-wrapper"><i className="material-icons">close</i>&nbsp;Napisz metodę main</p>
                    </div>
                    <div className="col s6">
                        <MonacoEditor
                            width="700"
                            height="600"
                            language="java"
                            theme="vs-dark"
                            value={this.code}
                            options={this.options}
                        />
                    </div>
                </div>
                <div className="row editor-row">
                    <div className="col s6">
                        <a className="waves-effect waves-light btn blue">uruchom</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
