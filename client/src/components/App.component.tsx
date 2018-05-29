import * as React from 'react';
import './App.css';
import {AppRouting} from './App.routing';
import {BrowserRouter} from 'react-router-dom';
import TopMenu from './top-menu/TopMenu.component';

export default class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div>
                    <TopMenu/>
                    <AppRouting/>
                </div>
            </BrowserRouter>
        );
    }
}