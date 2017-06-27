import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { addProfile } from '../graphql/profile.graph'

class Profile extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      phoneNumber: '',
      weight: ''
    }
  }

  handleOnSubmit = (evt) => {
    evt.preventDefault()
  }

  render () {
    return (


      <div>
        <h1>Add Profile</h1>

        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name:
            <input type="text" onChange={(evt) => this.setState({ name: evt.target.value })}/>
          </label>

          <label>
            PhoneNumber:
            <input type="text" onChange={(evt) => this.setState({ phoneNumber: evt.target.value })} />
          </label>
          <label>
            Weight:
            <input type="text" onChange={(evt) => this.setState({ weight: evt.target.value })}/>
          </label>
        </form>


      </div>
    )
  }
}

export default graphql(addProfile)(Profile)
