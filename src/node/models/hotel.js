const mongoose = require('mongoose');
const {amenitySchema} = require("./amenity");
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const hotelMongoSchema  = new mongoose.Schema({
  title: {type: String, lowercase: true, trim: true, minlength: 3, maxlength: 250 },
  amenity: {type: amenitySchema, required: true},
  rooms: {type: Number, min: 1, max: 1000},
  price: {type: Number, min: 10, max: 500},
  numberInStock: {type: Number, min: 1, max: 10},
})

// enum is predefined

const Hotel = mongoose.model('Hotel',hotelMongoSchema)

function validateHotel(hotel) {
    
    const schema = {
      title: Joi.string().min(3).max(250).required(),
     // amenityId: Joi.string().required(), // different than type:AmenitySchema, for client se
     amenityId: Joi.ObjectId().required(), // just to handle error for objectids of refs 
     rooms: Joi.number().greater(1).less(1000),
      price: Joi.number().greater(10).less(500),
      numberInStock: Joi.number().required().min(1).max(10)
     
    };  
    return Joi.validate(hotel, schema);
  }

   
   module.exports.Hotel = Hotel;
   module.exports.validateHotel = validateHotel;


   /* 
   
     title: {
        type: String, 
        required: true,
        lowercase: true,  //convert coming data into lowercase
        trim: true, // remove spaces/padding around data
        minlength: 3,
        maxlength: 250},
  //  amenities: [{name: String}],
    rooms: {
        type: Number,
       
            },
    price: {
        type: Number,
        min: 10,
        max: 5000,
       
       // set: v=> Math.round(v) // round values 5.1 to 5 from client, get is from server
       }, 
    bookmark:  {type: Boolean}
    
    */