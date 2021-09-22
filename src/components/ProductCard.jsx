import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/product/${id}` }>
        <section data-testid="product">
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
        </section>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
