import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  clickIncrement = () => {
    // don't go above 10
    if (this.state.count === 10) {
      return;
    }

    this.setState({
      count: this.state.count + 1,
    });
  }

  clickDecrement = (event) => {
    // don't go below zero
    if (this.state.count === 0) {
      return;
    }

    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickDecrement}>-</button>
        {this.state.count}
        <button onClick={this.clickIncrement}>+</button>
      </div>
    );
  }

}

export default Counter;
