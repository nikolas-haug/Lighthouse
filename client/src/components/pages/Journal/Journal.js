import React from "react";
import { Component } from 'react';
import ShowUserJournals from './Show'
import API from '../../../API/messenger';


class  Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entries: [],
    };

    this.getAllUserEntries = () =>{
        let author = localStorage.getItem('user')
        API.getAllUserEntries(author).then(res => {
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

    
    //Fires when the new entry form is submitted
    // this.addNewEntry = (newEntry) => {
    //     let userid = localStorage.getItem('id')
    //     // Takes the submitted data and pass it over to the API module
    //     API.sendNewEntryInfo(newEntry, userid).then((res) => {
    //         if (res) {
    //             this.props.history.push('/entries');
    //         }
    //     }).catch(err => console.log(err));
    // }


    // This method handles entry deletion
    this.handleDeleteEntry= (entry_id) => {
        API.sendDeleteEntryInfo(entry_id).then(() => {
            this.getAllUserEntries();
        }).catch(err => console.log(err));
    }
}
  render() { 
    return ( 
<div>
      <div className="card">
            <div className="card-header">
                <h3>My Journals</h3>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
      </div>
        <ShowUserJournals 
            handleDeleteEntry={this.handleDeleteEntry} 
            getAllUserEntries={this.getAllUserEntries}
            entries={this.state.entries}
            history={this.props.history}
            />
  </div>

);
  }
}
export default Journal;

