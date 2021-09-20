import React, { Component } from 'react';
import { getCategories } from '../services/api';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
    this.state = {
      categories: [],
      selectedCategory: '',
    };
  }

  componentDidMount() {
    this.renderCategories();
  }

  async renderCategories() {
    const list = await getCategories();
    this.setState({
      categories: list,
    });
  }
  
  render() {
    const { categories } = this.state;
    const { handleClick }  = this.props;
    return (
      <> 
        { categories.map(({name, id }) => ( 
          <div key={ id } onClick={ handleClick } id={ id } data-testid="category">{ name }</div>)) }
      </>
    );
  }
}

export default CategoriesList;
