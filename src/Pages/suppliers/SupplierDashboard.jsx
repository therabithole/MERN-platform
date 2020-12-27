import React, { Component } from 'react'
import {Route, Link} from "react-router-dom";
import SupplierUsers from "./SupplierUsers";
import SupplierAdmins from './SupplierAdmins';
import SupplierNav from "./SupplierNav";


const SupplierDashboard = ({match}) => {
    return ( 
            <section>
                
        <h1> Supplier Dashboard </h1>
        <SupplierNav/>
        <Route path="/suppliers/dashboard/admin" component={SupplierAdmins}/>
        <Route path="/suppliers/dashboard/users" component={SupplierUsers}/>
        
        </section> );
}
 
export default SupplierDashboard;
