import React from "react";
import Joi from "joi-browser";
import Form from "../Form";

class LoginForm extends Form {
  state = {
    data: { customerEmail: "", customerPassword: "" },
    errors: {}
  };

  schema = {
    customerEmail: Joi.string()
      .required()
      .email()
      .label("User Email"),
    customerPassword: Joi.string()
      .required()
      .label("Password")
  };

  onSubmit = () => {
     console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("customerEmail", "Customer Email: ", "Enter your email")}
        {this.renderInput(
          "customerPassword",
          "Password: ",
          "Enter your password",
          "password"
        )}

        {this.FormButton("Login Customer")}
      </form>
    );
  }
}

export default LoginForm;
