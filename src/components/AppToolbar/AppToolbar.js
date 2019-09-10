import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';

import useAppToolbarStyles from "./AppToolbar.css";
import qedLogo from "../../static/images/qed-logo.png";

export default function AppToolbar() {
  const classes = useAppToolbarStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Button href="/">
          <img src={qedLogo} alt="QED Bank 2019"/>
        </Button>
      </Toolbar>
    </AppBar>
  )
}