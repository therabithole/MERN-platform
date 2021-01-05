const jwt = require('jsonwebtoken');
const config = require('config')
const mongoose = require('mongoose');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity"); // Facebook Like password - upercase, min 1 number etc etc


// Defne Schema
const userMongooseSchema = new mongoose.Schema({
    name: {type: String, trim: true, min: 3, max: 50, required: true},
    email: { type: String, unique: true, trim: true, required: true}, // UNIQUE properrty for EMAIL REGISTER
    password: {type: String, trim: true, maxlength: 1024, required: true} // higher value for maxlength for pass becasue hashing
})

userMongooseSchema.methods.generateAuthToken = function() {
  //  const token = jwt.sign({_id: user._id}, config.get('jwtPrivateKey'));
    const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
    return token
}


// Calling Model
const User = mongoose.model("User", userMongooseSchema);


function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(5).required(),
        email: Joi.string().email(),
        password: Joi.string().max(1024)
    }
    return Joi.validate(user, schema)
}


module.exports.User = User;
module.exports.validateUser = validateUser;


