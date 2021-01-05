const jwt = require('jsonwebtoken');
const config = require('config')
const {User} = require("../models/user");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require("bcrypt");

const _ = require('lodash')



router.post("/", async (req, res) => {
    
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message); 
    
    // Invalid email
    let user = await User.findOne(({email: req.body.email}))
    if(!user) return res.status(400).send("Invalid Email")
  
   const validPassword = await bcrypt.compare(req.body.password, user.password)
if (!validPassword) return res.status(400).send("Invalid Password");

// res.send(true)
// link mongodbID and send it back as secret

// const token = jwt.sign({_id: user._id}, config.get('jwtPrivateKey'));
// add header json token

const token = user.generateAuthToken();
res.header('x-auth-reg-token', token).send(_.pick(user , ['id', 'name', 'email']))

res.send(token)

})

function validate(req) {
    const schema = {
       
        email: Joi.string().email(),
        password: Joi.string()
    }
    return Joi.validate(req, schema)
}


module.exports = router