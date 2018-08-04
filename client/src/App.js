import React, { Component } from 'react';
import Entry from './components/Journal/Entry'
import Wrapper from './components/Wrapper/Wrapper'
import Landing from './components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Landing />
      </Wrapper>
    );
  }
}

export default App;
