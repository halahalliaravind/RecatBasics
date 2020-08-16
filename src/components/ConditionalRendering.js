import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //   Method three with ternary operator
      return(
          this.state.isLoggedIn ? <div>Welcome Aravind</div> : <div>Welcome Guest</div>
      )
    // Method one with if else

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Aravind</div>;
    // }else{
    //     return<div>Welcome Guest</div>
    // }

    //Method two with variables
    // let msg;
    // if (this.state.isLoggedIn) {
    //   msg = <div>Welcome Aravind</div>;
    // } else {
    //   msg = <div>Welcome Guest</div>;
    // }
    // return <div>{msg}</div>;
  }
}
