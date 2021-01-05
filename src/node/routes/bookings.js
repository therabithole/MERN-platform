// two phase commitsit / save two doc on condition using Fawn

const {Booking, validateBooking} = require("../models/booking");
const {Hotel} = require("../models/hotel");
const {Customer} = require("../models/customer");

const mongoose = require('mongoose');
const Fawn = require('fawn')


const express = require('express');
const router = express.Router()

Fawn.init(mongoose)
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
    const hotel = await Hotel.findById(req.body.hotelId) // *
    if (!hotel) return res.status(400).send('Invalid Hotel') 
    
    // rooms available
    if (hotel.numberInStock === 0) return res.status(400).send("No Rooms Available - Fully booked")
    
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
    
    {/* NORMAL - WITHOUT FAWN 
    //two doc operations, so transaction, save booking schema class/mongodoc
    booking = await booking.save()
     //  decremeant one less rooms
     //two doc operations, so transaction, save hotel schema class/mongodoc
      hotel.numberInStock-- 
     hotel.save() 
     */}
    
    try {
        new Fawn.Task()
        .save('bookings', booking)
        .update('hotels', {_id: hotel._id}, {
        $inc: {numberInStock: -1} // one less hotel room
    })
        .run() // run this and updated 3 docs / collections
    }
    
    catch(ex){
        res.status(500).send("Internal Server Error")
    }
    

    res.send(booking)
    });


module.exports = router;