import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmptyCart extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default EmptyCart;
