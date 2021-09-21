import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const { match: { params: { name } } } = this.props;
    return (
      <p data-testid="product-detail-name">{`Detalhe do produto: ${name}`}</p>
    );
  }
}

export default ProductDetail;
