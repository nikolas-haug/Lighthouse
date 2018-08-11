import React from 'react';
import { Component } from 'react';
import ShowComments from './Show_Comments'
import NewEntry from './New_entry'
import API from '../../../API/messenger';


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };

        this.getAllComments = () =>{
            API.getAllComments().then(res => {
                // console.log(res.data)
                if(res.data){
                // Set the state with the results from the search
                this.setState({
                    Comments: res.data
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
                    this.props.history.push('/Comments');
                }
            }).catch(err => console.log(err));
        }

        // This method handles entry deletion
        this.handleDeleteEntry= (entry_id) => {
            API.sendDeleteEntryInfo(entry_id).then(() => {
                this.getAllComments();
            }).catch(err => console.log(err));
        }
    }


    render() {
        return ( 
            <div> 
                {this.props.match.path === '/new_entry'?<NewEntry addNewEntry={this.addNewComment}/>:
                        <ShowComments 
                            handleDeleteComment={this.handleDeleteComment} 
                            getAllComments={this.getAllComments}
                            Comments={this.state.Comments}
                        />
                }
            </div>
        );
    }
}


export default Comments;