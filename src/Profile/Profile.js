import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import { Route } from 'react-router-dom'
import TrainerProfile from '../TrainerProfile/TrainerProfile'
import ProfileAdd from '../Profile/ProfileAdd'

const query = gql`
{
  allProfiles {
    id
    name
    phoneNumber
    trainingProgram
    weight
    weightType
    photos {
      url
    }
    bodyRegions {
      name
    }
  }
}
`

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>The Profile Component</h1>
        <Route path="/profile/trainer-profile" component={TrainerProfile}/>
        <Route path="/profile/trainer-profile/profile-add" component={ProfileAdd}/>
      </div>
    )
  }
}


export default graphql(query)(Profile)

