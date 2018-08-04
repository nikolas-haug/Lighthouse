import React, { Component } from 'react';
import Entry from './components/pages/Entry/Entry'
import Wrapper from './components/Wrapper/Wrapper'
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Login from './components/pages/Login/Login'

const App = () => (
  <Wrapper>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/journal" component={Entry} />
        <Route exact path="/services" component={Services} />
      </div>
    </Router>
  </Wrapper>
);
>>>>>>> cdb63b9ca3b098d8777b0aa4523e15779b64e60e

export default App;
