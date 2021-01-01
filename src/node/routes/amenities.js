const {Amenity, validateAmenity} = require("../models/amenity");
const mongoose = require('mongoose');

const express = require('express');
const router = express.Router()
const Joi = require('joi');


// GET
router.get('/', async (req, res) => {
  const amenities = await Amenity.find();
    res.send(amenities);
  });
  
  
 // POST 
  router.post('/', async (req, res) => {
    const { error } = validateAmenity(req.body); 
    if (error)  {
        res.status(400).send(error.details[0].message); 
        return; }
  
    let amenity = new Amenity ({
      name: req.body.name
    }) 
   // amenities.push(amenity ); for working with array
    amenity = await amenity.save() // for mongo
    res.send(amenity);
    // res.send(amenities);
  });
  
  
  // PIUT
  router.put('/:_id', async (req, res) => {


// validate from client First
const { error } = validateAmenity(req.body); 
if (error) { res.status(400).send(error.details[0].message)
return ;}

     // look up - working with array
    // const amenity = amenities.find(amenity => (amenity._id === req.params._id));
   
    const amenity = await Amenity.findByIdAndUpdate(req.params._id, {name: req.body.name}, {new: true})
     if (!amenity ) res.status(404).send('The amenity  with the given ID was not found.');
  
    
    res.send(amenity);
  });
  
  router.delete('/:_id', async (req, res) => {
   
   // working with array
   //  const amenity  = amenities.find(amenity => amenity._id === req.params._id)
  //   const index = amenities.indexOf(amenity );
  //   amenities.splice(index, 1);
  
    const amenity = await Amenity.findByIdAndRemove(req.params._id)
    if (!amenity) return res.status(404).send('The genre with the given ID was not found.');
  
  
    res.send(amenity);
  });
  
  router.get('/:_id', async (req, res) => {
  // working with array
  //  const amenity  = amenities.find(amenity => amenity._id === req.params._id);
  
 const amenity = await Amenity.findById(req.params._id)
    if (!amenity) return res.status(404).send('The amenity  with the given ID was not found.');
    res.send(amenity);
  });
  
  
 
  module.exports = router;
  
  
  /* 
  
  const amenities = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" }
];


*/