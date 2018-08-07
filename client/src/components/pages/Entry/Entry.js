import React from 'react';
import { Component } from 'react';
import ShowEntries from './Show_entries'
import NewEntry from './New_entry'
import EditEntry from './Edit_entry';
import API from '../../../API/messenger';


class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };

        this.getAllEntries = () =>{
            API.getAllEntries().then(res => {
                // console.log(res.data)
                if(res.data){
                // Set the state with the results from the search
                this.setState({
                    entries: res.data
                })}else{
                    return;
                }
            })
        }

        
        
        //Fires when the signup form is submitted
        this.addNewEntry = (newEntry) => {
            // Takes the submitted data and pass it over to the API module
            API.sendNewEntryInfo(newEntry).then((res) => {
                if (res) {
                    this.props.history.push('/entries');
                }
            }).catch(err => console.log(err));
        }


        //Fires when the login form is submitted
        // this.handleEditEntry = (user) => {
        //     // Takes the submitted data and pass it over to the API module
        //     API.sendPreviousUserData(user).then(res => {
        //         //If sign in is success
        //         if (res.data.username) {
        //             //Store user info
        //             localStorage.setItem('user', res.data.username)
        //             localStorage.setItem('id', res.data._id)
        //             // Set the state with the user info
        //             this.setState({
        //                 user: {
        //                     id: res.data._id,
        //                     username: localStorage.getItem('user')
        //                 }
        //             })
        //             //Redirect to entry page for now
        //             this.props.history.push('/entry');
        //         } else {
        //             //If sign in fails, stay on login
        //             this.props.history.push('/');
        //         }
        //     }).catch(err => console.log(err));

        // }

        // This method handles user signout
        // this.handleDeleteEntry= (action) => {
        //     //If the user action is logout
        //     if(action === "logout"){
        //     //clear user data from storage
        //     localStorage.clear();
        //     //Redirect user to home page
        //     this.props.history.push('/');
        //     }else{
        //     //Just for testing we will redirect here
        //     this.props.history.push('/services');
        //     }
        // }

    

    }

    render() { 
        return ( 
            <div> 
                {this.props.match.path === '/new_entry'?
                    <NewEntry addNewEntry={this.addNewEntry}/>:
                    this.props.match.path === '/edit_entry'?
                    <EditEntry handleEditEntry={this.handleEditEntry}/>:
                        <ShowEntries 
                            handleDeleteEntry={this.handleDeleteEntry} 
                            getAllEntries={this.getAllEntries}
                            entries={this.state.entries}
                            />}
            </div>
         );
    }
}


export default Entry;

