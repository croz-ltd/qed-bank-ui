import React from 'react';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import PropTypes from "prop-types";

export default function Transaction({match: {params: {iban, type}}}) {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm iban={iban} type={type}/>
    </div>
  );
}

Transaction.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      iban: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  })
};
