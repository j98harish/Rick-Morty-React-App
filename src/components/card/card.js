import React from 'react';

import './card.css'

export const Card = (props) => (
    <div className = 'card-container'>
        <img alt = "character" src={`${props.character.image}`}/>
        <h2>
           {props.character.name}
        </h2>
        <p>{props.character.species} - {props.character.status}</p>
    </div>
) 