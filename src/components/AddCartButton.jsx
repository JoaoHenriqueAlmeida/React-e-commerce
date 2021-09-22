import React, { Component } from 'react';

class AddCartButton extends Component {
  constructor() {
    super();
    /* this.handleSelectedItem = this.handleSelectedItem.bind(this); */
    this.addToCart = this.addToCart.bind(this);
  }

  /*   handleSelectedItem() {
    const { title, thumbnail, price } = this.props;
    console.log(this.props);
    this.addToCart(this.props);
  } */

  addToCart(product) {
    if (localStorage) {
      let cartProducts;
      if (!localStorage('cartProducts')) cartProducts = [];
      else cartProducts = JSON.parse(localStorage('cartProducts'));
      cartProducts.push(product);
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
  }

  render() {
    return (
      <div>
        <button
          type="button"/*
          onClick={ this.handleSelectedItem } */
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default AddCartButton;
