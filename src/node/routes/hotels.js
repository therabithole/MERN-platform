const {Amenity} = require("../models/amenity");
const {Hotel, validateHotel} = require("../models/hotel");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()
const Joi = require('joi');



// GET
router.get('/', async (req, res) => {
  const hotels = await Hotel.find();
    res.send(hotels);
  });
  
  
 // POST 
  router.post('/', async (req, res) => {
    const { error } = validateHotel(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    // something new, connected to typeschema
     const amenity = await Amenity.findById(req.body.amenityId) // *
    if (!amenity) return res.status(400).send('Invalid Amniety') // *
  
    let hotel = new Hotel ({
        title: req.body.title,
        amenity: {
          _id: amenity._id, // ref
          name: amenity.name // ref
        },
        rooms: req.body.rooms,
        price: req.body.price,
        numberInStock: req.body.numberInStock
       
    })
    
    hotel = await hotel.save() 
    res.send(hotel);
     
  });
  
  
  // PIUT
  router.put('/:_id', async (req, res) => {
    
    // validate from client First
    const { error } = validateHotel(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    // look up - working with array
   //  const hotel = hotels.find(hotel => hotel._id === req.params._id);
   // hotel.title = req.body.title; 
    
   const hotel = await Hotel.findByIdAndUpdate(req.params._id, {title: req.body.title, price: req.body.price, rooms: req.body.rooms, numberInStock: req.body.numberInStock}, {new: true})
  
    if (!hotel ) return res.status(404).send('The hotel  with the given ID was not found.');

    res.send(hotel );
  });
  
  router.delete('/:_id', async (req, res) => {
    
    
    // const hotel  = hotels.find(c => c._id === req.params._id);
    //const index = hotels.indexOf(hotel );
    // hotels.splice(index, 1);
    const hotel = await Hotel.findByIdAndRemove(req.params._id)
   
    if (!hotel) return res.status(404).send('The genre with the given ID was not found.'); 
    res.send(hotel);
  });
  
  router.get('/:_id', async (req, res) => {
    // working with array
    // const hotel  = hotels.find(hotel => hotel._id === req.params._id);
    const hotel = await Hotel.findById(req.params._id)
    if (!hotel) return res.status(404).send(`The hotel  with the given ID ${req.params._id} didnt match`);
    res.send(hotel);
  });
  
  module.exports = router;

  /* 
  const hotels = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Seaview Lodge Guest House",
      amenities: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
      rooms: 6,
      price: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z",
      bookmark: undefined,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Arcadian Riverside Adventure Resort",
      amenities: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
      rooms: 5,
      price: 2.5,
      bookmark: "",
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "The Motel Royal Fantasy",
      amenities: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
      rooms: 8,
      price: 3.5,
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      title: "Ramada by Wyndham",
      amenities: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
      rooms: 7,
      price: 3.5,
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181a",
      title: "Zifan Hotel & Suites",
      amenities: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
      rooms: 7,
      price: 3.5,
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181b",
      title: "Beach Luxury Hotel",
      amenities: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
      rooms: 7,
      price: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181e",
      title: "Karachi Marriott Hotel",
      amenities: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
      rooms: 7,
      price: 4.5,
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181f",
      title: "The Sixth Sense",
      amenities: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
      rooms: 4,
      price: 3.5,
       
    },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
      title: "The Nishat Hotel Johar Town",
      amenities: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
      rooms: 7,
      price: 3.5,
      
    }
  ];

  
  */