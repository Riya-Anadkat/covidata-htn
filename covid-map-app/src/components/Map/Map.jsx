import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Paper, Button } from '@material-ui/core';

import useStyles from './styles';

const Map = ({ }) => {
    const classes = useStyles();


    

    return(
        <main className= {classes.content}>
            <div className= {classes.toolbar}/>
                <Typography variant="h4" gutterBottom  align="center">
                        MAP 
                </Typography>


        </main>
    )
}

export default Map;