import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { productList } = this.props;
    return (
      productList
        .map(({ title, thumbnail, price, id, available_quantity: maxqtt }) => (
          <ProductCard
            key={ id }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            id={ id }
            maxqtt={ maxqtt }
          />))
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductList;
