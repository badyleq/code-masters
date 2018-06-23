import * as React from 'react';
import { ReactNode } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardActions, CardMedia, Input, InputAdornment, Icon, Slide } from '@material-ui/core';
import Scrollbars from "react-custom-scrollbars";

export default class Dashboard extends React.Component {
    private readonly tileData = [
        {
            id: 1,
            img: 'https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Java.png',
            title: 'Java 8',
            author: 'author',
            cols: 1,
        },
        {
            id: 2,
            img: 'https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/sass-512.png',
            title: 'Sass',
            author: 'author',
            cols: 1,
        }, {
            id: 3,
            img: 'https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-512.png',
            title: 'Node.js',
            author: 'author',
            cols: 1,
        },
        {
            id: 4,
            img: 'https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-symbol-512.png',
            title: 'Angular 7',
            author: 'author',
            cols: 1,
        },
        {
            id: 5,
            img: 'https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-512.png',
            title: 'Angular.js',
            author: 'author',
            cols: 1,
        },
        {
            id: 6,
            img: 'https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/less-512.png',
            title: 'Less',
            author: 'author',
            cols: 1,
        }
    ];

    public render(): ReactNode {
        return (
            <Slide direction="up" in={true} mountOnEnter={true} unmountOnExit={true}>
                <Scrollbars autoHeight={true} autoHeightMin={window.innerHeight - 100} >
                    <div className="app-container " style={{ marginTop: '1em' }}>
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

                                    <Grid item={true} md={12} xs={12}>
                                        <Typography variant="display2" className="light-font" gutterBottom={true} >
                                            Our courses
                                        </Typography>
                                    </Grid>

                                    <Grid item={true} md={12} xs={12}>
                                        <Input
                                            style={{ width: '100%' }}
                                            className="light-font"
                                            defaultValue="Find your course"
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

                                    {this.tileData.map(tile => (
                                        <Grid key={tile.id} item={true} xs={12} sm={6} md={4} lg={3}>
                                            <Card >
                                                <CardMedia
                                                    style={{ height: 'calc(10em)' }}
                                                    image={tile.img}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom={true} variant="headline" component="h2">
                                                        {tile.title}
                                                    </Typography>
                                                    <Typography component="p" className="light-font-p light-font">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" color="primary">Details</Button>
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
}