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
    specialty: "",
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
    this.setState({
      keyword: "",
      location: "",
      USstate: "",
      specialty: ""
    });
    event.preventDefault();
  };

  handleButtonClick = () => {
    if(this.state.keyword !== "" && this.state.location !== "") {
      // after button click, format request params before calling the api
      API.getProviders(this.state.keyword.trim(), (this.state.location).toLowerCase().trim(), (this.state.USstate).toLowerCase(), this.state.specialty).then((res) => {
        // TO DO - refresh the form for next query
        this.setState({
          results: res.data.data,
          keyword: "",
          location: "",
          USstate: "",
          specialty: ""
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
          <Input handleChange={this.handleInputChange} />
          <Button handleButtonClick={this.handleButtonClick}/>
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