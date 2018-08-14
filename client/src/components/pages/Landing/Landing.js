import React from "react";
import { Component } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Logout from "./Logout/Logout";
import API from "../../../API/messenger";
import Slides from "./Carousel/Carousel";
import "./Landing.css";
import Quicklinks from "../Sections/Quicklinks";


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        _id: "",
        username: ""
      }
    };

    //Fires when the signup form is submitted
    this.handleUserSignup = newUser => {
      // Takes the submitted data and pass it over to the API module
      API.sendNewUserInfo(newUser)
        .then(res => {
          if (res.data.username) {
            //If a valid user is return, save the user info to local storage
            localStorage.setItem("litH@user", res.data.username);
            localStorage.setItem("litH@user_id", res.data._id);
            // Set the state with the new user info
            this.setState({
              user: {
                id: res.data._id,
                username: localStorage.getItem("litH@user")
              }
            });
            // Redirect the user to entry page for now
            this.props.history.push("/new_entry");
          } else {
            //If fails stay on sign up page
            this.props.history.push("/signup");
          }
        })
        .catch(err => console.log(err));
    };

    //Fires when the login form is submitted
    this.handleUserLogin = user => {
      // Takes the submitted data and pass it over to the API module
      API.sendPreviousUserData(user)
        .then(res => {
          //If sign in is success
          if (res.data.username) {
            //Store user info
            localStorage.setItem("litH@user", res.data.username);
            localStorage.setItem("litH@user_id", res.data._id);
            // Set the state with the user info
            this.setState({
              user: {
                id: res.data._id,
                username: localStorage.getItem("litH@user")
              }
            });
            //Redirect to entry page for now
            this.props.history.push("/entries");
          } else {
            //If sign in fails, stay on login
            this.props.history.push("/");
          }
        })
        .catch(err => console.log(err));
    };

    // This method handles user signout
    this.handleUserLogout = action => {
      //If the user action is logout
      if (action === "logout") {
        //clear user data from storage
        localStorage.removeItem('litH@user');
        localStorage.removeItem('litH@user_id');
        //Redirect user to home page
        this.props.history.push("/");
      } else {
        //redirect back to the last page
        this.props.history.goBack();
      }
    };
  }

  render() {
    return (
      <div className="landingPage">
        <Slides/>

        {this.props.match.path === "/logout" ? (
          <Logout handleUserLogout={this.handleUserLogout} />):
          localStorage.getItem('litH@user')?(
          <Quicklinks/>):
          this.props.match.path === "/signup" ? (
          <Signup handleUserSignup={this.handleUserSignup} />
        ) : <Login handleUserLogin={this.handleUserLogin} />
       
         
        }
      </div>
    );
  }
}

export default Landing;
