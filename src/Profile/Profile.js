import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import { Route } from 'react-router-dom'
import TrainerProfile from '../TrainerProfile/trainerprofile'

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
      </div>
    )
  }
}


export default graphql(query)(Profile)
