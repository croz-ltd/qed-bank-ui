import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import FormatCurrency from 'react-format-currency';
import useReactRouter from 'use-react-router';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import useAccountDetailsStyle from './useAccountDetailsStyle';

function BalanceRow({balance, classes, history, showActions}) {
  const currency = <FormatCurrency currency={balance.currency} placeholder="0.00" disabled={true} value={balance.amount}
                                   className={classes.balance}/>;
  return (
    <ListItem component="li">
      <Avatar component="div">
        <ReactCountryFlag code={balance.country} svg/>
      </Avatar>
      <ListItemText primary={currency} secondary={balance.iban}/>
      {showActions && (
        <div className={classes.rowActions}>
          <Avatar component="div" className={classes.avatarGreen}
                  onClick={() => history.push(`/transaction/${balance.iban}/add`)}>
            <ArrowUpwardIcon/>
          </Avatar>
          <Avatar component="div" className={classes.avatarRed}
                  onClick={() => history.push(`/transaction/${balance.iban}/withdraw`)}>
            <ArrowDownwardIcon/>
          </Avatar>
        </div>
      )}
    </ListItem>
  );
}

export default function AccountDetails({balances, showActions}) {
  const classes = useAccountDetailsStyle();
  const {history} = useReactRouter();
  return (
    <List component="ul">
      {balances.map((balance, idx) => (
        <BalanceRow key={idx} balance={balance} classes={classes} history={history} showActions={showActions}/>
      ))}
    </List>
  );
}
