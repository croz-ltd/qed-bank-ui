import React from "react";
import PropTypes from 'prop-types';

import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppToolbar from '../AppToolbar/AppToolbar';

import styles from "./Container.css";

const Container = ({classes, children}) => (
  <div>
    <AppToolbar/>
    <Grid container justify="center" className={classes.root} spacing={16}>
      <Grid item xs={6}>
        {children}
      </Grid>
    </Grid>
  </div>
);

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired
};

export default withStyles(styles)(Container);
