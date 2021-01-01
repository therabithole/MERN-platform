const Joi = require('joi');
const mongoose = require('mongoose');

const bookingMongoSchema = new mongoose.Schema({
   customer : {
       type: new mongoose.Schema({
          name: {type: String},
          phone: {type: String} 
       })
   },
   hotel: {
       type: new mongoose.Schema({
        title: {type: String, lowercase: true, trim: true, minlength: 3, maxlength: 250 },

   })},
   dateIn: { type: Date},
   dateOut: { type: Date},
   bookingFee: {type: Number}
  })
   

  const Booking = mongoose.model('Booking',bookingMongoSchema)

function validateBooking(booking)
    {
    const schema = {
        customerId: Joi.string.required(),
        hotelId: Joi.string.required()
    } 
    return Joi.validate(booking, schema)
}
    
module.exports.Booking = Booking;
module.exports.validateBooking = validateBooking;