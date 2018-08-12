import React, {Component} from 'react';
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
import API from "../../../API/messenger";
import './services.css'

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
    this.setState({message: ""});
    console.log(newState);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.keyword !== "" && this.state.location !== "" && this.state.USstate !== "") {
      // after button click, format request params before calling the api
      API.getProviders(this.state.keyword.trim(), (this.state.location).toLowerCase().trim(), (this.state.USstate).toLowerCase(), this.state.specialty).then((res) => {

        this.setState({
          results: res.data.data,
          keyword: "",
          location: ""
        });

        if(this.state.results.length === 0) {
          this.setState({
            message: "no results! please search again."
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    }
    
  }

  // render the search form to the view
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

  // render the search results to the view
  renderResults = () => {
    return (
      <div>
        <Results results={this.state.results} handleButtonClick={this.handleButtonClick}/>
      </div>
    )
  }

  // event listener for the return to search button, clears message as well
  handleButtonClick = () => {
    this.setState({
      results: [],
      message: ""
    });
  }

  // if results returned, render that to the view, otherwise the form with message
  render() {
    return (
      <div>
        {this.state.results.length === 0 ? this.renderForm() : this.renderResults()}
      </div>
    )
  }
}

export default Services;