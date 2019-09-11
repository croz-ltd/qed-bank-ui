import React from 'react';
import useReactRouter from 'use-react-router';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const accounts = [
  {name: 'Tinker Bell', oib: '11111111111'},
  {name: 'Peter Pan', oib: '22222222222'},
];

export default function Index() {
  const {history} = useReactRouter();

  return (
    <div>
      <h1>Welcome to QED Bank!</h1>
      <h4>Please choose your account:</h4>
      <List component="ul">
        {accounts.map(account => (
          <ListItem component="li" button onClick={() => history.push(`/balances/${account.oib}`)} key={account.oib}>
            <ListItemAvatar>
              <Avatar component="div">
                <img src="https://placekitten.com/g/60/60" alt={account.name}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={account.name}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
