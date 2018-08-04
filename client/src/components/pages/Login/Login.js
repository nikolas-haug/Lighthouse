import React from 'react'
import './login.css'

const Login = (props) => {
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
                </form>
            </div>
            <div className="about-block">
                <h3>About LightHouse</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident illum minus quia obcaecati eos culpa nostrum numquam quibusdam harum vero consectetur necessitatibus aspernatur qui veritatis quod, sint voluptatibus iure.</p>

            </div>
        </div>
    )


}

export default Login;