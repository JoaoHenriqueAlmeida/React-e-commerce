import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';
import CartButton from '../components/CartButton';

class MarketPlace extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      productList: [],
      selectedCategory: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.checkStorage();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick({ target }) {
    const idItem = target.id;
    this.setState({
      selectedCategory: idItem,
    });
    this.searchProducts();
  }

  checkStorage() {
    if (!localStorage.cartProducts) {
      localStorage.cartProducts = JSON.stringify([]);
    }
  }

  async searchProducts() {
    const { inputValue, selectedCategory } = this.state;
    const result = await getProductsFromCategoryAndQuery(selectedCategory, inputValue);
    this.setState({
      productList: result.results,
    });
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
        <CartButton />
        <CategoriesList handleClick={ this.handleClick } />
        <ProductList productList={ productList } />
      </>
    );
  }
}

export default MarketPlace;
