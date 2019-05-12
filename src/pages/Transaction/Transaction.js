import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';

import styles from './Transaction.css';
import Container from '../../components/Container/Container'
import TransactionForm from '../../components/TransactionForm/TransactionForm'

const Index = ({classes, match: { params }, history, }) => (
  <Container>
    <h1>
      Transactions
    </h1>
    <TransactionForm iban={params.iban} type={params.type} history={history} />
  </Container>
);

Index.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Index);
