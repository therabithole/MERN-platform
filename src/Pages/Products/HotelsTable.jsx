import React, { Component } from 'react';
import Bookmark from "../../components_r/element°/buttons/like/Bookmark";
import Sort from '../../components_r/component°/sort/Sort';

class HotelsTable extends Component {
    
    state = {
        columns : [
            {path: 'title', label: "Title"},
            {path: 'amenities.name', label: "Amenity"},
            {path: 'rooms', label: "Rooms"},
            {path: 'price', label: "Price"},
            {key: 'bookmark'}, // bookmark
            {key : 'delete'}, // delete
        ]
    }
    
    render() { 
       
        const {hotels, onDelete, onBookmark, sortColumn, onSort} = this.props;
    
        return ( <table className="table">
                <Sort 
                columns= {this.state.columns}
                sortColumn = {sortColumn}
                onSort = {onSort}
                />
       
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
