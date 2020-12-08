import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import 'font-awesome/css/font-awesome.css'
import "./styles/App.css"


// Components
import Hamburger from "./components_r/page°/menu+nav/Hamburger";

// Pages
import Home from "./Pages/Home";
import Hotels from "./Pages/Hotels";
import Restaurants from './Pages/Restaurants';
import ThingsToDo from "./Pages/ThingsToDo";
import NotFound from "./Pages/NotFound";
import Navigation from './components_r/page°/menu+nav/Navigation';


 import SupplierLogin from "./Pages/suppliers/SupplierLogin";
 import SupplierRegister from "./Pages/suppliers/SupplierRegister"
import CustomerRegister from './Pages/customers/CustomerRegister';
import CustomerLogin from './Pages/customers/CustomerLogin';

function App() {
  return (
    <div className="react-app">
   <Navigation/>   
   <Hamburger/>
   <Switch> 
   <Route path ="/hotels" component={Hotels}/>
   <Route path="/restaurants" component = {Restaurants}/>
   <Route path="/thingstodo" component = {ThingsToDo}/>
   <Route path="/customers/register" component ={CustomerRegister}/>
   <Route path="/customers/login" component ={CustomerLogin}/>
   <Route path="/suppliers/register" component = {SupplierRegister}/>
   <Route path="/suppliers/login" component ={SupplierLogin}/>
   <Route path="/" exact component={Home}/>
   <Route path="/not-found" component={NotFound}/>
   <Redirect to ="/not-found"/>
   </Switch>
    </div>
  );
}

export default App;
