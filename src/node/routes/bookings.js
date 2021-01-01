const {Booking, validateBooking} = require("../models/booking");
const {Hotel, validateHotel} = require("../models/hotel");
const {Customer, validateCustomer} = require("../models/customer");
const express = require('express');
const router = express.Router()


router.get('/', async (req, res) => {
    const bookings = await Booking.find().sort("-dateOut");
      res.send(bookings);
    });

router.post('/', async (req, res) => {
    
    const { error } = validateBooking(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    // check for customer
    const customer = await Customer.findById(req.body.customerId) // *
    if (!customer) return res.status(400).send('Invalid Customer') 
    
    // check for hotel
    const hotel = await Hotel.findById(req.body.customerId) // *
    if (!hotel) return res.status(400).send('Invalid Hotel') 
    
    let booking = new Booking({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        hotel: {
            _id: hotel._id,
            title: hotel.title
        }
    })
    booking = await booking.save()
    // movie.numberInStock-- decermenet
    // hotel.roomsAvaiulable--
    hotel.save()
    
    });

