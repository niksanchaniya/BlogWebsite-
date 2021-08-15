import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";



const useStyles = makeStyles({
  component: {
    background: "#FFFFFF",
    color: "black",
    height: 64
  },
  container: {
    justifyContent: "center",
    '& > *': {
      padding: 20
    }
  },
  link: {
    textDecoration: 'none',
    color: "inherit"
  },

})

function Navbar() {
  const classes = useStyles();


  return (
    <>
      <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <Link to="/" className={classes.link}><Typography variant="h6" > Home </Typography></Link>
          <Link to='/about' className={classes.link}><Typography variant="h6" > About </Typography></Link>
          <Link to='/contact' className={classes.link}><Typography variant="h6" > Contact </Typography></Link>
          <Typography variant="h6" > Login </Typography>
        </Toolbar>
      </AppBar>
      
    </>
  );
}

export default Navbar;

