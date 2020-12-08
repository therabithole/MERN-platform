import React, { Component } from 'react';
import LoginForm from '../../components_r/page°/forms/customers/Login';
class CustomerLogin extends Component {
    state = {  }
    render() { 
        return ( 
        <section>  
            <h1>Existing Customer logins  </h1>
            <LoginForm/> 
        </section>  );
    }
}
 
export default CustomerLogin;