import React, { Component } from "react";
import Logo from "../logo/Logo";
import "../../../styles/App.css"
import Search from "../../component°/search/Search";
import {Link } from "react-router-dom";

class Navigation extends Component {
  state = {  }
  render() { 
    return (  <section className="header">
    <section className="logo"> <Logo /> </section> 
     <section className="menu">  
     <section className="navigation">
       <ul>
         <li><Link to="/"> Home</Link ></li>
         <li><Link to="/hotels"> Hotels</Link > </li>
         <li><Link to="/restaurants"> Restaurants</Link ></li>
         <li><Link to="/thingstodo"> Things to Do</Link ></li>
         <li><Link to="/suppliers/login">  Supplier Login </Link ></li> 
        <li> <Link to="/suppliers/register">  Supplier Register </Link ></li> 
        <li> <Link to="/customers">  Customers </Link ></li> 
        <li> <Link to="/customers/login">  Customer Login </Link ></li> 
        <li> <Link to="/customers/register">  Customer Register </Link ></li> 
        
       </ul>
     </section>
    <section className="search"> <Search/> </section>
     </section>
   </section> );
  }
}
 
export default Navigation;





      



