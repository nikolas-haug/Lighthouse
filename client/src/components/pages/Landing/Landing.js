import React from "react";
import { Component } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Logout from "./Logout/Logout";
import API from "../../../API/messenger";
import Slides from "./Carousel/Carousel";
import "./Landing.css";
import Quicklinks from "../Sections/Quicklinks";
import Errors from '../../../Errors/HandleError'


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        _id: "",
        username: ""
      },
      errorMessage:{
        error:"",
      }
    };

    //Fires when the signup form is submitted
    this.handleUserSignup = newUser => {
      this.setState({errorMessage:{error:""}});
      API.sendNewUserInfo(newUser)
        .then(res => {
          if (res.data.username) {
            localStorage.setItem("litH@user", res.data.username);
            localStorage.setItem("litH@user_id", res.data._id);
            this.setState({
              user: {
                id: res.data._id,
                username: localStorage.getItem("litH@user")
              }
            });
            this.props.history.push("/new_entry");
          } else if(res.data.message) {
            this.setState({errorMessage:{error:res.data.message}});
          }
        })
        .catch(err => console.log(err));
    };

    //Fires when the login form is submitted
    this.handleUserLogin = user => {
      API.sendPreviousUserData(user)
        .then(res => {
          if (res.data.username) {
            localStorage.setItem("litH@user", res.data.username);
            localStorage.setItem("litH@user_id", res.data._id);
            this.setState({
              user: {
                id: res.data._id,
                username: localStorage.getItem("litH@user")
              }
            });
            this.props.history.push("/entries");
          } 
        })
        .catch(err => {
          let message = Errors.HandleLoginError(err.response.data)
            this.setState(message)
      })
    };

    // This method handles user signout
    this.handleUserLogout = action => {
      if (action === "logout") {
        localStorage.removeItem('litH@user');
        localStorage.removeItem('litH@user_id');
        this.props.history.push("/");
      } else {
        this.props.history.goBack();
      }
    };
  }

  render() {
    let valid = "is-valid";
    let invalid = "is-invalid";
    return (
      <div className="landingPage">
          <div> 
            <Slides/>
          </div>
          <div>
            {this.props.match.path === "/logout" ? (
              <Logout handleUserLogout={this.handleUserLogout}/>):
              localStorage.getItem('litH@user')?(
              <Quicklinks/>):
              this.props.match.path === "/signup" ? (
              <Signup handleUserSignup={this.handleUserSignup} 
                      error={this.state.errorMessage}
                      className={this.state.errorMessage.error?"form-control "+invalid:"form-control "+ valid}/>
                      
            ) : <Login handleUserLogin={this.handleUserLogin} 
                       error={this.state.errorMessage} />
            }</div>
      </div>
    );
  }
}

export default Landing;
