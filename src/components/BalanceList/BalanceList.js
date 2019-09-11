import React from 'react';
import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorCard from '../ErrorCard/ErrorCard';
import AccountDetails from '../AccountDetails/AccountDetails';
import PropTypes from "prop-types";

export default function BalanceList({oib}) {
  const [state, setState] = React.useState({loading: true, error: false, message: '', balances: []});

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_GATEWAY_BASE_URL}/balances/${oib}`)
      .then(response => {
        if (response.status === 200) {
          setState({
            loading: false,
            error: false,
            message: '',
            balances: response.data,
          });
        } else {
          setState({
            loading: false,
            error: true,
            message: (response.response && response.response === 404) ? 'Balances not found' : 'Server error. Please contact help desk support.',
            balances: [],
          });
        }
      })
      .catch(error => {
        console.error(error);
        setState({
          loading: false,
          error: true,
          message: (error.response && error.response === 404) ? 'Balances not found' : 'Server error. Please contact help desk support.',
          balances: [],
        });
      });
  }, [oib]);

  let body;
  if (state.loading) {
    body = <CircularProgress size={50}/>;
  } else {
    if (state.error) {
      body = <ErrorCard title="Sorry" message={state.message}/>;
    } else {
      body = <AccountDetails balances={state.balances} showActions/>;
    }
  }

  return body;
}

BalanceList.propTypes = {
  oib: PropTypes.string.isRequired
};
