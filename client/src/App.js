import React, { Component } from 'react';
import Entry from './components/Entry/Entry'
import Wrapper from './components/Wrapper/Wrapper'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Journal from "./components/pages/Journal";
import Services from "./components/pages/Services";
import Login from './components/Login/Login'

const App = () => (
  <Wrapper>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/services" component={Services} />
      </div>
    </Router>
  </Wrapper>
);

export default App;
