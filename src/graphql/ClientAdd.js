import React, { Component } from 'react'

import { addClients, fetchClients } from '../graphql/profile.graph'
import { graphql } from 'react-apollo'

import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class ClientAdd extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      region: ''
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: this.state
    }).then(() => {
      this.setState({
        name: '',
        region: ''
      })
      alert('Client added!')
    }).catch((err) => {
      console.error(err)
    })
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" id="name" value={this.state.name} onChange={(evt) => this.setState({ name: evt.target.value })}/>
              </FormGroup>

              <FormGroup>
                <Label for="region">Region</Label>
                <Input type="select" value={this.state.region} onChange={(evt) => this.setState({ region: evt.target.value })}>
                  <option value="">- Please Select</option>
                  <option value="NorthWest">North West</option>
                  <option value="EveryoneElse">Everyone Else</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Button type="submit" color="primary">Submit</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default graphql(addClient)(ClientAdd)
