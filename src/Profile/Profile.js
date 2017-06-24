import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

const query = gql`
   {
    allProfiles{
        id
        name
        phoneNumber
        
  
     }
   }
`

class Profile extends Component {
  render() {
    return <h1>Hey World</h1>
  }
}


export default graphql(query)(Profile)