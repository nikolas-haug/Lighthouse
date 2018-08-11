import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Moment from 'moment';
import Comments from './Comments/Show_comments';

class ShowEntries extends Component {
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
        this.props.getAllEntries()
    }
    render() {
        // console.log(this.props.entries)
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
                                            <span>{Moment(entry.createdAt).format('LLLL')}</span>
                                         </div> 
                                        <div>  
                                            <h5>{entry.title}</h5>
                                        </div>    
                                        <div>  
                                            <p>{entry.text}</p>
                                        </div>    
                                        <div>
                                            <button className="btn-link entry-btn" type="button" data-toggle="collapse" data-target={"#"+entry._id+1} aria-expanded="true" aria-controls={entry._id+1}>
                                            Comments
                                            </button>
                                            <Link to={'/edit_entry/'+entry._id} className="entry-btn">Edit Post</Link> 
                                            <button className="entry-btn" data-id={entry._id} action="delete"
                                                        onClick={this.handleAction}>Delete</button>
                                        </div>    
                                    </div>
                                        <div id={entry._id+1} className="collapse" aria-labelledby={entry._id} data-parent="#accordionExample">
                                            <div className="card">
                                                <div className="card-body">
                                                    <Comments getAllEntries={this.props.getAllEntries} entry_id={entry._id} comments={entry.comments}/>
                                                </div>
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

export default ShowEntries;
