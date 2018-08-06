import React from 'react'
import { Link } from "react-router-dom";
import About from '../Sections/About'
import './login.css'

const Login = (props) => {
    // console.log(props)

    return (
        <div className="login-wrapper">
            <div className="login-block">
                <form>
                    <h3 className="login-title">Login</h3>
                    <div className="form-group">
                        <input type="text" className="form-control" id="login-username" placeholder="Enter your username" />
                    </div>
                    <hr />
                    <div className="form-group">
                        <input type="password" className="form-control" id="login-password" placeholder="Enter your password" />
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

export default Login;