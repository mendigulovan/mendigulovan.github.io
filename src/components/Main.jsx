import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import '../css/login.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"><Link to="/driver">
              <h3>Driver</h3>
          </Link></Button>
          <Button color="inherit"><Link to="/login">
              <h3>Login</h3>
              </Link></Button>

        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
    </div>
  );
}
Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
