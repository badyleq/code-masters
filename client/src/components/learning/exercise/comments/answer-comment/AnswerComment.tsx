import * as React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import '../Comments.css'

export default class AnswerComment extends React.Component {

    public render() {
        return (
            <div className="answer-box">
                <TextField placeholder="type what do you think" style={{width: "100%"}}/>

                <div style={{width: "100%", textAlign: "right", marginTop: "0.5em"}}>
                    <Button color="primary" style={{width: "auto"}}>
                        <Icon>send</Icon> send
                    </Button>
                </div>
            </div>
        );
    }
}