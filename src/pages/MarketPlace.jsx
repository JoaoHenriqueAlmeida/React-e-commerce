import React from 'react';

class MarketPlace extends React.Component {
  render() {
    return (
      <>
        <input type="text" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </>
    );
  }
}

export default MarketPlace;
