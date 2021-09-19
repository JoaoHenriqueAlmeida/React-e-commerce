import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link to="empty-cart">
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
