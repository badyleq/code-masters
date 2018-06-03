import * as React from "react";
import {codeMastersUITheme} from "../../../../App.theme";
import WorkIcon from "@material-ui/icons/Work";
import List from "@material-ui/core/List/List";
import {Comment} from "../comment/Comment.component";
import {COMMENTS_MOCK} from "../IComment";
import Scrollbars from "react-custom-scrollbars";
import AnswerComment from "../answer-comment/AnswerComment";

interface ICommentListState {
    height: number,
}

export class CommentList extends React.Component<any, ICommentListState> {
    private readonly bottomPanelTabsHeight = 150;

    constructor(props: any) {
        super(props);
        this.state = {
            height: this.props.height
        }
    }

    public render() {
        return (
            <div
                style={{
                    height: `${this.props.height - this.bottomPanelTabsHeight}px`,
                    padding: "20px",
                    backgroundColor: codeMastersUITheme.background,
                    overflowY: "auto"
                }}>

                <AnswerComment/>

                <Scrollbars autoHeightMin={Math.abs(this.props.height - 300)} autoHeight={true}>
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