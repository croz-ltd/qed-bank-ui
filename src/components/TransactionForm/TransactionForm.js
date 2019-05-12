import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FormatCurrency from 'react-format-currency';

import {withStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AccountDetails from "../../components/AccountDetails/AccountDetails";

import errorImg from '../../static/images/error.png';
import styles from './TransactionForm.css';

class TransactionForm extends Component {
  state = {
    loading: true,
    error: false,
    message: '',
    balance: {},
    amount: '',
    serviceAvailable: true,
  };

  componentWillMount() {
    const {iban} = this.props;
    const instance = axios.create({
      baseURL: "http://localhost:8081",
      timeout: 1000,
      method: "GET"
    });
    instance.get("/balance/" + iban)
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  handleError = (response) => {
    this.setState({
      loading: false,
      error: true,
      message: "Balances not found",
      balance: {}
    });
  };

  handleResponse = (response) => {
    if (response.data) {
      this.setState({
        loading: false,
        error: false,
        balance: response.data
      });
    }
  };

  handleInputChange = name => event => {
    this.setState({
      [name]: event.value,
    });
  };

  performTransaction = (type, balance, history) => {
    const instance = axios.create({
      baseURL: "http://localhost:8081",
      timeout: 1000,
      method: "POST"
    });
    instance.post("/transaction/" + type, {
      iban: this.state.balance.iban,
      amount: this.state.amount,
    }).then(this.handleTransactionResponse(balance, history))
  };

  handleTransactionResponse = (balance, history) => (response) => {
    console.log("Response", response.data);
    if (response.data.success) {
      this.setState({
        serviceAvailable: true,
      });
      history.push('/balances/' + balance.oib);
    } else {
      this.setState({
        serviceAvailable: false,
      });
    }
  };

  render() {
    const {classes, type, history} = this.props;
    const {loading, balance, error, message, amount, serviceAvailable} = this.state;

    if(loading){
      return <CircularProgress size={50}/>
    }

    let accountDetails;
    let form;
    let notice;
    if(!serviceAvailable){
      notice = <div className={classes.notavailable}>Currently is not possible to execute transaction. Please try again.</div>
    }
    if (error) {
      form = (
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={errorImg} title="Sad polar bear"/>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">Sorry</Typography>
            <Typography component="p">{message}</Typography>
          </CardContent>
        </Card>
      );
    } else {
      accountDetails = <AccountDetails balances={[balance]} history={history} />
      form = (
        <div>
          {notice}
          <h2>{type === 'add' ? "Adding funds" : "Withdraw funds"}</h2>
          <h4>{type === 'add' ? "To account:" : "From acconut:"}</h4>
          {accountDetails}
          <h4>Amount:</h4>
          <FormatCurrency currency={balance.currency} placeholder="0.00" className={classes.balance}
                          value={amount} onChange={this.handleInputChange('amount')} />
          <Button variant="contained" className={type === 'add' ? classes.buttonGreen : classes.buttonRed} onClick={() => this.performTransaction(type, balance, history)}>
            {type === 'add' ? "Top-up account" : "Withdraw"}
          </Button>
        </div>
      )
    }


    return (
      <div className={classes.root}>
        {form}
      </div>
    )
  }
}

TransactionForm.propTypes = {
  classes: PropTypes.object,
  iban: PropTypes.string,
  type: PropTypes.string,
};

export default withStyles(styles)(TransactionForm);
