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
    
    renderSortIcon = column => { 
               const {sortColumn }  = this.props;
                           
          if (column.path != sortColumn.path) return null;
           if(sortColumn.order  === 'asc') return <i className="fa fa-sort-asc"></i>
           return <i className="fa fa-sort-desc"></i>                    }
    render() { 
        return ( <React.Fragment> 
                
                <thead>
                
            
            <tr>
            {this.props.columns.map(column =>  
            <th key={column.path || column.key } onClick={()=> this.raiseSort(column.path)}> 
            {column.label} {this.renderSortIcon(column)} </th> )} 
            </tr>
            </thead> 
            
            <section> 
            <select>
            {this.props.columns.map((option) => (
                <React.Fragment> 
                <option onClick={()=> this.raiseSort(option.path)} value={option.path}>{option.label}  </option>
            
                    </React.Fragment>
              
            ))}
          </select></section> 
                
                </React.Fragment>
            
           
            
          
       );
    }
}
 
export default Sort;