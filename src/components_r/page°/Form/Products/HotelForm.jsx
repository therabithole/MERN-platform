import React, { Component } from 'react';
import { getAmenities} from "../../../../node/services/fakeAmenityService";
import { getHotel, saveHotel } from '../../../../node/services/fakeHotelService';
import Joi from 'joi-browser';

import BaseForm from '../BaseForm';
import Input from "../Input";
import Checkbox from "../Checkbox";

class HotelForm extends BaseForm {
    state = { 
        data: {
            name: '',
            amenityId: '',
            rooms: '',
            price: '',
            numberInStock: '',
            
        },
        amenities: [],
        errors: {}
         }
    
         frontEndFormSchema = 
         { 
        _id: Joi.string(),
        name: Joi.string().min(3).label('Please Enter name of your Hotel'),
        amenityId: Joi.string().label('Please Select Amenities'),
       
        rooms: Joi.string().min(1).max(1000).label('Please Enter Number of Rooms'),
        price: Joi.number().min(10).max(5000).label('Please Your Price Per Day'),
        numberInStock: Joi.number().min(10).label('Please Ener rooms left'),
         }
         
     componentDidMount() {
         const amenities = getAmenities();
         this.setState({amenities});
         
         // read ID property in the route param
         
         const hotelId = this.props.match.params.id;
         if (hotelId === 'new') return;
         
         const hotel = getHotel(hotelId);
         if (!hotel) return this.props.history.replace("/not-found"); // use relaplce to not send back to form again
         
         this.setState({data: this.productViewModel(hotel)})
        
       
         
     }
        
     productViewModel(hotel) {
        return {
            _id: hotel._id,
            title: hotel.title,
            amenityId: hotel.amenities._id,
            price: hotel.price,
            rooms: hotel.rooms,
            numberInStock: hotel.numberInStock
        }        }
      
        formSubmission = () => {
            console.log("done", this.state)
           // saveHotel(this.state.data);
            
            this.props.history.push("/hotels") // redirect us
            
        }
    render() { 
              
              const {data, errors} = this.state;
              
        return (  <form onSubmit={this.handleSubmit}>
                
                 {/* {this.reusableInput('name', 'title', 'type' )}  */}
                 {this.reusableInput('name', 'Enter Hotel Name' )}
                {this.reusableInput('rooms', 'Rooms' )}
                {this.reusableInput('price', 'Price / Night' )}
                {this.reusableInput('numberInStock', 'Rooms Available' )}
         
                {this.resusableSelect('hotelId', 'Select Services you can provide', this.state.amenities )}
                {this.reusableButton('Create Hotel')} </form>   );
    }
}
 
export default HotelForm;

/* 
<Input 
                name="name" 
                title={"Enter your Hotel Name"}
                type="text"
                value={data.title}
                onChange={this.onTyping}
                error={errors.title}/>
                 <Input 
                name="rooms" 
                title={"Enter Rooms"}
                type="number"
                value={data.rooms}
                onChange={this.onTyping}
                error={errors.rooms}/>
                 <Input 
                name="price" 
                title={"Enter Price / Night in Rs"}
                type="number"
                value={data.price}
                onChange={this.onTyping}
                error={errors.price}/>
*/