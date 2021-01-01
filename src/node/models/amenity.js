const mongoose = require('mongoose');
const Joi = require('joi');

const amenitySchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 5,
    maxlength: 100},
})

const Amenity = mongoose.model('Amenity', amenitySchema);


 function validateAmenity(amenity) {
    
    const schema = {
      name: Joi.string().min(3).required()
      
    };  
    return Joi.validate(amenity, schema);
  }
  

  module.exports.Amenity = Amenity;
  module.exports.validateAmenity = validateAmenity;
  module.exports.amenitySchema = amenitySchema