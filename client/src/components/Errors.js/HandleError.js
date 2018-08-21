import React from 'react';
import {Component} from 'react';



class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginError:{
                usernameError:'',
                passwordError:'',
            }






         }
    }
    render() { 
        return ( 
        <div className="invalid-feedback">
            Please choose a username.
        </div>
         );
    }
}
 
export default ErrorHandler;