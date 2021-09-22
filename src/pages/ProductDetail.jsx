import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productObj: '',
      attributes: [],
      storedProducts: [],
    };

    this.getLocalContent = this.getLocalContent.bind(this);
    this.fetchProductById = this.fetchProductById.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProductById();
    this.getLocalContent();
  }

  handleClick() {
    const { storedProducts, productObj } = this.state;
    const stored = [...JSON.parse(storedProducts)];
    localStorage.setItem('cartProducts', JSON.stringify([...stored, productObj]));
  }

  async getLocalContent() {
    if (!localStorage.getItem('cartProducts')) {
      localStorage.setItem('cartProducts', JSON.stringify([]));
    }
    const stored = localStorage.getItem('cartProducts');
    this.setState({
      storedProducts: stored,
    });
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
        <CartButton />
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
          onClick={ this.handleClick }
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
