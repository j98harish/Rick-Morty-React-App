import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import {Card} from "../card/card";

import './card-list.css'

export const CardList  = (props) => {
    console.log(props);
    return(
        <Router>
             <Link to = "/home"> 
                <div className= 'card-list'>
                {props.characters.map(character => (
                <Card key = {character.id} character = {character} />)
              )}
            </div>            
            </Link>
            <Switch>
                <Route exact path="/home">
                    <div className= 'header'>
                        <h1>hello</h1>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}
