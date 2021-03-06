import * as React from "react";
import { ReactNode } from "react";
import Button from "@material-ui/core/Button/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Typography from "@material-ui/core/Typography/Typography";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import { codeMastersUITheme } from "../../App.theme";
import { IconButton, Icon } from "@material-ui/core";

export default class TopMenu extends React.Component {
    public render(): ReactNode {
        return (
            <AppBar
                id="top-menu"
                position="static"
                className="disable-shadow"
                style={{
                    // borderBottom: "1px solid #2196f3",
                    backgroundColor: codeMastersUITheme.background,
                    color: codeMastersUITheme.font,
                    boxShadow: 'none'
                }}>
                <Toolbar>
                    <Typography variant="title" style={{ flex: "1", alignItems: "center" }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <span className="fontHallelujah rowCentered" style={{ fontSize: "1.2em", color: codeMastersUITheme.font }}>
                                <img
                                    src={codeMastersUITheme.themeId === "light" ? "images/logo-black.svg" : "images/logo-white.svg"}
                                    height="45px" />
                                &nbsp;Code masters
                        </span>
                        </Link>
                    </Typography>

                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <Button style={{ color: codeMastersUITheme.font, borderColor: codeMastersUITheme.primary }}>Dashboard</Button>
                    </Link>

                    <Link to="/course-creator" style={{ textDecoration: "none" }}>
                        <Button style={{ color: codeMastersUITheme.font }}>create course</Button>
                    </Link>
                    <Link to="/exercise" style={{ textDecoration: "none" }}>
                        <Button style={{ color: codeMastersUITheme.font }} color="primary">Exercise</Button>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="primary" style={{ color: codeMastersUITheme.font }}>Login</Button>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: "none" }}>
                        <IconButton color="primary">
                            <Icon>settings</Icon>
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar >
        );
    }
}