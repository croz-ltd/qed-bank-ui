import React from "react";
import PropTypes from 'prop-types';

import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';

import styles from "./AppToolbar.css";

const AppToolbar = ({classes}) => (
  <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex} href={"/"}>
        <Button href="/" className={classes.button}>
          QED Bank
        </Button>
      </Typography>
    </Toolbar>
  </AppBar>
);

AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppToolbar);
