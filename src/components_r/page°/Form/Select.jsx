import React from 'react';

const Select = ({name, title, value, options, error, onChange}) => {
    
  
    
       return (<React.Fragment>
                <div className="form-group">
            <label htmlFor={name}> {title}</label>
            <select name={name} id={name} className="form-control"> 
            <option value=""/>
            {options.map(option => (
                  <option key={option._id} value={option._id} onChange={onChange}> 
                  {option.name} 
                  </option>     
                  ))}
             </select>
             {error && <div className="alert alert-danger"> {error}</div> }
            </div> 
            
           
            </React.Fragment> );
}
 
export default Select;