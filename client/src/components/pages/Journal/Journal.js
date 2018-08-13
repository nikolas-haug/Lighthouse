import React from "react";
import { Component } from 'react';
import ShowEntries from '../Entry/Show_entries'
import API from '../../../API/messenger';


class  Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entries: [],
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

    
    //Fires when the new entry form is submitted
    this.addNewEntry = (newEntry) => {
        let userid = localStorage.getItem('id')
        // Takes the submitted data and pass it over to the API module
        API.sendNewEntryInfo(newEntry, userid).then((res) => {
            if (res) {
                this.props.history.push('/entries');
            }
        }).catch(err => console.log(err));
    }


    // This method handles entry deletion
    // this.handleDeleteEntry= (entry_id) => {
    //     API.sendDeleteEntryInfo(entry_id).then(() => {
    //         this.getAllEntries();
    //     }).catch(err => console.log(err));
    // }
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
      <div className="container">
        <ShowEntries 
            handleDeleteEntry={this.handleDeleteEntry} 
            getAllEntries={this.getAllEntries}
            entries={this.state.entries}
            history={this.props.history}
            />
      </div>
  </div>

);
  }
}
export default Journal;

