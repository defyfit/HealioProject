import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { query } from './trainer-profile.graphql'

import { Jumbotron, Container } from 'reactstrap'


class TrainerProfile extends Component {
  renderJumbotron (TrainerProfile) {
    const trainerProfile = trainerProfile.map((trainerProfile) => {
      const credentials = trainerProfile.credentials.map((credential, idx) => <span key={idx}>Credential</span>)
      const businessName = trainerProfile.businessName.map((businessName, idx) => <span key={idx}>Business Name</span>)
      const bodyRegions = trainerProfile.bodyRegions.map((region, idx) => <span key={idx}>Body Regions</span>)

      return (
        <tr key={trainerProfile.id}>
          <td>{trainerProfile.id}</td>
          <td>{trainerProfile.businessName}</td>
          <td>{trainerProfile.credentials}</td>
          <td>{trainerProfile.bodyRegions}</td>
        </tr>
      )
    })


    return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Trainer Profile</h1>
            <p className="lead">This is an example of a trainers profile</p>
        </Container>
      </Jumbotron>
    </div>
    )
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Trainer Profile</h2>
          <Table striped bordered>
            <thead>
            <tr>
              <th>ID</th>
              <th>Business Name</th>
              <th>Credentials</th>
              <th>Body Regions</th>
            </tr>
            </thead>
            <tbody>
            {trainerProfiles}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

  render () {
    if(this.props.data.loading) {
      return <h1>Loading</h1>
    }

    if(this.props.data.hasOwnProperty('TrainerProfile') && this.props.data.TrainerProfile !== null) {
      return this.renderJumbotron(this.props.data.TrainerProfile)
    }

    return null
  }
}


export default graphql(query)(TrainerProfile)