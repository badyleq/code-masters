import * as React from "react";
import { Login } from "./authentication/login/Login.component";
import { Exercise } from "./learning/exercise/Exercise.component";
import { Route, Switch } from "react-router-dom";
import AppDashboard from "./dashboard/Dashboard.component";
import CourseCreator from "./learning/creator/course-creator/CourseCreator.component";
import NotFound from "./common/not-found/NotFound.component";
import Course from "./learning/course/Course.component";
import Settings from "./settings/Settings.component";

export class AppRouting extends React.Component<any, any> {

    public render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact={true} component={AppDashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/course/:id" component={Course} />
                    <Route path="/exercise" component={Exercise} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/dashboard" component={AppDashboard} />
                    <Route path="/course-creator" component={CourseCreator} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        );
    }
}