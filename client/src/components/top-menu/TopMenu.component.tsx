import * as React from 'react';
import {ReactNode} from 'react';
import Button from '@material-ui/core/Button/Button';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Typography from '@material-ui/core/Typography/Typography';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';

export default class TopMenu extends React.Component {
    public render(): ReactNode {
        return (
            <AppBar position="static" style={{backgroundColor: 'white'}}>
                <Toolbar>
                    <Typography variant="title" style={{flex: '1', alignItems: 'center'}}>

                        <span className="fontHallelujah rowCentered" style={{fontSize: '1.2em'}}>
                             <img src="images/master-of-ceremonies.svg" height="45px"/>
                            &nbsp;Code masters
                        </span>
                    </Typography>

                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Button color="primary">Exercise</Button>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <Button color="primary">Login</Button>
                    </Link>
                    <Link to="/dashboard" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">
                            dashboard
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}