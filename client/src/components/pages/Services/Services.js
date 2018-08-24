import React, { Component } from 'react';
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
import API from "../../../API/messenger";
import './services.css'

class Services extends Component {
  constructor(props) {
    super(props);

    console.log(this.context, this.props, this);
    this.state = {
      keyword: "",
      location: "",
      USstate: "MN",
      specialty: "professional-counselor", // setting default value for the dropdown select
      results: JSON.parse(localStorage.getItem('providers_results')) || [],
      message: ""
    }
  }

  // function to detect any change 
  handleInputChange = (id, value) => {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    let newState = {};
    newState[id] = value;
    newState.message = "";
    this.setState(newState);
    console.log(newState);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.keyword !== "" && this.state.location !== "" && this.state.USstate !== "") {
      // after button click, format request params before calling the api
      API.getProviders(this.state.keyword.trim(), (this.state.location).toLowerCase().trim(), (this.state.USstate).toLowerCase(), this.state.specialty).then((res) => {

        //if we get valid response, place search into storage.
        localStorage.setItem('providers_results', JSON.stringify(res.data.data));

        this.setState({
          results: JSON.parse(localStorage.getItem('providers_results')),
          keyword: "",
          location: ""
        });

        if (this.state.results.length === 0) {
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
      <div className="p-4">
        <h1>Services</h1>
        <p>search for providers in your area by keyword and specialty</p>
        <h5>{this.state.message}</h5>
        <Results results={this.state.results} />
        <form onSubmit={this.handleFormSubmit}>
          <Input handleChange={this.handleInputChange} keyword={this.state.keyword} location={this.state.location} />
          <Button />
        </form>

          <div className="help-tab">
            <h5><i class="fa fa-phone"></i>immediate assistance online:</h5>
            <a href="http://www.crisischat.org/" target="_blank" rel="noopener noreferrer">Crisis Chat</a>
            <a href="https://www.suicidepreventionlifeline.org/GetHelp/LifelineChat.aspx" target="_blank" rel="noopener noreferrer">National Suicide Prevention</a>
            <a href="https://www.imalive.org/" target="_blank" rel="noopener noreferrer">IMAlive</a>
            <a href="http://www.crisistextline.org/" target="_blank" rel="noopener noreferrer">Crisis Text (smartphones)</a>
          </div>

      </div>

      
    )
  }

  // render the search results to the view
  renderResults = () => {
    return (
      <div>
        <Results results={this.state.results} handleButtonClick={this.handleButtonClick} />
      </div>
    )
  }

  // event listener for the return to search button, clears message as well
  handleButtonClick = () => {
    localStorage.removeItem('providers_results');
    this.setState({
      results: [],
      message: ""
    });
  }

  // if results returned, render that to the view, otherwise the form with message
  render() {
    return (
      <div className="services">
        {this.state.results.length === 0 ? this.renderForm() : this.renderResults()}
      </div>
    )
  }
}

export default Services;