import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketPlace from './pages/MarketPlace';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <MarketPlace />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
