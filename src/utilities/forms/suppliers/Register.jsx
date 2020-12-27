import React from "react";
import Joi from "joi-browser";
import Form from "../Form";
class RegisterForm extends Form {
  state = {
    data: {
      supplierName: "",
      supplierEmail: "",
      supplierassword: ""
    },
    errors: {}
  };

  schema = {
    supplierName: Joi.string().required(),
    supplierEmail: Joi.string()
      .email()
      .required(),
    supplierPassword: Joi.string()
      .min(4)
      .required()
  };

  onSubmit = () => {
   console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(
          "supplierName",
          "Business Name: ",
          "Enter your business name"
        )}
        {this.renderInput(
          "supplierEmail",
          "Business Email: ",
          "Enter your business email"
        )}
        {this.renderInput(
          "supplierPassword",
          "Password: ",
          "Enter your password",
          "password"
        )}

        {this.FormButton("Register as a business")}
      </form>
    );
  }
}

export default RegisterForm;
