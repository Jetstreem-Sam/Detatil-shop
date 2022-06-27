import React from "react";

class Counter extends React.Component{
  constructor(...args){
    super(...args);

    this.state = { counter: 1 };
    this.cincrement = this.cincrement.bind(this);
    this.cdecrement= this.cdecrement.bind(this)
}

  cincrement(){
    this.setState(state => ({ counter: state.counter+1 }));
  }

  cdecrement() {
    this.setState(state => ({ counter: state.counter-1 }));
  }
  render() {
    return (
      <div className="counter">
          <div className="plus"  onClick={this.cincrement}>
            +
          </div>
        <div className="answer">
          {this.state.counter}
        </div>
          <div className="minus"  onClick={this.cdecrement}>
            -
          </div>
      </div>
    )
  }
}

export default Counter