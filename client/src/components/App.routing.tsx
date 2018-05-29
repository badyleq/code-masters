import * as React from 'react';
import {Login} from "./authentication/login/Login.component";
import {Exercise} from "./learning/exercise/Exercise.component";
import {Route, Switch} from 'react-router-dom';
import AppDashboard from './dashboard/Dashboard.component';

export class AppRouting extends React.Component {

    public render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact={true} component={Exercise}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/dashboard" component={AppDashboard}/>
                </Switch>
            </main>
        );
    }
}