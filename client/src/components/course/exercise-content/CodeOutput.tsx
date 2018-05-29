import * as React from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Icon from '@material-ui/core/es/Icon';
import IconButton from '@material-ui/core/es/IconButton';
import CardHeader from '@material-ui/core/es/CardHeader';

export class CodeOutput extends React.Component {
    public render() {
        return (
            <Card style={{width: '100%', marginTop: '1em'}}>
                <CardHeader style={{backgroundColor: '#333333', color: '#f3f3f3'}}
                            action={
                                <IconButton>
                                    <Icon style={{color: 'red'}}>close</Icon>
                                </IconButton>
                            }
                            subheader="execution result:"/>

                <CardContent style={{backgroundColor: '#333333'}}>
                    <Typography style={{color: '#f3f3f3'}} variant="body2" gutterBottom={true}>
                        > hello world
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}