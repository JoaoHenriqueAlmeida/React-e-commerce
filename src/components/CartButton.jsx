import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  checkStorage() {
    if (!localStorage.getItem('cartProducts')) {
      return ('/empty-cart');
    }
    return ('/shopping-cart');
  }

  render() {
    return (
      <Link to={ this.checkStorage() }>
        <button
          type="button"
          data-testid="shopping-cart-button"
        >
          Cart
        </button>
      </Link>
    );
  }
}

export default CartButton;
