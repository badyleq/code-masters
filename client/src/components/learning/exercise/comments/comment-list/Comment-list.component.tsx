import * as React from "react";
import {codeMastersUITheme} from "../../../../App.theme";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import List from "@material-ui/core/List/List";

export class CommentList extends React.Component<any, any> {

    public render() {
        return (
            <div style={{padding: "20px", backgroundColor: codeMastersUITheme.background}}>

                <List>
                    <ListItem>
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                        <ListItemText primary="tresc komentarza" secondary="Jan 9, 2014"/>
                    </ListItem>
                    <li>
                        <Divider inset={true}/>
                    </li>
                    <ListItem>
                        <Avatar>
                            <WorkIcon/>
                        </Avatar>
                        <ListItemText primary="inny komentarz" secondary="Jan 7, 2014"/>
                    </ListItem>
                    <Divider inset={true} component="li"/>
                    <ListItem>
                        <Avatar>
                            <BeachAccessIcon/>
                        </Avatar>
                        <ListItemText primary="ble ble ble" secondary="July 20, 2014"/>
                    </ListItem>
                </List>
            </div>);
    }
}