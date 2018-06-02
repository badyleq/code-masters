import * as React from "react";
import Card from "@material-ui/core/es/Card";
import CardContent from "@material-ui/core/es/CardContent";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {codeMastersUITheme} from "../../App.theme";

export class Login extends React.Component {

    public render() {
        return (
            <div className="app-container">
                <Card>

                    <CardContent style={{lineHeight: "1.5em"}}>
                        <Typography variant="display1" gutterBottom={true}> Metoda main </Typography>
                        <Grid container={true} spacing={16}>
                            <Grid item={true} sm={6} style={{textAlign: "right"}}>
                                <TextField
                                    label="login"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth={true}
                                    margin="normal"
                                />

                                <TextField
                                    label="password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="password"
                                    fullWidth={true}
                                    margin="normal"
                                />

                                <TextField
                                    label="repeat password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="password"
                                    fullWidth={true}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item={true} sm={5} style={{borderLeft: `1px solid ${codeMastersUITheme.primary}`}}>
                                <IconButton>
                                    <img width="100%"
                                         src="https://www.ocadotechnology.com/wp-content/uploads/2017/07/gitlab-stacked_wm_no_bg-300x300.png"/>
                                </IconButton>
                                <IconButton>
                                    <img width="100%"
                                         src="https://i.pinimg.com/originals/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.png"/>
                                </IconButton>

                                <IconButton>
                                    <img width="100%"
                                         src="http://www.iconarchive.com/download/i99361/dtafalonso/android-lollipop/Google-plus.ico"/>
                                </IconButton>


                            </Grid>
                            <Grid container={true} spacing={0}>
                                <Grid item={true} sm={12} style={{textAlign: "left"}}>
                                    <Button variant="raised" color="primary">
                                        start learning
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>);
    }
}