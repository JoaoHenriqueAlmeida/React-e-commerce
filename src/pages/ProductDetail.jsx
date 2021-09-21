import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { match: { params: { name } } } = this.props;
    return (
      <p data-testid="product-detail-name">{`Detalhe do produto: ${name}`}</p>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
