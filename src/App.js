import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Index from './pages/Index/Index'
import Balance from './pages/Balance/Balance'
import Transaction from './pages/Transaction/Transaction'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route path="/balances/:oib" component={Balance}/>
      <Route path="/transaction/:iban/:type" component={Transaction} />
    </Switch>
  </Router>
);

export default App;