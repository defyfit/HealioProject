import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Button } from 'reactstrap';

import TrainerProfileList from './TrainerProfile/TrainerProfileList'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/trainer-profile" component={TrainerProfileList}/>

      </div>
    );
  }
}

export default App;
