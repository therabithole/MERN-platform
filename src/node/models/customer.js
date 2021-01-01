const mongoose = require('mongoose');

require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid from backend mongoose validation - custom'

const Joi = require('joi');

const customersSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 5,
    maxlength: 100},
    email: mongoose.SchemaTypes.Email
})


const Customer = mongoose.model('Customer', customersSchema);



function validateCustomer(customer) {
    
    const schema = {
      name: Joi.string().min(5).max(100).required(),
      email: Joi.string().email()
    };  
    return Joi.validate(customer, schema);
  }
    
module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;