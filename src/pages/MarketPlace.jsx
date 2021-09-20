import React from 'react';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class MarketPlace extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      productList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async searchProducts() {
    const { inputValue } = this.state;
    const result = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      productList: result.results,
    });
    return result;
  }

  render() {
    const { productList, inputValue } = this.state;
    return (
      <>
        <input
          type="text"
          data-testid="query-input"
          name="inputValue"
          onChange={ this.handleChange }
          value={ inputValue }
        />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchProducts }
        >
          Pesquisar
        </button>
        <ProductList productList={ productList } />
      </>
    );
  }
}

export default MarketPlace;
