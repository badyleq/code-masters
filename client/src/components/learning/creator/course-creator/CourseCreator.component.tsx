import * as React from "react";
import Draft, {htmlToDraft} from "react-wysiwyg-typescript";
import {EditorState} from "draft-js";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/Typography/Typography";

export default class CourseCreator extends React.Component {
    public state = {
        buffer: 10,
        completed: 40,
        editorState: htmlToDraft("Your html contents"),
        value: 0
    };

    public editState = (newState: EditorState) => {
        this.setState(state => ({
            editorState: newState
        }));
    };

    public render() {
        return (
            <div className="app-container">
                <Card>
                    <CardContent>
                        <Grid container={true} spacing={24}>
                            <Grid item={true} sm={12}>
                                <Typography variant="headline" gutterBottom={true}>
                                    Course name
                                </Typography>
                                <TextField
                                    placeholder="your magic framework course name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth={true}
                                    margin="normal"
                                />
                            </Grid>
                            <Divider light={true}/>
                            <Grid item={true} sm={12}>
                                <Typography variant="headline" gutterBottom={true}>
                                    Description
                                </Typography>
                                <Draft editorState={this.state.editorState} onEditorStateChange={this.editState}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}