import "../../../styles/App.css"
import React, {useState} from 'react'

function Hamburger() {

    const [hidden, visible] = useState(false)


 return (
        <React.Fragment>
        <section className="hamburger">
            
        <section onClick={()=> visible(hidden => !hidden)} className="burger">
            <div className="line1 trans">  </div>
            <div className="line2 trans">  </div>
            <div className="line3 trans">  </div>
            </section> 
        {hidden && <ul className="hamburger-list">
        <li> <a className= "hamburger-links" href="/">Home </a> </li>
        <li> <a className="hamburger-links" href="/hotels"> Hotels </a></li>        
        <li> <a className="hamburger-links" href="/restaurants"> Restaurants </a></li>
        <li> <a className="hamburger-links" href="/thingstodo"> Things to do </a></li>      
        <li> <a className= "hamburger-links" href="/suppliers/login">  Supplier Login </a></li> 
        <li> <a className= "hamburger-links" href="/suppliers/register">  Supplier Register </a></li> 
        <li> <a className= "hamburger-links" href="/customers/login">  Customer Login </a></li> 
        <li> <a className= "hamburger-links" href="/customers/register">  Customer Register </a></li> 
            
        </ul>  }</section> 
         </React.Fragment> )
    
}


export default Hamburger