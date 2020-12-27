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
            <Input 
                name="name" 
                title={"Enter business name"}
                type="text"
                value={data.name}
                onChange={this.onTyping}
                error={errors.name}/>
                <Input 
                name="email" 
                title={"Enter business email"}
                type="email"
                value={data.email}
                onChange={this.onTyping}
                error={errors.email}/>
                 
                 <Input 
                
                name="password" 
                title={"Ent your Password"}
                type="password"
                value={data.password}
                onChange={this.onTyping}
                error={errors.password}/>
                 {this.reusableButton('Register your Business')}
           
            </form>    );
    }
}
 
export default RegisterForm;