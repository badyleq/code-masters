import * as React from "react";
import Draft, { htmlToDraft } from "react-wysiwyg-typescript";
import { EditorState } from "draft-js";
import { Slide, IconButton, Icon, Typography, Divider, Grid, TextField, CardContent, Card } from "@material-ui/core";

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
            <Slide direction="up" in={true} mountOnEnter={true} unmountOnExit={true}>
                <div className="app-container" style={{ backgroundColor: "#f3f3f3" }}>
                    <Card className="disable-shadow">
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
                                <Divider light={true} />
                                <Grid item={true} sm={12}>
                                    <Typography variant="headline" gutterBottom={true}>
                                        Description
                                </Typography>
                                    <Draft editorState={this.state.editorState} onEditorStateChange={this.editState} />
                                </Grid>
                            </Grid>

                            <Grid container={true} spacing={24}>
                                <Grid item={true} sm={12}>
                                    <Typography variant="headline" gutterBottom={true}>
                                        Exercises
                                </Typography>
                                </Grid>
                                <Grid item={true} sm={3}>
                                    <Card>
                                        <CardContent>
                                            exercise 1
                                    </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} sm={3}>
                                    <Card>
                                        <CardContent>
                                            exercise 1
                                    </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} sm={3}>
                                    <IconButton>
                                        <Icon style={{ height: "100px" }}>add_box</Icon>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </Slide>
        );
    }
}