import React from "react";
import { Component } from 'react';
import ShowUserJournals from './Show'
import API from '../../../API/messenger';
import Header from "../Sections/Header";



class  Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entries: [],
    };

    this.getAllUserEntries = () =>{
        let author = localStorage.getItem('litH@user')
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
        <Header heading="My Journals" title="Track your Routine"/>
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

