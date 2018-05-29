import * as React from 'react';
import {LoginSection} from "../login/login-section/LoginSection";
import {ExerciseSection} from "../course/exercise-section/ExerciseSection";
import {Route, Switch} from 'react-router-dom';

export class AppRouting extends React.Component {

    public render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact={true} component={ExerciseSection}/>
                    <Route path="/login" component={LoginSection}/>
                </Switch>
            </main>
        );
    }
}