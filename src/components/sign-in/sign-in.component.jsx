import React, { Component } from "react";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    console.log(e.target.name);

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          type="email"
          required
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          required
          value={this.state.password}
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    );
  }
}

export default SignIn;
