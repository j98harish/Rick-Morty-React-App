import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.css'

const Card = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        props.history.push(`/profile/${props.character.id}`,props.character)
    }
    return(
        <a onClick={onClick}
         href='/profile'>
        <div className = 'card-container'>
            <img alt = "character" src={`${props.character.image}`}/>
            <h2>
                {props.character.name}
            </h2>
            <p>{props.character.species} - {props.character.status}</p>
            
        </div>
        </a>
    )
  
}

export default withRouter(Card);