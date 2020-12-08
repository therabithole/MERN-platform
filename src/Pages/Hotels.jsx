import React, { Component } from 'react'
import {getHotels} from "../node/services/fakeHotelService";
import {getAmenities} from "../node/services/fakeAmenityService";

// re-usable

import Pagination from "../components_r/component°/pagination/Pagination"
import paginate from "../components_r/component°/pagination/paginate" 
import Sidebar from '../components_r/component°/sidebar/sidebar';
import HotelsTable from "./Products/HotelsTable";
import _ from "lodash"

class Hotels extends Component {
    state = { 
        hotels : [],
        amenities: [],
        pageSize: 5,
        currentPage: 1,
        currentSidebar: [],
        sortColumn: {path: "title", order: 'asc'}
     }

componentDidMount() {
    
    const amenities = [{_id: '', name: "All Amenities"}, ...getAmenities()]
    this.setState({hotels: getHotels(), amenities: amenities})

    
}

handleBookmark = (hotel) => {
    const hotels = [...this.state.hotels];
    const index = hotels.indexOf(hotel);
    hotels[index]= {...hotels[index]};
    hotels[index].bookmark = !hotels[index].bookmark;
    this.setState({hotels})
}    

handleDelete = (hotel) => {
    const hotels = this.state.hotels.filter(hotelinDb => hotelinDb._id !==hotel._id)
    this.setState({hotels});
}


handleSideBar = title => {
    console.log(title)
}
handleSidebarSelect = item => {
    this.setState({selectedSidebarItem: item, currentPage: 1});
    

}

  
handleSort = sortColumn =>{
    
    this.setState({sortColumn})
}
handlePaginationClick = lodashpage => {
    this.setState({currentPage: lodashpage})
}


    render() { 

        const {length: count} = this.state.hotels
        const {currentPage, pageSize, hotels: allHotels, selectedSidebarItem, sortColumn} = this.state;

        if(count === 0) 
        return <p> There are no hotels on our platform </p> 

    const filtered = selectedSidebarItem && selectedSidebarItem._id  //second argument is passed to bypass all emeneties with no id and render it
    ? allHotels.filter( hotel => hotel.amenities._id === selectedSidebarItem._id)
    : allHotels;
    
    const sorted = _.orderBy(filtered, [sortColumn.path],[sortColumn.order] )
        const hotels = paginate(sorted, currentPage, pageSize)

        return ( 
        <section className="content hotels">
         
        <section className="sidebar">
         <Sidebar 
         items={this.state.amenities}
         selectedItem={this.state.selectedSidebarItem}
         onSidebarSelect={this.handleSideBar}
         onItemSelect={this.handleSidebarSelect}
         textProperty="name"
         idProperty="_id"
         /> </section>
            <section className="header">

                <p> Showing {filtered.length} hotels on our platform </p> </section>
            <section className="products hotel">
            
              <HotelsTable 
              hotels ={hotels}
              onBookmark={this.handleBookmark}
              onDelete={this.handleDelete}
              sortColumn={sortColumn}
              onSort={this.handleSort}/>    
                </section> 
            <section className="pagination">
                <Pagination
                totalProducts={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPaginationClick={this.handlePaginationClick}
                />
            </section> 
        </section> );
    }
}
 
export default Hotels;