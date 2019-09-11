import React from 'react';
import TransactionForm from '../../components/TransactionForm/TransactionForm';

export default function Transaction({match: {params}}) {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm iban={params.iban} type={params.type}/>
    </div>
  );
}
