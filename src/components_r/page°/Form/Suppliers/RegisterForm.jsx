import React, { Component } from 'react';
import Input from "../Input";
import Joi from 'joi-browser';
import BaseForm from '../BaseForm';
class RegisterForm extends BaseForm {
    state = { 
             data: {
                 name: '',
                 email: '',
                 password: ''
             },
             errors: {}
              }
    
              frontEndFormSchema = 
              { name: Joi.string().min(3).required().label('Desired Business Name'),
              email: Joi.string().email().required().label('Desired Business Email'),
               password: Joi.string().required().label('Desired Password')
                  
              }
              
              formSubmission = () => {
                console.log(this.state)
                
            }
              
    render() { 
        const {data, errors} = this.state;
    
        return ( 
            <form onSubmit={this.handleSubmit}>
            {/* {this.reusableInput('name', 'title', 'type' )}  */}
             {this.reusableInput('name', 'Enter business name' )}
            {this.reusableInput('email', 'Enter business email' )}
            {this.reusableInput('password', 'Enter your Password1', 'password' )}
            {this.reusableButton('Register your Business')}
           
            </form>    );
    }
}
 
export default RegisterForm;