import React, { Component } from 'react'
class Sort extends Component {
    
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path === path)
    sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
        
        sortColumn.path = path;
        sortColumn.order = 'asc'
        }
    this.props.onSort(sortColumn)
    }
    render() { 
        return ( <React.Fragment> 
                
                <thead>
                
            
            <tr>
            {this.props.columns.map(column =>  
            <th key={column.path || column.key } onClick={()=> this.raiseSort(column.path)}> 
            {column.label} </th> )} 
            </tr>
            </thead> 
            
            <section> 
            <select>
            {this.props.columns.map((option) => (
              <option onClick={()=> this.raiseSort(option.path)} value={option.path}>{option.label}</option>
            ))}
          </select></section> 
                
                </React.Fragment>
            
           
            
          
       );
    }
}
 
export default Sort;