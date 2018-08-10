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
            entries: [],
            editedEntry: {}
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
            let userid = localStorage.getItem('id')
            // Takes the submitted data and pass it over to the API module
            API.sendNewEntryInfo(newEntry, userid).then((res) => {
                if (res) {
                    this.props.history.push('/entries');
                }
            }).catch(err => console.log(err));
        }


        this.handleEditEntry = (entry_id) => {
            // Takes the submitted data and pass it over to the API module
            API.sendEditedEntry(entry_id).then(res => {
                //If sign in is success
                if (res.data) {
                    this.setState({
                        editedEntry: {}
                    })
                    //Redirect to entry page for now
                    this.props.history.push('/entry');
                } else {
                    //If sign in fails, stay on login
                    this.props.history.push('/');
                }
            }).catch(err => console.log(err));

        }

        // This method handles entry deletion
        this.handleDeleteEntry= (entry_id) => {
            API.sendDeleteEntryInfo(entry_id).then(() => {
                this.getAllEntries();
            }).catch(err => console.log(err));
        }

    

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
                        />
                }
            </div>
        );
    }
}


export default Entry;

