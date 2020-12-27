import React from "react";
import Joi from "joi-browser";
import Form from "../Form";

class CustomerRegisterForm extends Form {
  state = {
    data: {
      customerName: "",
      customerEmail: "",
      customerPassword: ""
    },
    errors: {}
  };

  schema = {
    customerName: Joi.string().required(),
    customerEmail: Joi.string()
      .email()
      .required(),
    userPassword: Joi.string()
      .min(4)
      .required()
  };

  onSubmit = () => {
    console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("customerName", "Customer Name: ", "Enter a unique customer name")}
        {this.renderInput(
          "customerEmail",
          "Customer Email: ",
          "Enter your preferred email"
        )}
        {this.renderInput(
          "customerPassword",
          "Password: ",
          "Enter your password",
          "password"
        )}
        {this.FormButton("Register Customer")}
      </form>
    );
  }
}

export default CustomerRegisterForm;
