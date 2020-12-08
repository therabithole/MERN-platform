import React, { Component } from "react";
import Logo from "../logo/Logo";
import "../../../styles/App.css"
import Search from "../../component°/search/Search";


class Navigation extends Component {
  state = {  }
  render() { 
    return (  <section className="header">
    <section className="logo"> <Logo /> </section> 
     <section className="menu">  
     <section className="navigation">
       <ul>
         <li><a href="/"> Home</a></li>
         <li><a href="/hotels"> Hotels</a> </li>
         <li><a href="/restaurants"> Restaurants</a></li>
         <li><a href="/thingstodo"> Things to Do</a></li>
         <li><a href="/suppliers/login">  Supplier Login </a></li> 
        <li> <a href="/suppliers/register">  Supplier Register </a></li> 
        <li> <a href="/customers/login">  Customer Login </a></li> 
        <li> <a href="/customers/register">  Customer Register </a></li> 
        
       </ul>
     </section>
    <section className="search"> <Search/> </section>
     </section>
   </section> );
  }
}
 
export default Navigation;





      



