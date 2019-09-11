import React from 'react';
import Grid from '@material-ui/core/Grid';

import AppToolbar from '../AppToolbar/AppToolbar';
import PropTypes from "prop-types";

export default function Container({children}) {
  return (
    <div>
      <AppToolbar/>
      <Grid container justify="center" spacing={10}>
        <Grid item xs={6}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.array.isRequired
};
