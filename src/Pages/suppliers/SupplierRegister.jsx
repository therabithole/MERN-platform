import React, { Component } from 'react';
import userIcon from "../../assets/images/userIcon.svg";
import RegisterForm from "../../components_r/page°/Form/Suppliers/RegisterForm"
class SupplierRegister extends Component {
    state = {  }
    render() { 
        return ( <section> 
            <h1> Supplier Register </h1>
            
            <img src={userIcon} alt="works" height="80px" />
          <RegisterForm/> 
           </section>  );
    }
}
 
export default SupplierRegister;