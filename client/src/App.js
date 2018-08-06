import React from 'react';
import Entry from './components/pages/Entry/Entry'
import Wrapper from './components/Wrapper/Wrapper'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/pages/Services";
// import Login from './components/pages/Login/Login';
import Landing from './components/pages/Landing/Landing';
import Signup from './components/pages/Signup/Signup';
import background from './images/background.jpg';

const Styles = {
  backgroundImage: `url('${background}')`
} 

const App = () => (
  <Wrapper>
    <Router>
      <div style={Styles}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Landing} />
        <Route exact path="/journal" component={Entry} />
        <Route exact path="/services" component={Services} />
      </div>
    </Router>
  </Wrapper>
);

export default App;
