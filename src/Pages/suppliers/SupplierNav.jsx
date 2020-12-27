import React, { Component } from 'react';
import {Link} from "react-router-dom";
const SupplierNav = () => {
    return (
        
        <ul> 
        <li>
         <Link to ="/suppliers/dashboard/admin"> Supplier Admin Dashboard</Link>
         </li>
         <li>
         <Link to ="/suppliers/dashboard/users"> Supplier Admin Users</Link>
         </li>
         </ul>   );
}
 
export default SupplierNav;