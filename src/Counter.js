import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }

    increment() {
      this.setState(state => ({
        count: this.state.count + 1
      }))
    };
  
    decrement() {
      this.setState(state => ({
        count: this.state.count - 1
      }))
    };
  
    reset() {
      this.setState(state => ({
        count: 0
      }))
    };

    render() {
      return (
          <div id="countButtons">
          <h1>Total number of films I've seen: {this.state.count}</h1>
          <button className='inc' onClick={this.increment}>Increase</button>
          <button className='dec' onClick={this.decrement}>Decrease</button>
          <button className='reset' onClick={this.reset}>Reset</button>
        </div>
      );
    }
};
  
export default Counter;