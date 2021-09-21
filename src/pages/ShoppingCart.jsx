import React, { Component } from 'react';
import ProductList from '../components/ProductList';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.restoreProduct = this.restoreProduct.bind(this);
  }

  componentDidMount() {
    this.restoreProduct();
  }

  restoreProduct() {
    const productsString = localStorage.getItem('cartProducts');
    const products = JSON.parse(productsString);
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <ProductList productList={ products } />
      </div>
    );
  }
}

export default ShoppingCart;
