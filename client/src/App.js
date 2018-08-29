import React from 'react';
import Wrapper from './components/Wrapper/Wrapper'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/pages/Services/Services";
import Landing from './components/pages/Landing/Landing';
import Footer from './components/Footer/Footer';
import SearchResults from './components/Footer/SearchResults';
import Middleware from './components/Middleware';
import './sticky.css';



const App = () => (
  
    <Router>
    <Wrapper>
      <div className="body-wrapper">
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Landing} />
        <Route exact path="/logout" component={Landing} />
        <Route exact path="/entries" component={Middleware} />
        <Route exact path="/new_entry" component={Middleware} />
        <Route exact path="/edit_entry/:id" component={Middleware} />
        <Route exact path="/my_journals" component={Middleware} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/custom_search/:term" component={SearchResults}/>
        <Route exact path="/assessment" component={Middleware}/>
        <div className="push"></div>
      </div>
      <div className="footer">
        <Route path="/" component={Footer} />
        </div>
      </Wrapper>
    </Router>
  
);

export default App;
