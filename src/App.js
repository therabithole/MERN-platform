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
 import SupplierRegister from "./Pages/suppliers/SupplierRegister";
 
 import SupplierDashboard from './Pages/suppliers/SupplierDashboard';
import Customers from './Pages/customers/Customers';

import HotelForm from "./components_r/page°/Form/Products/HotelForm";

function App() {
  return (
    <div className="react-app">
   <Navigation/>   
   <Hamburger/>
   <Switch> 
   
   <Route path="/hotels/:id" component={HotelForm}/>
   <Route path ="/hotels" component={Hotels}/>
   <Route path="/restaurants" component = {Restaurants}/>
   <Route path="/thingstodo" component = {ThingsToDo}/>
   <Route path="/customers" component = {Customers}/>
   <Route path="/customers/register" component ={NotFound}/>
   <Route path="/customers/login" component ={NotFound}/>
   <Route path="/suppliers/register" component = {SupplierRegister}/>
   <Route path="/suppliers/login" component ={SupplierLogin}/>
   <Route path="/suppliers/dashboard" component={SupplierDashboard}/>
   <Route path="/" exact component={Home}/>
   <Route path="/not-found" component={NotFound}/>
  
   <Redirect to ="/not-found"/>
   </Switch>
    </div>
  );
}

export default App;
