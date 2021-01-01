import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";

class BaseForm extends Component {
    state = 
    { 
    data: {},
    errors: {}
    }


onTyping =  ({currentTarget: input }) => {
    
    const errors = {...this.state.errors}
    const errorMessage = this.validateFields(input)
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]
    
        // e.currentTarget {}
        const data = {...this.state.data};
        data[input.name] = input.value;
       
        console.log(data)
        
        this.setState({data, errors})
        
    }


    
validateFields = ({name, value}) => {
    const obj = {[name]: value}
    const fieldSchema = {[name]: this.frontEndFormSchema[name]} 
    const {error} = Joi.validate(obj, fieldSchema)
    return error ? error.details[0].message : null;
    }
            
  validateForm = () => {
    const result = Joi.validate(this.state.data, this.frontEndFormSchema, {abortEarly: false})
    if (!result.error)return null   
    const errors = {};
                
    for (let item of result.error.details)
    errors[item.path[0]] = item.message
                
    return errors; }
            
      
    handleSubmit = event => {
        event.preventDefault();
        console.log("default full page reload prevented ")
        
        const setErrors= this.validateForm()
     
        this.setState({errors: setErrors || {}});
        console.log(setErrors);
        
     this.formSubmission();
     
    }
    
   
reusableInput( name, title, type="text") {
    
     
    const {data, errors} = this.state;
    
 return ( 
    <Input 
    name={name} 
    title={title}
    type={type}
    value={data[name]}
    onChange={this.onTyping}
    error={errors[name]}/>)
    
}
 
             
 resusableSelect(name, title, options) {
     const {data, errors} = this.state;
     
     return(<Select 
            name={name}
            value={data[name]}
            title={title} 
            options={options}
            onChange={this.onTyping}
            error={errors[name]}    />)
     
 } 
 
 reusableCheck(name, title, options) {
     const {data, errors} = this.state;
     
     return(<Checkbox
        name={name}
        value={data[name]}
        title={title} 
        options={options}
        onChange={this.onTyping}
        error={errors[name]}    />)
 }
       
reusableButton (title) { 
return (<button
     className="btn btn-primary"> 
    {title} </button>)}


}
 
export default BaseForm;