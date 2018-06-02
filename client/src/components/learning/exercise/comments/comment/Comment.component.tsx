import * as React from "react";
import "../Comments.css";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";

export class Comment extends React.Component {

    public render() {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary">
                        Word of the Day
                    </Typography>
                    <Typography variant="headline" component="h2">
                        aaaa
                    </Typography>
                    <Typography color="textSecondary">
                        adjective
                    </Typography>
                    <Typography component="p">
                        well meaning and kindly.<br/>
                        {"\"a benevolent smile\""}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}