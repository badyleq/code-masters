import * as React from "react";
import {ReactNode} from "react";
import "../Comments.css";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider/Divider";
import IComment from "../IComment";
import WorkIcon from "@material-ui/icons/Work";
import {codeMastersUITheme} from "../../../../App.theme";
import Button from "@material-ui/core/Button/Button";
import AnswerComment from "../answer-comment/AnswerComment";
import Collapse from "@material-ui/core/Collapse/Collapse";

interface ICommentProps {
    content: ReactNode,
    avatar: ReactNode,
    userName: string,
    subComment?: IComment[]
}

interface ICommentState {
    showAnswerTextField: boolean
}

export class Comment extends React.Component<ICommentProps, ICommentState> {
    public state = {
        showAnswerTextField: false
    };

    public render(): any {
        return (
            <div className="comment">
                <ListItem>
                    <Avatar>
                        {this.props.avatar}
                    </Avatar>
                    <ListItemText
                        style={{color: codeMastersUITheme.font}}
                        primary={this.props.content}
                        secondary={
                            <span>
                                {`${this.props.userName} ( Jan 7, 2014)`}
                                <Button color="primary" onClick={this.handleAnswer}> answer </Button>
                            </span>
                        }/>
                </ListItem>

                <Collapse mountOnEnter={true} timeout={{enter: 100, exit: 1000}} in={this.state.showAnswerTextField}>
                    <AnswerComment/>
                </Collapse>

                <Divider inset={true}/>

                {this.props.subComment && this.props.subComment.map((comment, index) => (
                    <Comment key={index}
                             userName={comment.userName}
                             subComment={comment.subComment}
                             content={comment.content}
                             avatar={<WorkIcon/>}/>
                ))}
            </div>
        );
    }

    private handleAnswer = () => {
        this.setState({
            showAnswerTextField: !this.state.showAnswerTextField
        });
    }
}