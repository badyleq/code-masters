import * as React from 'react';
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";

export class CodeOutput extends React.Component {
    public render() {
        return (
            <Card style={{width: '100%', marginTop: '1em'}}>
                <CardContent style={{backgroundColor: '#333333'}}>
                    <Typography style={{color: '#f3f3f3'}} variant="body2" gutterBottom={true}>
                        > hello world
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}