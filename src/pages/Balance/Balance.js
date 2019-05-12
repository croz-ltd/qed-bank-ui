import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';

import styles from './Balance.css';
import Container from '../../components/Container/Container'
import BalanceList from '../../components/BalanceList/BalanceList'

const Index = ({classes, match: { params }, history}) => (
  <Container>
    <h1>
      Balances
    </h1>
    <BalanceList oib={params.oib} history={history} />
  </Container>
);

Index.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Index);
