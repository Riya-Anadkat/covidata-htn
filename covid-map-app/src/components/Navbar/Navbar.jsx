import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
// import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';


// import logo from '../../assets/logo.png'

const Navbar = ({  }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" color="inherit" >
                <Toolbar>
                    <Typography component={Link} to="/" variant="subtitle1" color="inherit">
                            Home
                    </Typography>
                    <div className={classes.grow} />
                    <Typography component={Link} to="/map" variant="subtitle1" color="inherit">
                            View Map
                    </Typography>
                    
                        

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
