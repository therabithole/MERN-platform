import React from 'react';

const Checkbox = ({name, title, type="chekcbox", value, options, onChange, error, ...rest}) => {
    return ( <div> 
               <h5>Select your {title} </h5> 
               
               <div>
                {this.state.amenities.map(amenity=> (
                   <div className="form-group">
                    <input type="checkbox" id={amenity.name} name={amenity.name} value={amenity.name}/>
                    <label htmlFor={amenity.name}> {amenity.name} </label>
                    </div>
                ))}
                </div>   
               
            {options.map(option => (
            <div class="form-check">
            <input
             type={type}
            value={value}
            onChange={onChange}
            id={name} 
            name={name}
           
            className="form-check-input" />
            <label htmlFor={name} className="form-check-label" > {option.name} </label>
            
          {/* {error && <article className="alert alert-danger error-message"> {error} </article>} */}  

</div>))}</div> );
}
 
export default Checkbox;