import React, { Component } from 'react';
const Sidebar = (props) => {
    
    const {items, textProperty, idProperty, onItemSelect, selectedItem, } = props;
   
    
    return ( <ul className="list-group">
            {items.map(item=> 
                <li onClick={()=> onItemSelect(item)} key={item[idProperty]}
                className={item === selectedItem ? "list-group-item active" : "list-group-item"}>{item[textProperty]}
                </li>)}
             </ul>   );
}
 
export default Sidebar;