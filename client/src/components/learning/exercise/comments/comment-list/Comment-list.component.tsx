import * as React from "react";
import {codeMastersUITheme} from "../../../../App.theme";
import {Comment} from "../comment/Comment.component";

export class CommentList extends React.Component<any, any> {

    public render() {
        return (
            <div style={{padding: "20px", backgroundColor: codeMastersUITheme.background}}>
                {[1, 2, 3]
                    .map(it =>
                        <div key={it}>
                            <Comment/>
                        </div>
                    )}
            </div>);
    }
}