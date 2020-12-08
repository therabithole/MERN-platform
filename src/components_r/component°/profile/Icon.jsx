import React, { Component } from 'react';
import icon from "../../../assets/images/profile.png"
class Icon extends Component {
    state = {  }
    render() { 
        return ( <section className="profile-icon"> <img src={icon}/> </section> );
    }
}
 
export default Icon;