import React, {Component} from 'react';
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
import messenger from "../../../API/messenger";

// import { PromiseProvider } from "mongoose";

class Services extends Component {

  state = {
    keyword: "",
    location: "",
    results: []
  }

  // function to detect any change 
  handleInputChange = (event) => {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleButtonClick = () => {
    messenger.getProviders(this.state.keyword, this.state.location)
      .then((res) => {

        this.setState({results: res.data});
        
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (

      <div>

        <h1>Services</h1>

        <form onSubmit={this.handleFormSubmit}>
          <Input handleChange={this.handleInputChange} />
          <Button handleButtonClick={this.handleButtonClick}/>
        </form>

        <div>
          <Results />
        </div>

      </div>
    )
  }
}

export default Services;