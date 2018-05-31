import * as React from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";

export default class LeftMenu extends React.Component {
    public render() {
        return (
            <Drawer variant="permanent" style={{zIndex: -1000}}>
                <div style={{marginTop: "80px"}}>&nbsp;</div>

            </Drawer>
        );
    }
}