import React from 'react'
import ReactPaginate from 'react-paginate';

import './pagination.css'

// handlePageClick = (e) => {
//     const activePage = e.selected + 1;
//     this.setState({ pageNumber: activePage});
//     this.fetchData(activePage);
//   };


export const Pagination = (props)=> {
    console.log(props);
    return(
        <div>
            <ReactPaginate
                pageCount= {props.totalNumberOfPages}
                pageRangeDisplayed = {2}
                marginPagesDisplayed = {5}
                previousLabel = 'Privious'
                nextLabel = 'Next'
                breakLabel = '...'
                onPageChange = {props.handlePageClick}
                containerClassName={'pagination'}
                breakClassName={'break-me'}
                activeClassName={'active'}
            />
        </div>
    )

}
