import * as React from "react";
import {codeMastersUITheme} from "../../../../App.theme";
import WorkIcon from "@material-ui/icons/Work";
import List from "@material-ui/core/List/List";
import {Comment} from "../comment/Comment.component";
import {COMMENTS_MOCK} from "../IComment";
import Scrollbars from "react-custom-scrollbars";
import AnswerComment from "../answer-comment/AnswerComment";

export class CommentList extends React.Component<any, any> {

    public render() {
        return (
            <div style={{height: "100%", padding: "20px", backgroundColor: codeMastersUITheme.background}}>
                <AnswerComment/>
                <Scrollbars autoHeight={true} autoHeightMin={300}>
                    <List>
                        {COMMENTS_MOCK.map((comment, index) =>
                            <Comment key={index}
                                     userName={comment.userName}
                                     subComment={comment.subComment}
                                     content={comment.content}
                                     avatar={<WorkIcon/>}/>
                        )}
                    </List>
                </Scrollbars>
            </div>
        );
    }
}