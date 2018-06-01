import * as React from "react";
import {ReactNode} from "react";
import Button from "@material-ui/core/Button/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import {codeMastersUITheme} from "../../App.theme";

export default class TopMenu extends React.Component {
    public render(): ReactNode {
        return (
            <AppBar position="static" style={{backgroundColor: codeMastersUITheme.background, color: codeMastersUITheme.font}}>
                <Toolbar>
                    <Typography variant="title" style={{flex: "1", alignItems: "center"}}>

                        <span className="fontHallelujah rowCentered" style={{fontSize: "1.2em", color: codeMastersUITheme.font}}>
                                   <img
                                       src={codeMastersUITheme.themeId === "light" ? "images/logo-black.svg" : "images/logo-white.svg"}
                                       height="45px"/>
                            &nbsp;Code masters
                        </span>
                    </Typography>

                    <Link to="/course-creator" style={{textDecoration: "none"}}>
                        <Button style={{color: codeMastersUITheme.font}}>create course</Button>
                    </Link>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Button style={{color: codeMastersUITheme.font}} color="primary">Exercise</Button>
                    </Link>
                    <Link to="/login" style={{textDecoration: "none"}}>
                        <Button style={{color: codeMastersUITheme.font}} color="primary">Login</Button>
                    </Link>
                    <Link to="/dashboard" style={{textDecoration: "none"}}>
                        <Button style={{color: codeMastersUITheme.font, borderColor: codeMastersUITheme.primary}}
                                variant="outlined">Dashboard</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}