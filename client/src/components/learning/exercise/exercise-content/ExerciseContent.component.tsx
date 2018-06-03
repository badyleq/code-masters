import * as React from "react";
import Highlight from "react-highlight";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {codeMastersUITheme} from "../../../App.theme";
import Scrollbars from "react-custom-scrollbars";

const javaCode = `public static void main(String[] args) {
    // your code 
}`;

interface IExerciseContentProps {
    bottomPanelSize: number
}

export class ExerciseContent extends React.Component<IExerciseContentProps, any> {

    public getCheckboxColor(value: number) {
        if (value === 0) {
            return green[500];
        }
        else if (value === 1) {
            return red[500];
        }

        return grey[500];
    }

    public render() {
        return (
            <Card
                style={{
                    lineHeight: "1.5em",
                    height: "calc(100%)",
                    backgroundColor: codeMastersUITheme.background,
                    color: codeMastersUITheme.font
                }}>
                <CardContent style={{lineHeight: "1.5em"}} id="exerciseContent">
                    <Grid container={true} spacing={16}>
                        <Grid item={true} xs={12} sm={12}>
                            Lesson 6/12
                        </Grid>
                        <Grid item={true} sm={10}>
                            <Typography variant="display1" gutterBottom={true} style={{color: codeMastersUITheme.font}}> Metoda
                                main </Typography>
                        </Grid>
                    </Grid>

                    <Scrollbars autoHeight={true} autoHeightMin={window.innerHeight - this.props.bottomPanelSize}>
                        <p>
                            Aplikacja zaimplementowana w języku Java to kolekcja klas. Każda z klas zawiera pewne
                            zmienne i
                            metody. Z pośród tych wszystkich klas i metod jedna klasa i jedna metoda jest
                            szczególna.
                            Jest
                            to metoda od której wszystko się zaczyna; metoda która wywoływana jest jako pierwsza,
                            gdy
                            uruchamiamy program. Metoda ta ma postać:
                        </p>
                        <Highlight language="java">{javaCode}</Highlight>
                        <p>
                            Metoda ta może być umieszczona w dowolnej klasie a nawet w kilku różnych klasach.
                            Uruchamiając
                            aplikację podajemy nazwę klasy której metoda main(…) ma być uruchomiona. Od metody
                            main(…)
                            tej
                            właśnie klasy rozpoczyna się wykonywanie kodu naszego programu.<br/><br/>
                        </p>
                        <Typography variant="headline" gutterBottom={true}> Do zrobienia: </Typography>
                        <List>
                            {[0, 1, 2, 3].map(value => (
                                <ListItem key={value} dense={true} button={true}>
                                    <Checkbox disabled={true} checked={value === 0}
                                              style={{color: this.getCheckboxColor(value)}}/>
                                    <ListItemText primary={`Line item ${value + 1}`}/>
                                    <Icon>help</Icon>
                                </ListItem>
                            ))}
                        </List>
                        <p>&nbsp;</p>
                    </Scrollbars>
                </CardContent>
            </Card>
        );
    }
}