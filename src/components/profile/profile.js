import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

const Profile =(props) => { 
    console.log('id', props.match.params.id)
        return (
            <div>
                <a href="./../">Home</a>
                <h2>Profile</h2>
            </div>
        )
}

export default withRouter(Profile)