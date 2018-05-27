import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/es/AppBar';


export default class MainAppToolbar extends React.Component<any, any> {

    public render() {
   //     const primaryToolbarColor = grey[50];

        return (
            <AppBar position="static" style={{ backgroundColor: 'white'}}>
                <Toolbar>
                    <Typography variant="title" style={{flex: '1'}}>
                        {'{ }'} Code masters
                    </Typography>
                    <Button color="primary">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}