import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

 const query = gql`
  {
    allTrainerProfiles{
        id
        businessName
        credentials
        results {
          id
        }
        bodyRegions {
          id
        }
    } 
  }
 `

class TrainerProfile extends Component {
  render () {
    return <h1>Lets Make a Change Together</h1>
  }
}

export default graphql(query)(TrainerProfile)

// export default TrainerProfile