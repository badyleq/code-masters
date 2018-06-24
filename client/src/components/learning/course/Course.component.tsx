import * as React from "react";
import { RouteComponentProps } from "react-router";
import ICourse from "./ICourse";
import { availableCourses } from "../../mock";
import { Slide, Typography } from '@material-ui/core'

interface ICourseProps {
    match: RouteComponentProps<any>
}

interface ICourseState {
    course: ICourse
}

export default class Course extends React.Component<ICourseProps, ICourseState> {

    public constructor(props: ICourseProps) {
        super(props);

        const routerMatch: any = this.props.match;
        const selectedCourse = availableCourses.find(it => it.id === +routerMatch.params.id);

        if (selectedCourse) {
            this.state = {
                course: selectedCourse
            };
        }

    }

    public render() {
        return (
            <Slide direction="up" in={true} mountOnEnter={true} unmountOnExit={true}>
                <div className="app-container">
                    <Typography variant="display2" className="light-font" gutterBottom={true} style={{ paddingTop: '1em' }}>{this.state.course.title}</Typography>
                </div>
            </Slide>
        );
    }

} 