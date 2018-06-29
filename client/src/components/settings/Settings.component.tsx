import * as React from "react";
import { exampleRandomService } from "../common/ServiceConfiguration";
import ServiceCaller from "../common/service/ServiceCaller";
import { Slide, CardContent, Grid, Card, Typography, Avatar } from "@material-ui/core";


interface ISettingsState {
    userAvatar: string | undefined
}

export default class Settings extends React.Component<{}, ISettingsState> {
    constructor(props: any) {
        super(props);

        this.state = {
            userAvatar: undefined
        };
    }
    public componentDidMount() {
        new ServiceCaller()
            .withPath("/api")
            .withServiceConfiguration(exampleRandomService)
            .get<any>()
            .then((response: any /*TODO: dodac interfejs z typem odpowiedzi*/) => this.setState({ userAvatar: response.results[0].picture.medium }));
    }

    public render() {
        return (
            <Slide direction="up" in={true} mountOnEnter={true} unmountOnExit={true}>
                <div className="app-container" style={{ backgroundColor: "#f3f3f3" }}>
                    <Card className="disable-shadow">
                        <CardContent>
                            <Grid container={true} spacing={24}>
                                <Grid item={true} sm={12}>
                                    <Typography variant="headline" className="font-light" gutterBottom={true}>Accounts settings</Typography>
                                    {this.state.userAvatar && <Avatar src={this.state.userAvatar} />}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </Slide>
        );
    }
}