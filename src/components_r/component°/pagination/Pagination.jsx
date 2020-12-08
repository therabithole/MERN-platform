import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";
import _ from 'lodash';

const Pagination = (props) => {
    
    const {totalProducts, pageSize, currentPage, onPaginationClick} = props
    console.log(currentPage)
    const totalPages = Math.ceil(totalProducts / pageSize);
    if (totalPages === 1) return null; // show no pagination if one page hotels
    const lodAshPages = _.range(1, totalPages + 1);



    return ( 
        <ul className='pagination'>
            {lodAshPages.map(lodashpage=> 
            <li key={lodashpage} className={lodashpage === currentPage ? 'page-item active' : 'page-item'}> 
            <a className="page-link" onClick={()=> onPaginationClick(lodashpage)}>{lodashpage}
            </a>
            </li> 
  )}
                  </ul>
         );
}
 
 Pagination.propTypes = {
    totalProducts: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPaginationClick: PropTypes.func.isRequired
 }
export default Pagination;