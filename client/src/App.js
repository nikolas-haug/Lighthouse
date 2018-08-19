import React from 'react';
import Entry from './components/pages/Entry/Entry'
import Wrapper from './components/Wrapper/Wrapper'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/pages/Services/Services";
import Landing from './components/pages/Landing/Landing';
import Journal from './components/pages/Journal/Journal';
import EditEntry from './components/pages/Entry/Edit_entry';

import Footer from './components/Footer/Footer';
import SearchResults from './components/Footer/SearchResults';
import Assessment from './components/pages/Assessment/Assessment';



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
        <Route exact path="/my_journals" component={Journal} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/custom_search/:term" component={SearchResults}/>
        <Route exact path="/assessment" component={Assessment}/>
      </div>
        <Route path="/" component={Footer} />
      </Wrapper>
    </Router>
  
);

export default App;
