import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increaseQtt = this.increaseQtt.bind(this);
    this.decreaseQtt = this.decreaseQtt.bind(this);
    this.state = {
      productQtt: 0,
    };
  }

  increaseQtt() {
    const { maxqtt } = this.props;
    this.setState((previousState) => ({
      productQtt: previousState.productQtt + 1 <= maxqtt ? previousState.productQtt + 1
        : previousState.productQtt,
    }));
  }

  decreaseQtt() {
    this.setState((previousState) => ({
      productQtt: previousState.productQtt - 1 <= 0 ? 0 : previousState.productQtt - 1,
    }));
  }

  render() {
    const { productQtt } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.increaseQtt }>Mais</button>
        <p>{ productQtt }</p>
        <button type="button" onClick={ this.decreaseQtt }>Menos</button>
      </div>
    );
  }
}

export default Counter;

Counter.propTypes = ({
  maxqtt: PropTypes.number.isRequired,
});
