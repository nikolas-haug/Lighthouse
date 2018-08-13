import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Moment from 'moment';
// import Comments from './Comments/Show_comments';

class ShowUserJournals extends Component {
  constructor(props) {
    super(props);
    this.handleAction = e => {
      e.preventDefault();
      let entry_id = e.target.getAttribute("data-id");
      let action = e.target.getAttribute("action");
        action === "comment"? this.props.handleAddComment(entry_id):
                              this.props.handleDeleteEntry(entry_id);
    };
  }
    componentDidMount() {
        this.props.getAllUserEntries()
    }
    render() {
        return (
            <div className="container">
                 <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="accordion" id="accordionExample">
                            {this.props.entries.map(entry=>
                                <div className="card" key={entry._id}>
                                    <div className="card-header" id={entry._id}>
                                        <div>  
                                            <h3>{entry.author}</h3>
                                            <span>{Moment(entry.createdAt).format('llll')}</span>
                                         </div> 
                                        <div>  
                                            <h5>{entry.title}</h5>
                                        </div>    
                                        <div>  
                                            <p>{entry.text}</p>
                                        </div>    
                                        <div>
                                            <Link to={'/edit_entry/'+entry._id} className="entry-btn">Edit Post</Link> 
                                            <button className="entry-btn" data-id={entry._id} action="delete"
                                                        onClick={this.handleAction}>Delete</button>
                                        </div>    
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                 </div>
            </div>
                );
            }
        }

export default ShowUserJournals;