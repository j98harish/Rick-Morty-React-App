import './App.css';
import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroller";

import {CardList} from './components/card-list/card-list';
import {Pagination} from './components/pagination/pagination';

class App extends Component{
  constructor(){
    super();
    
    this.state={
      characters :[],
      nextPage:2,
      pageCount:null,
      contentLeft : true,
    };
  }

  componentDidMount(){
    const {value} = this.state;
    this.fetchData(value);
}

//Fetch data from api
  fetchData(pageNumber){(
    fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`
  )
  .then(response => response.json())
  .then ( users => {this.setState({characters: this.state.characters.concat(users.results)} ,this.setState({pageCount: users.info.pages}))})
  )
}

//Changes active page and provide new data
  handlePageClick = (e) => {
    const activePage = e.selected + 1;
    this.setState({ pageNumber: activePage});
    this.fetchData(activePage);
  };

  //Changes active page and provide new data
  onLoadMore = () => {
    if(this.nextPage > this.state.pageCount ){
      this.setState({contentLeft: false});
      return;
    }
    else{
      this.fetchData(this.state.nextPage);
      // const loadNextPage = this.state.nextPage;
      this.setState({ nextPage: this.state.nextPage + 1});
    }
  }
  

  loadFunc(nextPageNumber) {
    if(this.state.pageCount === nextPageNumber){
      this.setState({pageNumber: this.state.pageNumber + 1})
      this.fetchData(nextPageNumber) 
     }
    this.fetchData(nextPageNumber);
  }

  render(){
    return(
      <div className="App">
        <h1 className= "App-header" > Rick &amp; Morty React App</h1>
        {/* <CardList characters= {this.state.characters}/> */}
        {/* <button type="button" class="btn btn-primary btn-lg"
         onClick = {this.onLoadMore}>Load More</button>  */}

        {/* <Pagination
          totalNumberOfPages = {this.state.pageCount}
          currentPageNumber = {this.state.pageNumber}
          handlePageClick = {this.handlePageClick}
          />  */}
      {/* <InfiniteScroll
        pageStart={1}
        loadMore= {this.loadFunc(this.state.pageNumber)}
        hasMore={this.state.hasMore}
        loader={<div className="loader" key={1}>Loading ...</div>}
        useWindow={false}
        threshold = {3}
      >
      <CardList characters= {this.state.characters}/>
      </InfiniteScroll>  */}

       <InfiniteScroll
      initialLoad = {false}
      loadMore = {this.onLoadMore}
      hasMore = {this.state.contentLeft}
      loader={<div className="loader" key={0}>Loading ...</div>}
      threshold = {350}
      useWindow={true}
      > 
        <CardList characters= {this.state.characters}/>
        {/* <h3>{this.state.contentLeft}  -- {this.state.pageNumber}</h3> */}
      </InfiniteScroll> 
      </div> 
    )
  }
}

export default App;
