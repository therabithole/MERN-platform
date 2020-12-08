import React, { Component } from 'react';
import Bookmark from "../../components_r/element°/buttons/like/Bookmark";


class HotelsTable extends Component {
    state = {  }
    
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
       
        const {hotels, onDelete, onBookmark} = this.props;
    
        return ( <table className="table">
        <thead>
            <tr>
                <th onClick={()=> this.raiseSort('title')}> Title</th>
                <th onClick={()=> this.raiseSort('amenity.name')}>Amenity</th>
                <th onClick={()=> this.raiseSort('rooms')}> Rooms available </th>
                <th onClick={()=> this.raiseSort('price')}>Price </th>
                <th onClick={()=> this.raiseSort('bookmark')}>  Bookmark </th>
            </tr>
        </thead>
        <tbody> 
            {hotels.map((hotel) => (
            <tr key={hotel._id}> 
                <td>{hotel.title} </td>
                <td>{hotel.amenities.name}</td>
                <td>{hotel.rooms}</td>
                <td> {hotel.price} </td>
                <td> <Bookmark bookmarked={hotel.bookmark} toggleClick={() => onBookmark(hotel)}/> </td>
                <td> <button onClick={() => onDelete(hotel)}className="btn btn-danger btn-sm"> Delete </button>   </td>
    
            </tr>
            ))}
        </tbody>
    </table> );
    }
}
 
    
  
 
export default HotelsTable;
