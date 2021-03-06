import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.increment} className="full-width">Increment</button>
        <button onClick={this.decrement} className="full-width">Decrement</button>
        <button onClick={this.reset} className="full-width">Reset</button>
      </section>
    );
  }
}
