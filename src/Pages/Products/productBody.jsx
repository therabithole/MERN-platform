import React, { Component } from 'react';
import Bookmark from "../../components_r/element°/buttons/like/Bookmark";
import {Link} from 'react-router-dom';
import Product from "./Product";


class ProductBody extends Component {
    
    state = {
        columns : [
            {path: 'title', label: "Title", content: product => <Link to={`/hotels/${product._id}`}> {product.title}</Link>  },
            {path: 'amenities.name', label: "Amenity"},
            {path: 'rooms', label: "Rooms"},
            {path: 'price', label: "Price"},
            {key: 'bookmark', content : product => (<Bookmark bookmarked={product.bookmark} toggleClick={() => this.props.onBookmark(product)}/> ) }, // bookmark
            {key : 'delete', content :  product =>  <button onClick={() => this.props.onDelete(product)}className="btn btn-danger btn-sm"> Delete </button>  }, // delete
        ]
    }
    
    render() { 
       
        const {products, sortColumn, onSort} = this.props;
    
        return ( <Product
                columns={this.state.columns}
                data={products}
                sortColumn={sortColumn}
                onSort={onSort}/> );
    }
}
 
    
  
 
export default ProductBody;
