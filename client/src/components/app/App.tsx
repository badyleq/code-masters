import * as React from 'react';
import './App.css';
import {AppRouting} from "./App.routing";
import {BrowserRouter} from "react-router-dom";
import AppToolbar from "../app-toolbar/AppToolbar";

export default class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div>
                    <AppToolbar/>
                    <AppRouting/>
                </div>
            </BrowserRouter>
        );
    }
}