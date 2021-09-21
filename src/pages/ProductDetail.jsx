import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productObj: '',
      attributes: [],
    };

    this.fetchProductById = this.fetchProductById.bind(this);
  }

  componentDidMount() {
    this.fetchProductById();
  }

  async fetchProductById() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { productObj: [],
        attributes: [],
      }, async () => {
        const URL = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
        const myResults = await URL.json();
        this.setState({
          productObj: myResults[0].body,
          attributes: myResults[0].body.attributes,
        });
      },
    );
  }

  render() {
    const { productObj: { title, thumbnail, price }, attributes } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h1>
        <img className="product-img" src={ thumbnail } alt="product" />
        <div className="product-specifications">
          <h4>Especificações Técnicas</h4>
          <ul>
            { attributes
              .map((e, index) => (
                <li key={ index }>
                  {e.name}
                  :
                  {e.value_name}
                </li>))}
          </ul>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
