/*
 * Created by raymondkahn on 6/25/17.
 */
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

 const query = gql`
 { 
    allUsers{
        id
        emailAddress
       
    }
 }
`

class User extends Component {
  render() {
    return <h1>Your Information Here</h1>
  }
}

export default graphql(query)(User)

