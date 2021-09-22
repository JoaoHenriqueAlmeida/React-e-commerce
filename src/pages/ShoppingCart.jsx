import React, { Component } from 'react';
import Counter from '../components/Counter';
import HomeButton from '../components/HomeButton';
import RemoveButton from '../components/RemoveButton';
import FinishButton from '../components/FinishButton';

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
        <HomeButton />
        {products.map((e, index) => (
          <div key={ index }>
            <p data-testid="shopping-cart-product-name">{ e.title }</p>
            <img src={ e.thumbnail } alt={ `${e.title}-thumbnail ` } />
            <p data-testid="shopping-cart-product-quantity">
              { products.filter((product) => product.id === e.id).length }
            </p>
            <Counter maxqtt={ e.available_quantity || e.maxqtt } />
            <RemoveButton />
          </div>
        ))}
        <FinishButton />
      </div>
    );
  }
}

export default ShoppingCart;
