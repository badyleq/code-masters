import * as React from "react";
import {ReactNode} from "react";
import {codeMastersUITheme} from "../../App.theme";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Slide from "@material-ui/core/Slide/Slide";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Icon from "@material-ui/core/Icon/Icon";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}

interface IModalWrapperProps {
    modalTitle: string,
    content: ReactNode
}

interface IModalWrapperState {
    showFullScreen: boolean
}

/**
 * Komponent pozwala wyswietlac kontent w modalce na pelnym ekranie.
 */
export class ModalWrapper extends React.Component<IModalWrapperProps, IModalWrapperState> {
    public state = {
        showFullScreen: false,
    };

    public handleOpen = () => {
        this.setState({showFullScreen: true});
    };

    public handleClose = () => {
        this.setState({showFullScreen: false});
    };

    public render() {
        return (
            <div>
                {!this.state.showFullScreen && (<div>{this.props.content}</div>)}
                <Dialog
                    fullScreen={true}
                    open={this.state.showFullScreen}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}>
                    <AppBar style={{textAlign: "right", backgroundColor: codeMastersUITheme.background, boxShadow: 'none'}}>
                        <Toolbar style={{backgroundColor: codeMastersUITheme.background}}>
                            <Typography variant="title" style={{color: codeMastersUITheme.font, textAlign: "left", flex: 1}}>
                                {this.props.modalTitle}
                            </Typography>
                            <IconButton onClick={this.handleClose}>
                                <Icon style={{color: codeMastersUITheme.font}}>close</Icon>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <CardHeader
                        style={{
                            backgroundColor: codeMastersUITheme.background,
                            color: codeMastersUITheme.font,
                            borderBottom: `1px solid ${codeMastersUITheme.primary}`
                        }}
                        action={
                            <IconButton>
                                <Icon style={{color: "red"}}>close</Icon>
                            </IconButton>
                        }/>

                    <CardContent style={{backgroundColor: codeMastersUITheme.background, height: "100%"}}>
                        {this.props.content}
                    </CardContent>
                </Dialog>
            </div>
        );
    }
}