import React, {Component} from 'react';
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
import API from "../../../API/messenger";

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

  handleFormSubmit = (event) => {
    // this.setState({
    //   keyword: "",
    //   location: ""
    // });
    event.preventDefault();
  };

  handleButtonClick = () => {
    API.getProviders(this.state.keyword, this.state.location).then((res) => {

        // console.log(res.data.data[0]);
        this.setState({
          results: res.data.data,
          keyword: "",
          location: ""
        });

        // console.log(this.state.results);
        
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
          <Results results={this.state.results}/>
        </div>

      </div>
    )
  }
}

export default Services;