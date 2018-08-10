import React from 'react';
import Entry from './components/pages/Entry/Entry'
import Wrapper from './components/Wrapper/Wrapper'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/pages/Services/Services";
import Landing from './components/pages/Landing/Landing';
import Journal from './components/pages/Journal';
import EditEntry from './components/pages/Entry/Edit_entry';



const App = () => (
  
    <Router>
    <Wrapper>
      <div >
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Landing} />
        <Route exact path="/logout" component={Landing} />
        <Route exact path="/entries" component={Entry} />
        <Route exact path="/new_entry" component={Entry} />
        <Route exact path="/edit_entry/:id" component={EditEntry} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/services" component={Services} />
       
      </div>
      </Wrapper>
    </Router>
  
);

export default App;
