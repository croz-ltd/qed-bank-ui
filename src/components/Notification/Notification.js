import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {withStyles} from "@material-ui/core/styles";
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

import styles from './Notification.css'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

class Notification extends Component {
  render() {
    let {classes, className, variant, message} = this.props;
    const Icon = variantIcon[variant];

    return (
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {message}
        </span>
        }
      />
    )
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
};

export default withStyles(styles)(Notification);
