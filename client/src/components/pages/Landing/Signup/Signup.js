import React from 'react';
import { Component } from 'react';
import About from '../../Sections/About';
import '../Login/login.css';
import { Link } from "react-router-dom";


class Signup extends Component {
    constructor(props) {
        super(props);
      
        this.handleSubmit = event => {
            event.preventDefault();
            let data = event.target;
            let newUser = {
                username: data.username.value,
                password: data.password.value
            };;
          this.props.handleUserSignup(newUser);
          }
    }
    render() {
        return (
        <div className="login-wrapper">
            <div className="login-block">
                <form  onSubmit={this.handleSubmit}> 
                    <h3 className="login-title">Sign Up</h3>
                    <div className="form-group">
                        <input type="text" name="username" className="form-control" id="login-username" placeholder="Enter your username" />
                    </div>
                    <hr />
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" id="login-password" placeholder="Enter your password" />
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={'/'} className="btn btn-primary">Back to Login</Link>
                </form>
            </div>
                <About/>
        </div>
    )

}
}
export default Signup;