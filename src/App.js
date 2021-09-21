import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketPlace from './pages/MarketPlace';

import EmptyCart from './pages/EmptyCart';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/empty-cart" component={ EmptyCart } />
          <Route exact path="/" component={ MarketPlace } />
          <Route path="/product/:id" component={ ProductDetail } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </Router>
    );
  }
}

export default App;
