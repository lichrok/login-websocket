import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { TimerPage } from './pages/Timer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={TimerPage} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
}

export default App;
