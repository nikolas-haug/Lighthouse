import React, {Component} from 'react';
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
import API from "../../../API/messenger";

// TO DO - check this package 
// import { PromiseProvider } from "mongoose";

class Services extends Component {

  state = {
    keyword: "",
    location: "",
    USstate: "",
    specialty: "professional-counselor", // setting default value for the dropdown select
    results: []
  }

  // function to detect any change 
  handleInputChange = (event) => {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log(newState);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.keyword !== "" && this.state.location !== "" && this.state.USstate !== "") {
      // after button click, format request params before calling the api
      API.getProviders(this.state.keyword.trim(), (this.state.location).toLowerCase().trim(), (this.state.USstate).toLowerCase(), this.state.specialty).then((res) => {
        // TO DO - refresh the form for next query
        this.setState({
          results: res.data.data,
          keyword: "",
          location: ""
        });
        
      }).catch((err) => {
        console.log(err);
      });
    }
    
  }

  render() {
    return (
      <div>
        <h1>Services</h1>

        <form onSubmit={this.handleFormSubmit}>
          <Input handleChange={this.handleInputChange} keyword={this.state.keyword} location={this.state.location}/>
          <Button />
        </form>
        {/* TO DO - get the results to display on a different page/section with animation transition */}
        <div>
          <Results results={this.state.results}/>
        </div>

      </div>
    )
  }
}

export default Services;