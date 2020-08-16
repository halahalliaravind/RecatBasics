import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aravind",
    };
    console.log("LifeCycle B constructor excuted");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getderived state from props");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB component Did mount");
  }

  render() {
    console.log("Lifecycle B rendered");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
