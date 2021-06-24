import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import {Header} from './components/header/header';
import {AllCards} from './components/all-cards/all-cards';
import Profile from './components/profile/profile';
import {Footer} from './components/footer/footer';


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
  onLoadMore = () => {
    if(this.nextPage > this.state.pageCount ){
      this.setState({contentLeft: false});
      return;
    }
    else{
      this.fetchData(this.state.nextPage);
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
        <Header />
        <Router>
        <Switch>
          <Route exact path="/" >
            <AllCards
              characters = {this.state.characters}
              onLoadMore = {this.onLoadMore}
              contentLeft = {this.state.contentLeft}
            />
          </Route>
          <Route path="/profile/:id" >
            <Profile />
          </Route>
        </Switch>
        </Router>
        <Footer />
      </div> 
    )
  }
}

export default App;
