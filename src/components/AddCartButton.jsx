import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends Component {
  constructor() {
    super();
    this.handleSelectedItem = this.handleSelectedItem.bind(this);
    /* this.addToCart = this.addToCart.bind(this); */
    this.saveItemCart = this.saveItemCart.bind(this);
  }

  handleSelectedItem() {
    console.log(this.props);
    this.saveItemCart(this.props);
  }

  /*   addToCart(product) {
    if (localStorage('cartProducts')) {
      let cartProducts;
      if (!localStorage('cartProducts')) cartProducts = [];
      else cartProducts = JSON.parse(localStorage('cartProducts'));
      cartProducts.push(product);
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
  } */
  // https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage
  saveItemCart(product) {
    const { id, title, price, thumbnail, maxqtt } = product;
    const cart = localStorage.cartProducts
      ? JSON.parse(localStorage.cartProducts) : [];

    cart.push({
      id,
      title,
      price,
      thumbnail,
      maxqtt,
    });

    localStorage.setItem('cartProducts', JSON.stringify(cart));
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSelectedItem }
          data-testid="product-add-to-cart"
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default AddCartButton;

AddCartButton.propTypes = ({
  id: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  maxqtt: PropTypes.number,
}).isRequired;
