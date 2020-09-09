import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { TimerPage } from './pages/Timer';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={TimerPage} />
      </Switch>
    </Router>
  );
}

export default App;
