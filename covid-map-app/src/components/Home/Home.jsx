import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Paper, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import useStyles from './styles';
import logo from '../../assets/logo.png';
import welcome from '../../assets/Welcome.png';


const Home = ({ }) => {
    const classes = useStyles();

    return(
        <main className= {classes.content}>
            <div className= {classes.toolbar}/>
            {/* <Typography variant="h3"   align="center" color="textPrimary">
                    COVIDATA
            </Typography> */}
            <Typography variant="h1" align="center">
                <img src={welcome} align="center" alt="logo" height="115px"  />
            </Typography>
            <Typography variant="h1" gutterBottom  align="center">
                <img src={logo} align="center" alt="logo" height="255px"  />
            </Typography>

            <Typography variant="h3" gutterBottom  align="center" >
                <Button component={Link} color="inherit" fullWidth="true" variant="outlined" size="large" type="button" to="/graph" >View the Covid-19 GRAPH</Button>
                <Button component={Link} color="inherit" fullWidth="true" variant="outlined" size="large" type="button" to="/map" >View the Covid-19 MAP</Button>
            </Typography>
        
        </main>
    )
}

export default Home;