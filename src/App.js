import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketPlace from './pages/MarketPlace';
import CartButton from './components/CartButton';
import EmptyCart from './pages/EmptyCart';
import ProductDetail from './pages/ProductDetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/empty-cart" component={ EmptyCart } />
          <Route exact path="/">
            <MarketPlace />
            <CartButton />
          </Route>
          <Route path="/product/:name" component={ ProductDetail } />
        </Switch>
      </Router>
    );
  }
}

export default App;
