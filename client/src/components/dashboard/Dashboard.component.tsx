import * as React from 'react';
import { ReactNode } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardActions, CardMedia, Input, InputAdornment, Icon, Slide } from '@material-ui/core';
import Scrollbars from "react-custom-scrollbars";
import { availableCourses } from '../mock';
import './dashboard.css';
import { Link } from "react-router-dom";

interface IDashboardState {
    searchFilter: string
}

export default class Dashboard extends React.Component<{}, IDashboardState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            searchFilter: ''
        }
    }

    public render(): ReactNode {
        return (
            <Slide direction="up" in={true} mountOnEnter={true} unmountOnExit={true}>
                <Scrollbars autoHeight={true} autoHeightMin={window.innerHeight - 100} >
                    <div className="app-container ">
                        <Card className="disable-shadow">
                            <CardContent>

                                <Grid container={true} spacing={16}>
                                    <Grid item={true} xs={12} md={6} lg={4}>
                                        <div style={{ width: '100%', textAlign: 'center' }}>
                                            <img src="images/welcome-logo.png" style={{ maxHeight: 'calc(40vh)', height: 'calc(15em)' }} />
                                        </div>
                                    </Grid>

                                    <Grid item={true} xs={12} md={6} lg={8}>
                                        <Typography variant="display2" className="light-font" gutterBottom={true} style={{ paddingTop: '1em' }}>
                                            Welcome on code masters. It is your way to fast learning
                                </Typography>
                                        <p className="light-font-p light-font">
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        </p>
                                    </Grid>

                                    {/* <Grid item={true} md={12} xs={12}>
                                        <Typography variant="display2" className="light-font" gutterBottom={true} >
                                            Our courses
                                        </Typography>
                                    </Grid> */}

                                    <Grid item={true} md={12} xs={12} style={{ marginTop: '1em', marginBottom: '1em' }}>
                                        <Input
                                            style={{
                                                width: '100%',
                                                fontSize: '1.8em'
                                            }}
                                            value={this.state.searchFilter}
                                            onChange={this.onSearchFilterChange}
                                            className="light-font-p"
                                            placeholder="What are you looking for?"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Icon style={{ opacity: 0.5 }}>search</Icon>
                                                </InputAdornment>
                                            }
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>

                                    {availableCourses
                                        .filter(course => course.title.toUpperCase().indexOf(this.state.searchFilter.toUpperCase()) !== -1)
                                        .map(course => (
                                            <Grid key={course.id} item={true} xs={12} sm={6} md={4} lg={3}>
                                                <Card className="course-card">
                                                    <CardMedia
                                                        style={{ height: 'calc(10em)' }}
                                                        image={course.img}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom={true} variant="headline" component="h2">
                                                            {course.title}
                                                        </Typography>
                                                        <Typography component="p" className="light-font-p light-font">
                                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                            across all continents except Antarctica
                                                    </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Link to={`/course/${course.id}`} style={{ textDecoration: "none" }}>
                                                            <Button size="small" color="primary">Details</Button>
                                                        </Link>
                                                 
                                                        <Button size="small" color="primary">Enroll</Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </Scrollbars>
            </Slide>
        );
    }

    private onSearchFilterChange = (event: any) => {
        this.setState({
            searchFilter: event.target.value
        });
    }
}