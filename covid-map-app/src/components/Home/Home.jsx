import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Paper, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import useStyles from './styles';

const Home = ({ }) => {
    const classes = useStyles();

    return(
        <main className= {classes.content}>
            <div className= {classes.toolbar}/>
            <Typography variant="h4" gutterBottom  align="center">
                    COVIDATA
            </Typography>
           

            
            <Typography variant="subtitle2" gutterBottom  align="center">
                <Button component={Link} variant="outlined" type="button" to="/map" >View the Covid-19 MAP</Button>
            </Typography>

        </main>
    )
}

export default Home;