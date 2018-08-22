import React, { Component } from 'react';
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
import API from "../../../API/messenger";
import './services.css'

import { withRouter } from 'react-router';

class Services extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      keyword: "",
      location: "",
      USstate: "MN",
      specialty: "professional-counselor", // setting default value for the dropdown select
      results: JSON.parse(localStorage.getItem('providers_results')) || [],
      message: ""
    }
  }

  // componentDidMount() {
  //   this.props.router.setRouteLeaveHook(this.props.route, this.clearLocalStorage);
  // }

  clearLocalStorage() {
    localStorage.removeItem('providers_results');
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
      <div>
        <h1>Services</h1>
        <h5>{this.state.message}</h5>
        <Results results={this.state.results} />
        <form onSubmit={this.handleFormSubmit}>
          <Input handleChange={this.handleInputChange} keyword={this.state.keyword} location={this.state.location} />
          <Button />
        </form>
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

export default withRouter(Services);