import React, { Component } from 'react';
import Entry from './components/Journal/Entry'
import Wrapper from './components/Wrapper/Wrapper'
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Services from "./components/pages/Services";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/services" component={Services} />
    </div>
  </Router>
);
>>>>>>> helgy

export default App;
