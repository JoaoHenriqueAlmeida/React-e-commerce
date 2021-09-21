import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { handleClick } = this.props;
    return (
      <>
        { categories.map(({ name, id }) => (
          <div
            role="none" // error  Static HTML elements with event handlers require a role
            key={ id }
            onClick={ handleClick }
            onKeyDown={ handleClick } // error  Visible, non-interactive elements with click
            // handlers must have at least one keyboard listener
            id={ id }
            data-testid="category"
          >
            { name }
          </div>)) }
      </>
    );
  }
}

CategoriesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CategoriesList;
