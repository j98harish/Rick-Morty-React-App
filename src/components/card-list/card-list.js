import React from "react";

import {Card} from "../card/card";

import './card-list.css'

export const CardList  = (props) => {
    console.log(props);
    return(
        <div className= 'card-list'>
            {props.characters.map(character => (
            <Card key = {character.id} character = {character} />)
          )}
        </div>
    )
}
