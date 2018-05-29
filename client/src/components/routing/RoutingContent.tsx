import * as React from 'react';
import {LoginSection} from "../login/login-section/LoginSection";
import {ExerciseSection} from "../course/exercise-section/ExerciseSection";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/es/AppBar';

export class RoutingContent extends React.Component {

    public render() {
        return (<Router>
            <div className="container">

                <AppBar position="static" style={{backgroundColor: 'white'}}>
                    <Toolbar>
                        <Typography variant="title" style={{flex: '1'}}>
                            {'{ }'} Code masters
                        </Typography>
                        <Link to="/"><Button color="primary">Exercise</Button></Link>
                        <Link to="/login"> <Button color="primary">Login</Button></Link>
                    </Toolbar>
                </AppBar>

                <Route exact={true} path="/" component={ExerciseSection}/>
                <Route path="/login" component={LoginSection}/>
            </div>
        </Router>);
    }
}