import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../Form";

class LoginForm extends Form {
  state = {
data: {
    supplierEmail: "", 
    supplierPassword: "" },
errors: {}
  };

  schema = {
    supplierEmail: Joi.string()
      .required()
      .email()
      .label("Email"),
    supplierPassword: Joi.string()
      .required()
      .label("Password")
  };

  onSubmit = () => {
    /* 3*/ console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(
          "Supplier Email",
          "Business Email: ",
          "Enter your business email"
        )}
        {this.renderInput(
          "supplierPassword",
          "Password: ",
          "Enter your password",
          "password"
        )}

        {this.FormButton("Login to Dashboard")}
      </form>
    );
  }
}

export default LoginForm;
