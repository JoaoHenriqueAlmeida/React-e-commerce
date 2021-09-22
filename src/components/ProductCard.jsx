import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, maxqtt } = this.props;
    return (
      <>
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>
          <section data-testid="product">
            <p>{title}</p>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
          </section>
        </Link>
        <AddCartButton
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          maxqtt={ maxqtt }
        />
      </>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  maxqtt: PropTypes.number.isRequired,
};

export default ProductCard;
