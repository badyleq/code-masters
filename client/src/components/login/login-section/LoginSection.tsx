import * as React from 'react';
import Card from '@material-ui/core/es/Card';
import CardContent from '@material-ui/core/es/CardContent';

export class LoginSection extends React.Component {

    public render() {
        return (
            <div className="app-container">
                <Card>
                    <CardContent style={{lineHeight: '1.5em'}}>
                        <h4>Login</h4>
                    </CardContent>
                </Card>
            </div>);
    }
}