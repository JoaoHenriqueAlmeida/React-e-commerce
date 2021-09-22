import React, { Component } from 'react';

export default class Evaluation extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      selectInput: '5 Estrelas',
      textInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, id } = event.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { emailInput, selectInput, textInput } = this.state;
    return (
      <div>
        <section>
          <span>Avalições</span>
          <form>
            <input
              type="email"
              placeholder="Email"
              id="emailInput"
              onChange={ this.handleChange }
              value={ emailInput }
            />
            <select
              required
              id="selectInput"
              onChange={ this.handleChange }
              value={ selectInput }
            >
              <option>1 Estrela</option>
              <option>2 Estrelas</option>
              <option>3 Estrelas</option>
              <option>4 Estrelas</option>
              <option>5 Estrelas</option>
            </select>

            <textarea
              data-testid="product-detail-evaluation"
              id="textInput"
              onChange={ this.handleChange }
              value={ textInput }
            />

            <button type="button">Avaliar</button>
          </form>
        </section>
      </div>
    );
  }
}
