import React, { Component } from 'react';
import Entry from './components/Journal/Entry'
import Wrapper from './components/Wrapper/Wrapper'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Homge";
import Journal from "./components/pages/Journal";
import Services from "./components/pages/Services";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/journal" component={Journal} />
      <Route exact path="/services" component={Services} />
    </div>
  </Router>
);

export default App;
