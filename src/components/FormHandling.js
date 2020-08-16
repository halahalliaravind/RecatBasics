import React, { Component } from "react";

export default class FormHaandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      message: "",
      topic: "react",
    };
  }
  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };
  handleSubmit = (e) => {
    alert(
      ` Hi ${this.state.firstName} ${this.state.lastName} here is your All the form details are ${this.state.firstName} ${this.state.lastName},${this.state.email},${this.state.password},${this.state.message} and framework is selected is ${this.state.topic}`
    );
    e.preventDefault();
    
    console.log('hello')
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Registaration form</h3>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstName}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastName}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="text-area"
            value={this.state.message}
            onChange={this.handleMessage}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
