import React, { Component } from 'react';
import _ from 'lodash'

// tableBody
class productContent extends Component {
  
    
    renderProduct = (product, column) => {
        if (column.content) return column.content(product) // render buttons
        
       return _.get(product, column.path) // render list
    }
    
    createKey = (product, column) => {
        return product._id + (column.path || column.key) 
    }
    render() { 
    
        const {data, columns } = this.props;
        
        
        return ( <tbody> {data.map( product => 
            <tr key={product._id}>
            {columns.map(column => 
                         <td key={this.createKey(product, column)}> 
                         {this.renderProduct(product, column)}
                         </td> )}
                
        </tr>
                                   )}
            
        </tbody> );
    }
}
 
export default productContent;