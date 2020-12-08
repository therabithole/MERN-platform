import React, { Component } from 'react';
class Search extends Component {
    state = {  }
    render() { 
        return ( <section>  
        <input
          type="search"
          placeholder="Search this site ..."
        />
        <button type="submit">search</button>
      </section> );
    }
}
 
export default Search;