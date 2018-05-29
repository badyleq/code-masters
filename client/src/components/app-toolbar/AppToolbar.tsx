import * as React from 'react';
import {ReactNode} from 'react';
import Button from "@material-ui/core/Button/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

export default class AppToolbar extends React.Component {
    public render(): ReactNode {
        return (
            <AppBar position="static" style={{backgroundColor: 'white'}}>
                <Toolbar>
                    <Typography variant="title" style={{flex: '1'}}>
                        {'{ }'} Code masters
                    </Typography>
                    <Link to="/"><Button color="primary">Exercise</Button></Link>
                    <Link to="/login"> <Button color="primary">Login</Button></Link>
                </Toolbar>
            </AppBar>
        );
    }
}