import React from 'react';
import 'font-awesome/css/font-awesome.css'

const Bookmark = (props) => {
    
    let classes = 'fa fa-heart';
    if( !props.bookmarked ) classes += "-o"
    
    return ( 
    <i
    onClick={props.toggleClick}
    style={{cursor: "pointer"}}
    className={classes} 
    aria-hidden="true"> </i> );
}

export default Bookmark;