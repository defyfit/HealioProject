import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { query } from './trainer-profile.graphql'

import { Container, Row, Col, Table } from 'reactstrap'


class TrainerProfileList extends Component {
  renderTable (allTrainerProfiles) {
    /*
      create a variable that contains a row of trainerProfile
     */
    const trainerProfiles = allTrainerProfiles.map((trainerProfile) => {
      const credentials = trainerProfile.credentials.map((credential, idx) => <span key={idx}>{credential}</span>)
      const bodyRegions = trainerProfile.bodyRegions.map((region, idx) => <span key={idx}>{region.name}</span>)

      return (
        <tr key={trainerProfile.id}>
          <td>{trainerProfile.id}</td>
          <td>{trainerProfile.businessName}</td>
          <td>{credentials}</td>
          <td>{bodyRegions}</td>
        </tr>
      )
    })

    return (
      <Container>
        <Row>
          <Col>
            <h2>Trainer Profile List</h2>
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
    /*
      if data isn't loading and we have allTrainerProfiles
        show table
     */
    if (this.props.data.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.data.hasOwnProperty('allTrainerProfiles') && this.props.data.allTrainerProfiles !== null) {
      return this.renderTable(this.props.data.allTrainerProfiles)
    }

    return null
  }
}

export default graphql(query)(TrainerProfileList)
/*
  Function / Method Syntax

  someName            ()                            { }

  ^ Function name     ^ parameters for function     ^ Where our code goes for this function




  graphql(query, options*)(ComponentToWrap)
 */
