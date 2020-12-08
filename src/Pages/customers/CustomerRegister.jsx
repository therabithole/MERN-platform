import React, { Component } from 'react'
import RegisterForm from '../../components_r/page°/forms/customers/Register';
class CustomerRegister extends Component {
    state = {  }
    render() { 
        return (<section>  
            <h1> New  Customer Register  </h1>
            <RegisterForm/> 
        </section>  );
    }
}
 
export default CustomerRegister;