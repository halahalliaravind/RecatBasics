import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aravind",
    };
    console.log("LifeCycle A constructor excuted");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A getderived state from props");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA component Did mount");
  }

  render() {
    console.log("Lifecycle A rendered");
    return (
        <>
        <div>Lifecycle A</div>
        <LifecycleB />
    </>)
  }
}

export default LifecycleA;
