import React from 'react';
import PropTypes from 'prop-types';
import FormatCurrency from 'react-format-currency';
import ReactCountryFlag from "react-country-flag";

import {withStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import styles from "./AccountDetails.css";

const AccountDetails = ({classes, balances, history, showActions}) => (
  <List>
    {balances.map((balance, idx) => {
      const balanceValue = <FormatCurrency currency={balance.currency} placeholder="0.00" disabled={true} value={balance.balance} className={classes.balance}/>;
      return (<ListItem key={idx}>
        <Avatar>
          <ReactCountryFlag code={balance.country} svg/>
        </Avatar>
        <ListItemText primary={balanceValue} secondary={balance.iban}/>
        {showActions ? (
          <div>
            <div>
              <Avatar className={classes.avatarGreen} onClick={() => history.push('/transaction/' + balance.iban + '/add')}>
                <ArrowUpwardIcon/>
              </Avatar>
            </div>
            <div>
              <Avatar className={classes.avatarRed} onClick={() => history.push('/transaction/' + balance.iban + '/withdraw')}>
                <ArrowDownwardIcon/>
              </Avatar>
            </div>
          </div>) : null}
      </ListItem>)
    })}
  </List>
);

AccountDetails.propTypes = {
  classes: PropTypes.object,
  balances: PropTypes.array,
  history: PropTypes.object,
  showActions: PropTypes.bool,
};

export default withStyles(styles)(AccountDetails);
