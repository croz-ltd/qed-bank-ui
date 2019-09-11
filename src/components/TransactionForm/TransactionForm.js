import React from 'react';
import axios from 'axios';
import FormatCurrency from 'react-format-currency';
import useReactRouter from 'use-react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import AccountDetails from '../AccountDetails/AccountDetails';
import ErrorCard from '../ErrorCard/ErrorCard';
import useTransactionFormStyle from './useTransactionFormStyle';

export default function TransactionForm({iban, type}) {
  const [state, setState] = React.useState({
    loading: true,
    error: false,
    message: '',
    balance: {},
    amount: '',
    serviceAvailable: true,
    altering: false,
  });
  const {history} = useReactRouter();
  const classes = useTransactionFormStyle();

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_GATEWAY_BASE_URL}/balance/${iban}`)
      .then(response => {
        if (response.status === 200) {
          setState(oldState => ({
            ...oldState,
            loading: false,
            error: false,
            balance: response.data,
          }));
        } else {
          setState(oldState => ({
            ...oldState,
            loading: false,
            error: true,
            message: (response.response && response.response === 404) ? 'Balances not found' : 'Server error. Please contact help desk support.',
          }));
        }
      })
      .catch(error => {
        console.error(error);
        setState(oldState => ({
          ...oldState,
          loading: false,
          error: true,
          message: (error.response && error.response === 404) ? 'Balances not found' : 'Server error. Please contact help desk support.',
        }));
      });
  }, [iban]);

  const handleInputChange = name => event => {
    setState(oldState => ({
      ...oldState,
      [name]: event.value,
    }));
  };

  const performTransaction = (type, balance) => {
    setState(oldState => ({
      ...oldState,
      altering: true,
    }));
    axios.post(`${process.env.REACT_APP_GATEWAY_BASE_URL}/transaction/${type}`, {
      iban: state.balance.iban,
      amount: state.amount,
    }).then(response => {
      if (response.data.success) {
        setState(oldState => ({
          ...oldState,
          altering: false,
          serviceAvailable: true,
        }));
        history.push(`/balances/${balance.oib}`);
      } else {
        setState(oldState => ({
          ...oldState,
          altering: false,
          serviceAvailable: false,
        }));
      }
    }).catch(error => {
      console.error(error);
      setState(oldState => ({
        ...oldState,
        loading: false,
        altering: false,
        error: true,
        message: (error.response && error.response === 404) ? 'Balances not found' : 'Server error. Please contact help desk support.',
      }));
    });
  };

  let body;
  if (state.loading) {
    body = <CircularProgress size={50}/>;
  } else {
    if (state.error) {
      body = <ErrorCard title="Sorry" message={state.message}/>;
    } else {
      body = (
        <div>
          {!state.serviceAvailable && (
            <div className={classes.notAvailable}>
              Currently is not possible to execute transaction. Please try again.
            </div>
          )}
          <h2>{type === 'add' ? 'Adding funds' : 'Withdraw funds'}</h2>
          <h4>{type === 'add' ? 'To account:' : 'From acconut:'}</h4>
          <AccountDetails balances={[state.balance]}/>
          <h4>Amount:</h4>
          <FormatCurrency currency={state.balance.currency} placeholder="0.00" className={classes.balance}
                          value={state.amount} onChange={handleInputChange('amount')}/>
          {state.altering && <CircularProgress size={50}/>}
          {!state.altering && (
            <Button href="#" variant="contained" className={type === 'add' ? classes.btnGreen : classes.btnRed}
                    onClick={() => performTransaction(type, state.balance)}>
              {type === 'add' ? 'Top-up account' : 'Withdraw from account'}
            </Button>
          )}
        </div>
      );
    }
  }

  return body;
}
