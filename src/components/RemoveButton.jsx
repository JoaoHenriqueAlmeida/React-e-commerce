import React, { Component } from 'react';

class RemoveButton extends Component {
  constructor(props) {
    super(props);
    this.checkStorage = this.checkStorage.bind(this);
  }

  checkStorage() {
    const stored = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(stored);
  }

  render() {
    return (
      <button type="button">
        Remove
      </button>
    );
  }
}

export default RemoveButton;
