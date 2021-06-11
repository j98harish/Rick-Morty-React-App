import './App.css';
import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list';
import {Pagination} from './components/pagination/pagination';

class App extends Component{
  constructor(){
    super();
    
    this.state={
      characters :[],
      pageNumber:1,
      pageCount:null,
      test:null,
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
  .then ( users => {this.setState({characters:users.results},this.setState({pageCount: users.info.pages}))})
  )
}

//Changes active page and provide new data
  handlePageClick = (e) => {
    const activePage = e.selected + 1;
    this.setState({ pageNumber: activePage});
    this.fetchData(activePage);
  };

  render(){
    return(
      <div className="App">
        <h1 className= "App-header" > Rick &amp; Morty React App</h1>
        <CardList characters= {this.state.characters}/>
        <Pagination
          totalNumberOfPages = {this.state.pageCount}
          currentPageNumber = {this.state.pageNumber}
          handlePageClick = {this.handlePageClick}
          />
      </div>
    )
  }
}

export default App;
