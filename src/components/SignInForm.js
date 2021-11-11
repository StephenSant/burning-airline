import React, { useState } from "react";

const SignInForm = (props) => {
  const { onSubmit } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const _handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
    console.log("banana");
    onSubmit(email, password);
  };
  return (
    <form onSubmit={_handleSubmit}>
      <label>Email</label>
      <input
        type="input"
        required
        placeholder="bill@burningairlines.com"
        onChange={_handleChangeEmail}
      />
      <label>Password</label>
      <input
        type="input"
        required
        placeholder="*******"
        onChange={_handleChangePassword}
      />
      <input type="submit" value={"Sign in"} />
    </form>
  );
};

export default SignInForm;
