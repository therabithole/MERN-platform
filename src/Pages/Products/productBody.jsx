import React, { Component } from 'react';
import Bookmark from "../../components_r/element°/buttons/like/Bookmark";
import Sort from '../../components_r/component°/sort/Sort';
import ProductContent from "./ProductContent";


class ProductBody extends Component {
    
    state = {
        columns : [
            {path: 'title', label: "Title"},
            {path: 'amenities.name', label: "Amenity"},
            {path: 'rooms', label: "Rooms"},
            {path: 'price', label: "Price"},
            {key: 'bookmark', content : product => (<Bookmark bookmarked={product.bookmark} toggleClick={() => this.props.onBookmark(product)}/> ) }, // bookmark
            {key : 'delete', content :  product =>  <button onClick={() => this.props.onDelete(product)}className="btn btn-danger btn-sm"> Delete </button>  }, // delete
        ]
    }
    
    render() { 
       
        const {products, sortColumn, onSort} = this.props;
    
        return ( <table className="table">
                <Sort 
                columns= {this.state.columns}
                sortColumn = {sortColumn}
                onSort = {onSort}
                />
       <ProductContent data={products} columns={this.state.columns}/>
       
    </table> );
    }
}
 
    
  
 
export default ProductBody;
