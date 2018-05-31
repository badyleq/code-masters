import * as React from 'react';
import {RefObject} from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Icon from '@material-ui/core/es/Icon';
import IconButton from '@material-ui/core/es/IconButton';
import CardHeader from '@material-ui/core/es/CardHeader';
import {red} from "@material-ui/core/colors";
import ExecutionResultModal from '../../../common/execution-result/ExecutionResultModal.component'
import {ColorWeight, ExecutionStatus} from "../../../common/execution-result/ExecutionResult";
import {Color} from "@material-ui/core";

export default class CodeOutput extends React.Component {
    public myRef: RefObject<ExecutionResultModal>;
    private color: Color = red;

    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
    }

    public handleOpen = () => {
        if (this.myRef.current) {
            this.myRef.current.handleOpen();
        }
    };

    public render() {
        return (
            <Card style={{width: '100%', marginTop: '1em'}}>
                <CardHeader style={{
                    backgroundColor: this.color[ColorWeight.TOOLBAR_BORDER],
                    color: this.color[ColorWeight.FONT],
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    fontSize: '1.1em'
                }}
                            title={<div style={{color: 'white'}}> Execution result </div>}
                            action={
                                <div>
                                    <IconButton>
                                        <Icon style={{color: 'white'}} onClick={this.handleOpen}>fullscreen</Icon>
                                    </IconButton>
                                    <IconButton>
                                        <Icon style={{color: 'white'}}>close</Icon>
                                    </IconButton>
                                </div>
                            }/>

                <CardContent style={{backgroundColor: this.color[ColorWeight.BACKGROUND]}}>
                    <Typography style={{
                        color: this.color[ColorWeight.FONT],
                        fontSize: '1.0em'
                    }}
                                variant="body2" gutterBottom={true}>
                        > hello world
                    </Typography>
                </CardContent>

                <ExecutionResultModal status={ExecutionStatus.ERROR} ref={this.myRef}/>
            </Card>
        );
    }
}