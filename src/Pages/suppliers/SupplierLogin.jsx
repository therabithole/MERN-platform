import React, { Component } from "react";
 import userIcon from "../../assets/images/userIcon.svg";
import LoginForm from "../../components_r/page°/forms/suppliers/Login";

class SupplierLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <img src={userIcon} alt="works" height="80px" />
          <h1> Supplier Login Panel</h1>
        
        </section>
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default SupplierLogin;
