import React, { Component } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

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
      <div className="container-fluid sign-in-form">
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
