import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Profile from './Profile/Profile'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/profile" component={Profile}/>
      </div>
    );
  }
}

export default App;
