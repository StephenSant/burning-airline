import React, { Component } from "react";
import axios from "axios";

import SignInForm from "./SignInForm";

const SERVER_URL = "https://localhost:4000";
class SignIn extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.checkUser = this.checkUser.bind(this);
  }

  checkUser(email, password) {
    let validUser = [];
    axios(SERVER_URL).then((result) => {
      console.log(result.data);
      for (let i = 0; i < result.data.length; i++) {
        if (
          result.data[i].email === email &&
          result.data[i].password === password
        ) {
          validUser.push(result.data[i]);
        }
      }
      this.setState({ email: email, password: password, user: validUser });
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.email}</h1>
        <SignInForm onSubmit={this.checkUser} />
      </div>
    );
  }
}

export default SignIn;
