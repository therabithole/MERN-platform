const jwt = require('jsonwebtoken');
const config = require('config')
const {User, validateUser} = require("../models/user");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require("bcrypt");
const admin = require("../middleware/authenticator");

// because we dont want to send the password back we used lodash 
const _ = require('lodash')



router.get("/profile", admin, async (req, res)=> {
    
const user = await User.findById(req.user._id).select('-password')
res.send(user)

} )


router.post("/", async (req, res) => {
    
    const { error } = validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message); 
    
    // EXTRA VALIDATION - not register already
    let user = await User.findOne(({email: req.body.email}))
    if(user) return res.status(400).send("bad equest, user already registetrered")
  
user = new User (_.pick(req.body, ['name', 'email', 'password'] ));
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(user.password, salt)

await user.save()

// before sending resposne ,genrate json token and chain to _.pick

// res.send(_.pick(user , ['id', 'name', 'email']));
const token = user.generateAuthToken();
// const token = jwt.sign({_id: user._id}, config.get('jwtPrivateKey')); refractpr to add more _.id like proprs and make a func just defined above
res.header('x-auth-reg-token', token).send(_.pick(user , ['id', 'name', 'email']))



})


module.exports = router


   /* user = new User ({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }) 
   
    let picked = _.pick(user, ['id', 'name', 'email'])
   
    const hack = await bcrypt.genSalt(10); // initial 10 valued hack code
    picked.password = await bcrypt.hash(user.password, hack) 
     
    user = await user.save()
   // NORMAL- send back whole obj but password is secret: NO?
   /// use lodash to better picking
   
   //send back only selected properties, exluse password
   // add yor pass next to it  
    res.send(picked);
*/