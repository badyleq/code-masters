import * as React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import './Login.css';
import { Grid, Button, TextField, Divider, IconButton, Slide } from "@material-ui/core";
import Register from "../register/Register.component";

enum LoginPage {
    LOGIN,
    REGISTER
}

interface ILoginState {
    page: LoginPage
}

export class Login extends React.Component<{}, ILoginState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            page: LoginPage.LOGIN
        }
    }

    public render() {
        return (
            <div className="app-container login-box" style={{ backgroundColor: 'white' }}>
                <Slide direction="up" in={this.state.page === LoginPage.REGISTER} unmountOnExit={true}>
                    <Register onCancel={this.goToLogin} />
                </Slide>
                <Slide direction="up" in={this.state.page === LoginPage.LOGIN} mountOnEnter={true} unmountOnExit={true}>
                    <div>
                        <Typography variant="display2" className="light-font" gutterBottom={true}> Logowanie </Typography>
                        <Grid container={true} spacing={16}>
                            <Grid item={true} sm={12} style={{ textAlign: "right" }}>
                                <TextField
                                    placeholder="login"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth={true}
                                    margin="normal" />

                                <TextField
                                    placeholder="password"
                                    InputLabelProps={{ shrink: true }}
                                    type="password"
                                    fullWidth={true}
                                    margin="normal" />

                            </Grid>
                            <Grid container={true} spacing={0}>
                                <Grid item={true} sm={3}>
                                    <IconButton style={{ borderRadius: '10%', width: '35px' }}>
                                        <img width="32px" src="images/facebook.png" />
                                    </IconButton>
                                    <IconButton style={{ borderRadius: '10%', width: '35px' }}>
                                        <img width="32px" src="images/google-plus.png" />
                                    </IconButton>
                                </Grid>
                                <Grid item={true} sm={9} style={{ textAlign: "right" }} >
                                    <Button variant="flat" color="primary"  >forget password</Button>
                                    <Button variant="outlined" color="primary">start learning</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider style={{ marginTop: '3em' }} light={true} />
                        <Grid container={true} spacing={16}>
                            <Grid item={true} sm={12} style={{ textAlign: 'left' }} className="light-font">
                                <Typography variant="caption" className="light-font" gutterBottom={true}>
                                    Don't have an account? <Button color="primary" onClick={this.goToRegister}>Register fo free</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Slide>
            </div>
        );
    }

    private goToRegister = () => {
        this.setState({
            page: LoginPage.REGISTER
        });
    }

    private goToLogin = () => {
        this.setState({
            page: LoginPage.LOGIN
        });
    }
}