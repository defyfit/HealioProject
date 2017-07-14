import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { addProfile } from '../graphql/profile.graph'

class Profile extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      phoneNumber: '',
      weight: '',
      weightType: ''
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
          <br /><br/>
          <label>
            PhoneNumber:
            <input type="text" onChange={(evt) => this.setState({ phoneNumber: evt.target.value })} />
          </label>
          <br /><br/>
          <label>
            Weight:
            <input type="text" onChange={(evt) => this.setState({ weight: evt.target.value })}/>
          </label>
          <br/><br/>
          <label>
            WeightType:
            <select onChange={(evt) => this.setState({ weightType: evt.target.value })}>
              <option value="">- Please Select</option>
              <option value="Kilos">Kilos</option>
              <option value="Lbs">Lbs</option>
            </select>
          </label>
          <br/><br/>
          <label>
            <button type="submit" value="Submit">Submit</button>
          </label>
        </form>
      </div>
    )
  }
}

export default graphql(addProfile)(Profile)
