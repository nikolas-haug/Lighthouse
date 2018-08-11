import React from 'react';
import { Component } from 'react';
import ShowEntries from './Show_entries'
import NewEntry from './New_entry'
import API from '../../../API/messenger';


class Entry extends Component {
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
        this.handleDeleteEntry= (entry_id) => {
            API.sendDeleteEntryInfo(entry_id).then(() => {
                this.getAllEntries();
            }).catch(err => console.log(err));
        }
    }


    render() {
        return ( 
            <div> 
                {this.props.match.path === '/new_entry'?<NewEntry addNewEntry={this.addNewEntry}/>:
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

