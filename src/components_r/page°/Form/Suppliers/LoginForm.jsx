import React, { Component } from 'react';
import Input from "../Input";
import Joi from 'joi-browser';
import BaseForm from "../BaseForm"


class LoginForm extends BaseForm {
    state = { 
             data : 
             { name: "",
              email: "",
              password: ""
              } ,
             errors: {}
            }
    
    
    frontEndFormSchema = 
    { name: Joi.string().min(3).required().label('Business Name'),
    email: Joi.string().email().required().label('Business Email'),
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
                {this.reusableInput('password', 'Enter your Password1', "password")}
                 {this.reusableButton('Login as a Business')}
            </form>
            );
    }
}
 
export default LoginForm;

/* 

htmlFor: is linked to id : and is for clicking which field is relat*ed/
/* to link typeed input and put it in state*/
/*  create value = this.sate and then link using onChange */
/* name s to ref e.vcurrentTarget.name */


/* 

<div className="form-group">
                <label htmlFor="username"> Username </label>
                <input
                className="form-control"
                id="username"
                type="text"
                value = {this.state.account.username} 
                onChange={this.onTyping}
                name='username'
                />
                </div>
                
                
                <div className="form-group">
                <label htmlFor="password">Password </label>
                <input id="password"
                type="text" 
                value = {this.state.account.password} 
                onChange={this.onTyping}
                name='password' 
                className="form-control"/>
                </div>
                
*/


/* 

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
                title={"Enter your Password"}
                type="password"
                value={data.password}
                onChange={this.onTyping}
                error={errors.password}/>
               
*/