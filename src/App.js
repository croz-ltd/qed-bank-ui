import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Index from './pages/Index/Index'
import Balance from './pages/Balance/Balance'
import Transaction from './pages/Transaction/Transaction'
import Container from "./components/Container/Container";

const App = () => (
  <Container>
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/balances/:oib" component={Balance}/>
        <Route path="/transaction/:iban/:type" component={Transaction}/>
      </Switch>
    </Router>
  </Container>
);

export default App;