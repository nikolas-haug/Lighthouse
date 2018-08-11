import React, {Component} from 'react';
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
import API from "../../../API/messenger";
import './services.css'

// TO DO - check this package 
// import { PromiseProvider } from "mongoose";

class Services extends Component {

  state = {
    keyword: "",
    location: "",
    USstate: "MN",
    specialty: "professional-counselor", // setting default value for the dropdown select
    results: [],
    message: ""
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
        console.log(this.state.results.length);
      }).catch((err) => {
        console.log(err);
      });
    }
    
  }

  // TEST RENDERING FOR RESULTS
  renderForm = () => {
    return (
      <div>
        <h1>Services</h1>
        <h5>{this.state.message}</h5>
        <Results results={this.state.results}/>
        <form onSubmit={this.handleFormSubmit}>
          <Input handleChange={this.handleInputChange} keyword={this.state.keyword} location={this.state.location}/>
          <Button />
        </form>
      </div>
    )
  }

  renderResults = () => {
    return (
      <div>
        {/* <button onClick={this.returnToSearch}>back to search</button> */}
        <Results results={this.state.results} handleButtonClick={this.handleButtonClick}/>
      </div>
    )
  }

  handleButtonClick = () => {
    this.setState({
      results: []
    });
  }

  render() {
    return (

    // TEST RENDERING OF RESULTS
      <div>
        {this.state.results.length === 0 ? this.renderForm() : this.renderResults()}
      </div>



      // <div>
      //   <h1>Services</h1>

        
      //   <form onSubmit={this.handleFormSubmit}>
      //     <Input handleChange={this.handleInputChange} keyword={this.state.keyword} location={this.state.location}/>
      //     <Button />
      //   </form>
      //   {/* TO DO - get the results to display on a different page/section with animation transition */}
      //   <div>
      //     <Results results={this.state.results}/>
      //   </div>

      // </div>
    )
  }
}

export default Services;