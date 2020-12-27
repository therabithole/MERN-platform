import React, { Component } from 'react'

const Hotel = ({match}) => {
    return ( <section> One Hotel  {match.params.id} </section> );
}
 
export default Hotel;
