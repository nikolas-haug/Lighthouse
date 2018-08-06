import React from 'react';
import { Component } from 'react';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import API from '../../../API/messenger';
// import About from '../Sections/About'
// import Wrapper from '../../Wrapper/Wrapper'


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                _id: '',
                username: ''
            }
        };
        //Fires when the search form is submitted
        this.handleUserSignup = (newUser) => {
            // Takes the submitted data and pass it over to the API module
            API.sendNewUserInfo(newUser).then(res => {
                if (res.data.username) {
                    //If we a valid user is return, save the user info to local storage
                    localStorage.setItem('user', res.data.username)
                    localStorage.setItem('id', res.data._id)
                    // Set the state with the results from the search
                    this.setState({
                        user: {
                            id: res.data._id,
                            username: localStorage.getItem('user')
                        }
                    })
                    // Redirect the user to search page
                    this.props.history.push('/');
                } else {
                    //If fails stay on sign up page
                    this.props.history.push('/signup');
                }
            }).catch(err => console.log(err));
        }


        //Fires when the search form is submitted
        this.handleUserLogin = (preciousUser) => {
        //     // Takes the submitted data and pass it over to the API module
        //     API.sendPreviousUserData(preciousUser).then(res => {
        //         //If sign in is success
        //         if (res.data.username) {
        //             //Store user info
        //             localStorage.setItem('user', res.data.username)
        //             localStorage.setItem('id', res.data._id)
        //             // Set the state with the results from the search
        //             this.setState({
        //                 user: {
        //                     id: res.data._id,
        //                     username: localStorage.getItem('user')
        //                 }
        //             })
        //             //Redirect to search page
        //             this.props.history.push('/search');
        //         } else {
        //             //If sign in fails, stay on ligin
        //             this.props.history.push('/login');
        //         }
        //     }).catch(err => console.log(err));

        }

        //This method handle user signout
        // this.handleUserSignout= (action) => {
        //     //If the user action is positive
        //     if(action === "positive"){
        //     //clear user data from storage
        //     localStorage.clear();
        //     //Redirect user to home page
        //     this.props.history.push('/');
        //     }else{
        //     //call
        //     this.props.history.push('/search');
        //     }
        // }

    }


    render() { 
        return ( 
            <div> 
            {this.props.match.path === '/signup'?
                <Signup handleUserSignup={this.handleUserSignup}/>:
                this.props.match.path === '/'?
                <Login handleUserLogin={this.handleUserLogin}/>:''}
            </div>
         );
    }
}
 
export default Landing;