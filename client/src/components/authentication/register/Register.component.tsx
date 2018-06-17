import * as React from "react";
import { Typography, Grid, TextField, Button, Slide } from "@material-ui/core";
import Scrollbars from "react-custom-scrollbars";

enum RegisterPage {
    TERMS_OF_USE,
    FILL_IN
}
interface IRegisterState {
    page: RegisterPage
}

interface IRegisterProps {
    onCancel: () => void,

}

export default class Register extends React.Component<IRegisterProps, IRegisterState> {

    constructor(props: IRegisterProps) {
        super(props);

        this.state = {
            page: RegisterPage.FILL_IN
        };
    }

    public render() {
        return (
            <div>
                <Typography variant="display2" className="light-font" gutterBottom={true}> Registration </Typography>
                <Slide direction="up" in={this.state.page === RegisterPage.TERMS_OF_USE} mountOnEnter={false} unmountOnExit={true}>
                    <div>
                        <Scrollbars autoHeight={true} height="400">
                            <p className="term-of-user light-font">
                                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum </p>
                            <p className="term-of-user light-font">
                                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum </p>
                            <p className="term-of-user light-font">
                                3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum </p>
                        </Scrollbars>
                        <Grid container={true} spacing={0}>
                                <Grid item={true} sm={12} style={{ textAlign: "right", marginTop: '1em' }} >
                                    <Button variant="outlined" color="primary" onClick={this.onNext}>accept</Button>
                                </Grid>
                            </Grid>
                    </div>
                </Slide>
                <Slide direction="up" in={this.state.page === RegisterPage.FILL_IN} mountOnEnter={true}>
                    <div>
                        <Grid container={true} spacing={16}>
                            <Grid item={true} sm={12} style={{ textAlign: "right" }}>
                                <TextField
                                    placeholder="login"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth={true}
                                    margin="normal" />

                                <TextField
                                    type="email"
                                    placeholder="email"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth={true}
                                    margin="normal" />

                                <TextField
                                    placeholder="password"
                                    InputLabelProps={{ shrink: true }}
                                    type="password"
                                    fullWidth={true}
                                    margin="normal" />

                                <TextField
                                    placeholder="repeat password"
                                    InputLabelProps={{ shrink: true }}
                                    type="password"
                                    fullWidth={true}
                                    margin="normal" />

                            </Grid>
                            <Grid container={true} spacing={0}>
                                <Grid item={true} sm={3}>
                                    <Button variant="flat" color="primary" onClick={this.onCancel}>cancel</Button>
                                </Grid>
                                <Grid item={true} sm={9} style={{ textAlign: "right" }} >
                                    <Button variant="outlined" color="primary" onClick={this.onNext}>next</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                </Slide>
            </div>
        );
    }

    private onCancel = () => {
        this.props.onCancel();
    }

    private onNext = () => {
        this.setState({
            page: RegisterPage.TERMS_OF_USE
        });
    }
}