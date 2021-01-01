const {Customer, validateCustomer} = require("../models/customer")
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()
const Joi = require('joi');


// GET
router.get('/', async (req, res) => {
    const customers = await Customer.find();
      res.send(customers);
    });
    
    
   // POST 
router.post('/', async (req, res) => {
const { error } = validateCustomer(req.body); 
if (error)  {
res.status(400).send(error.details[0].message); 
return; }
    
let customer = new Customer ({
        name: req.body.name,
        email: req.body.email
        
      }) 
 
customer = await customer.save() 
res.send(customer);
  
    });
    

    
    module.exports = router