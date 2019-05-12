import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FormatCurrency from 'react-format-currency';
import ReactCountryFlag from "react-country-flag";

import {withStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


import errorImg from '../../static/images/error.png';
import styles from './BalanceList.css';

class BalanceList extends Component {
  state = {
    error: false,
    message: '',
    balances: []
  };

  componentWillMount() {
    const {oib} = this.props;
    const instance = axios.create({
      baseURL: "http://localhost:8081",
      timeout: 1000,
      method: "GET"
    });
    instance.get("/balances/" + oib)
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  handleError = (response) => {
    this.setState({
      error: true,
      message: "Balances not found",
    });
  };

  handleResponse = (response) => {
    if (response.data) {
      this.setState({
        error: false,
        balances: response.data
      });
    }
  };

  render() {
    const {classes, history} = this.props;
    const {balances, error, message} = this.state;

    let body;
    if (error) {
      body = (
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={errorImg} title="Sad polar bear"/>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">Sorry</Typography>
            <Typography component="p">{message}</Typography>
          </CardContent>
        </Card>
      );
    } else {
      if (!balances) {
        body = <CircularProgress size={50}/>
      } else {
        body =
          <List>
            {balances.map((balance, idx) => {
              const balanceValue = <FormatCurrency currency={balance.currency} placeholder="0.00" disabled={true} value={balance.balance} className={classes.balance} />;
              return (<ListItem key={idx}>
                <Avatar>
                  <ReactCountryFlag code={balance.country} svg />
                </Avatar>
                <ListItemText primary={balanceValue} secondary={balance.iban}/>
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
              </ListItem>)
            })}
          </List>
      }
    }


    return (
      <div className={classes.root}>
        {body}
      </div>
    )
  }
}

BalanceList.propTypes = {
  classes: PropTypes.object,
  oib: PropTypes.string
};

export default withStyles(styles)(BalanceList);
