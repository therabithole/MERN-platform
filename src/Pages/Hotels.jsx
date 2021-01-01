import React, { Component } from 'react'
import {getHotels} from "../node/services/fakeHotelService";
import {getAmenities} from "../node/services/fakeAmenityService";

// re-usable

import Pagination from "../components_r/component°/pagination/Pagination"
import paginate from "../components_r/component°/pagination/paginate" 
import Sidebar from '../components_r/component°/sidebar/sidebar';
import ProductBody from "../Pages/Products/ProductBody";
import SearchBox from "../components_r/component°/search/SearchBox";
import _ from "lodash"

import {Link} from "react-router-dom";

// Add New Hotel
import HotelForm from "../components_r/page°/Form/Products/HotelForm";

class Hotels extends Component {
    state = { 
        hotels : [],
        amenities: [],
        currentPage: 1,
        pageSize: 5,
       searchQuery: "",
       selectedSidebarItem: null,
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


handleSidebarSelect = item => {
    this.setState({selectedSidebarItem: item, searchQuery: "", currentPage: 1});
    

}

  
handleSort = sortColumn =>{
    
    this.setState({sortColumn})
}
handlePaginationClick = lodashpage => {
    this.setState({currentPage: lodashpage})
}

handleSearch = query => {
    this.setState({searchQuery: query, selectedSidebarItem: null, currentPage: 1})
}
getPageData = () => {

    const {currentPage, pageSize, hotels: allHotels, searchQuery, selectedSidebarItem, sortColumn} = this.state;
    
    let filtered = allHotels;
    if(searchQuery) {
       filtered = allHotels.filter(hotel => hotel.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
    }
    else if(selectedSidebarItem && selectedSidebarItem._id)
      //second argument is passed to bypass all emeneties with no id and render it
    filtered = allHotels.filter( hotel => hotel.amenities._id === selectedSidebarItem._id)
   
    const sorted = _.orderBy(filtered, [sortColumn.path],[sortColumn.order] )
    const hotels = paginate(sorted, currentPage, pageSize)
        
    return {totalCount: filtered.length, data: hotels } 
}


    render() { 

        const {length: count} = this.state.hotels
        
        const {currentPage, pageSize, sortColumn, searchQuery} = this.state;
      

       
        if(count === 0) 
        return <p> There are no hotels on our platform </p> 

   
const {totalCount, data: hotels} = this.getPageData();

        return ( 
        <section className="content hotels">
         
        <section className="sidebar">
         <Sidebar 
         items={this.state.amenities}
         selectedItem={this.state.selectedSidebarItem}
         onItemSelect={this.handleSidebarSelect}
         textProperty="name"
         idProperty="_id"
         />
         
          </section>
            <section className="header">
            <Link to="/hotels/new" className="btn btn-primary"> Hotel Form </Link> 

                <p> Showing {totalCount} hotels on our platform </p> </section>
            <section className="products hotel">
            <SearchBox value={searchQuery} onChange={this.handleSearch}/>
              <ProductBody 
              products ={hotels}
              onBookmark={this.handleBookmark}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              />    
                </section> 
            <section className="pagination">
                <Pagination
                totalProducts={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPaginationClick={this.handlePaginationClick}
                />
            </section> 
        </section> );
    }
}
 
export default Hotels;