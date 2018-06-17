import * as React from "react";
import Highlight from "react-highlight";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import { codeMastersUITheme } from "../../../App.theme";
import Scrollbars from "react-custom-scrollbars";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const javaCode = `public static void main(String[] args) {
    // your code 
}`;

interface IExerciseContentProps {
    bottomPanelSize: number
}

export class ExerciseContent extends React.Component<IExerciseContentProps, any> {
    public static getSteps() {
        return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
    }

    public static getStepContent(step: number) {
        switch (step) {
            case 0:
                return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
            case 1:
                return 'An ad group contains one or more ads which target a shared set of keywords.';
            case 2:
                return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
            default:
                return 'Unknown step';
        }
    }

    public state = {
        activeStep: 0,
    };

    public handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    public handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    public handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    public render() {
        const classes: any = this.props;
        const steps = ExerciseContent.getSteps();
        const { activeStep } = this.state;
        return (
            <Card
                style={{
                    lineHeight: "1.5em",
                    height: "calc(100%)",
                    backgroundColor: codeMastersUITheme.background,
                    color: codeMastersUITheme.font
                }}>
                <CardContent style={{ lineHeight: "1.5em" }} id="exerciseContent">
                    <Grid container={true} spacing={16}>
                        <Grid item={true} xs={12} sm={12}>
                            Lesson 6/12
                        </Grid>
                        <Grid item={true} sm={10}>
                            <Typography variant="display1" className="light-font" gutterBottom={true} style={{ color: codeMastersUITheme.font }}>
                                Metoda  main
                            </Typography>
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
                            właśnie klasy rozpoczyna się wykonywanie kodu naszego programu.<br /><br />
                        </p>
                        <Typography variant="headline" gutterBottom={true}> Do zrobienia: </Typography>
                        <div className={classes.root}>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                {steps.map((label: string, index: number) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                            <StepContent>
                                                <Typography>{ExerciseContent.getStepContent(index)}</Typography>
                                                <div className={classes.actionsContainer}>
                                                    <div>
                                                        <Button
                                                            disabled={activeStep === 0}
                                                            onClick={this.handleBack}
                                                            className={classes.button}
                                                        >
                                                            Back
                                                        </Button>
                                                        <Button
                                                            variant="flat"
                                                            color="primary"
                                                            onClick={this.handleNext}
                                                            className={classes.button}
                                                        >
                                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </StepContent>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length && (
                                <Paper square={true} elevation={0} className={classes.resetContainer}>
                                    <Typography>All steps completed - you&quot;re finished</Typography>
                                    <Button onClick={this.handleReset} className={classes.button}>
                                        Reset
                                    </Button>
                                </Paper>
                            )}
                        </div>
                    </Scrollbars>
                </CardContent>
            </Card>
        );
    }
}