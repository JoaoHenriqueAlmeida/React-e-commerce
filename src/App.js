import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketPlace from './pages/MarketPlace';
import CartButton from './components/CartButton';
import EmptyCart from './pages/EmptyCart';
import CategoriesList from './components/CategoriesList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/empty-cart" component={ EmptyCart } />
          <Route exact path="/">
            <MarketPlace />
            <CartButton />
            <CategoriesList />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
