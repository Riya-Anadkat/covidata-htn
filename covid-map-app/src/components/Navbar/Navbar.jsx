import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
// import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';
import logo from '../../assets/logo2.png'
import graph from '../../assets/Graph.png'
import map from '../../assets/Map.png'

// import logo from '../../assets/logo.png'

const Navbar = ({  }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" color="inherit" >
                <Toolbar>
                    <Typography component={Link} to="/" variant="subtitle1" color="inherit" className={classes.title}>
                            
                    <img src={logo} alt="logo" height="35px" className={classes.image} />
                    
                    </Typography>
                    <div className={classes.grow} />
                    <Typography component={Link} to="/graph" variant="subtitle1" color="inherit" className={classes.title}>
                        <img src={graph} alt="logo" height="60px" className={classes.image} />
                    </Typography>
                    
                    <Typography component={Link} to="/map" variant="subtitle1" color="inherit" className={classes.title}>
                    <img src={map} alt="logo" height="60px" className={classes.image} />
                 
                    </Typography>
                    
                        

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
