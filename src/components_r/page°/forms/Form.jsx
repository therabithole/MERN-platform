import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser"

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

validate = () => {
  
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;};

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
   e.preventDefault();
   const errors = this.validate();
   console.log(errors);
   this.setState({ errors: errors || {} }); 
    if (errors) return;

    /* onSubmission */
    this.onSubmit();
  };

  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
  if (errorMessage) errors[currentTarget.name] = errorMessage;
   else delete errors[currentTarget.name];

     const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;

    this.setState({ data, errors });
  };

  renderInput = (name, label, placeholder, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
       value={data[name]}
       onChange={this.handleChange} 
    name={name} 
        label={label} 
        type={type} 
        placeholder={placeholder}
        error={errors[name]}
      />
    );
  };

  FormButton = buttonLabel => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {buttonLabel}
      </button>
    );
  };
}

export default Form;
