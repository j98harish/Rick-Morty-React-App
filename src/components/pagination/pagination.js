import React from 'react'
import ReactPaginate from 'react-paginate';

import './pagination.css'

// handlePageClick = (e) => {
//     const activePage = e.selected + 1;
//     this.setState({ pageNumber: activePage});
//     this.fetchData(activePage);
//   };


export const Pagination = ({totalNumberOfPages, handlePageClick})=> { 
    return(
        <div>
            <ReactPaginate
                pageCount= {totalNumberOfPages}
                pageRangeDisplayed = {2}
                marginPagesDisplayed = {5}
                previousLabel = 'Privious'
                nextLabel = 'Next'
                breakLabel = '...'
                onPageChange = {handlePageClick}
                containerClassName={'pagination'}
                breakClassName={'break-me'}
                activeClassName={'active'}
            />
        </div>
    )

}
