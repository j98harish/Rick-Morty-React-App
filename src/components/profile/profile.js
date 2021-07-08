import React, { Component } from 'react'
import { withRouter} from 'react-router-dom';


const Profile =(props) => { 
    const abc = (props.location.state.episode.length/41)*100
    console.log('id', props.match.params.id, props.location.state)
        return (
            <div className = 'profile text-success '>
                <a href="./../" className = 'link-success'>Home</a>
                <br />
                <img className = 'rounded-circle' src={props.location.state.image}  />
                <h2>{props.location.state.name}</h2>
                <div>
                {props.location.state.species}
                <br />
                Location : {props.location.state.origin.name}
                </div>
                <p>{props.location.state.episode.length} out of 41</p>
                {/*<h3 >Appearance</h3>
                 <div className="container progress">   
                    <div className="progress-bar" style ={{width:`${abc}%`}}>{abc}%</div>
                </div> */}
            </div>
        )
}

export default withRouter(Profile)