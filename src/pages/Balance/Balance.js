import React from 'react';
import BalanceList from '../../components/BalanceList/BalanceList'

export default function Balance({match: {params}}) {
  return (
    <div>
      <h1>Balances</h1>
      <BalanceList oib={params.oib}/>
    </div>
  );
}