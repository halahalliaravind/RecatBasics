import React, { Component } from "react";

export default class setState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      betterCount: 0,
    };
  }

  //   Increment the Count
  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  //decrement count
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  //reset the count
  reset() {
    this.setState({
      count: 0,
    });
  }

  // Good Approch
  betterincrement() {
    this.setState((prevState) => ({
      betterCount: prevState.betterCount + 1,
    }));
    console.log(this.state.betterCount);
  }

  betterdecrement() {
    this.setState((prevState) => ({
      betterCount: prevState.betterCount - 1,
    }));
    console.log(this.state.betterCount);
  }
  betterreset() {
    this.setState((prevState) => ({
      betterCount: 0,
    }));
  }

  changeFiveTimes(){
   this.setState((prevState)=>({
     betterCount:prevState.betterCount + 5
   }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment Count</button>
        <button onClick={() => this.decrementCount()}>Decrement Count</button>
        <button onClick={() => this.reset()}>Reset</button>
        <br />
        <h1>{this.state.betterCount}</h1>
        <button onClick={() => this.betterincrement()}>Better Increment</button>
        <button onClick={() => this.betterdecrement()}>Better Decrement</button>
        <button onClick={() => this.betterreset()}>Better Reset</button>
        <br />
        <button onClick={() =>this.changeFiveTimes()}>Increment By 5 Times</button>
      </div>
    );
  }
}
