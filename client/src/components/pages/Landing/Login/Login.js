import React from 'react'
import { Component } from 'react';
import { Link } from "react-router-dom";

import About from '../../Sections/About'
import '../Login/login.css'

class Login extends Component {
    constructor(props) {
        super(props);

        //handle the login form submission    
        this.handleSubmit = event => {
            //prevent that HTML behavor
            event.preventDefault();
            //Let reduce this to just data
            let data = event.target;
            //and create an object to hold user info
            let user = {
                username: data.username.value,
                password: data.password.value
            };;
            //pass the user data over to this function we brought from landing component
          this.props.handleUserLogin(user);
          }
    }
    render() {
        return(
        <div className="login-wrapper">
            <div className="login-block">
                <form  onSubmit={this.handleSubmit}> 
                    <h3 className="login-title">Login</h3>
                    <div className="form-group">
                        <input type="text" name="username" className="form-control" id="login-username" placeholder="Enter your username" />
                    </div>
                    <hr />
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" id="login-password" placeholder="Enter your password" />
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={"/signup"} className="btn btn-primary">Sign Up</Link>
                </form>
            </div>
                <About />
        </div>
    )

}
}

export default Login;