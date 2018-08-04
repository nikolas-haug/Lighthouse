import React, { Component } from 'react';
import Entry from './components/Journal/Entry'
import Wrapper from './components/Wrapper/Wrapper'
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Login />
      </Wrapper>
    );
  }
}

export default App;
