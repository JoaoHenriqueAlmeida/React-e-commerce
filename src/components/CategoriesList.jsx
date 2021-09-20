import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
    this.state = {
      categories: [],
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
    return (
      <div>
        { categories.map((e) => (
          <p key={ e.id } datatest-id="category">{ e.name }</p>)) }
      </div>
    );
  }
}

export default CategoriesList;
