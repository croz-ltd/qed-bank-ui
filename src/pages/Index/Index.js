import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

import styles from './Index.css';
import Container from '../../components/Container/Container'


const accounts = [
  {
    name: 'John Doe',
    oib: '11111111111'
  },
  {
    name: 'Peter Pan',
    oib: '22222222222'
  }];

const Index = ({classes, history}) => (
  <Container>
    <h1>
      Welcome to QED Bank!
    </h1>
    <h4>Please choose your account:</h4>
    <List>
      {accounts.map(account => (
      <ListItem button onClick={() => history.push('/balances/' + account.oib)} key={account.oib}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <PersonIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={account.name}/>
      </ListItem>
      ))}
    </List>
  </Container>
);

Index.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Index);
