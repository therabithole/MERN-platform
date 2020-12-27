import React, { Component } from 'react'
import Sort from "../../components_r/component°/sort/Sort";
import ProductContent from "./ProductContent";

class Product extends Component {
    state = {  }
    render() { 
              
        const {columns , data, sortColumn, onSort} = this.props;
        
        return (
    <table className="table">
    
        <Sort 
        // or Product Header
        columns= {columns}
        sortColumn = {sortColumn}
        onSort = {onSort} 
        
        />
<ProductContent data={data} columns={columns}/>

</table> );
    }
}
 
export default Product;