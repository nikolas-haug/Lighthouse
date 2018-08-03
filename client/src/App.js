import React, { Component } from 'react';
import Entry from './components/Journal/Entry'
import Wrapper from './components/Wrapper/Wrapper'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Entry />
      </Wrapper>
    );
  }
}

export default App;
