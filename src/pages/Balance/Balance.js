import React from 'react';
import BalanceList from '../../components/BalanceList/BalanceList';
import PropTypes from "prop-types";

export default function Balance({match: {params: {oib}}}) {
  return (
    <div>
      <h1>Balances</h1>
      <BalanceList oib={oib}/>
    </div>
  );
}

Balance.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      oib: PropTypes.string.isRequired
    })
  })
};
