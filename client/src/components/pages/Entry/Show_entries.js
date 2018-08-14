import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Moment from 'moment';
import Comments from './Comments/Show_comments';
import Header from '../Sections/Header';
// import LikeButton from "../Services/LikeButton";

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
        return (
            <div className="container">
            <Header heading="Posts" title="Join the conversation"/>
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
                                            <p className="entry-text">{entry.text}</p>
                                        </div>    
                                        <div>
                                             <i className="fa fa-comments"></i>
                                            <button className="btn-link comment-btn" type="button" data-toggle="collapse" data-target={"#"+entry._id+1} aria-expanded="true" aria-controls={entry._id+1}>
                                              {entry.comments.length === 1?<span>{entry.comments.length} Comment</span> :
                                              entry.comments.length > 1?<span>{entry.comments.length} Comments</span>: 
                                              'Add Comment'}
                                            </button>
                                        
                                            {entry.author===localStorage.getItem('litH@user')?
                                            <span>
                                             <Link to={'/edit_entry/'+entry._id}><button className="entry-btn">Edit Post</button></Link>
                                                <button className="entry-btn" data-id={entry._id} action="delete"
                                                            onClick={this.handleAction}>Delete</button>
                                                            </span>:""}
                                        </div>    
                                    </div>
                                        <div id={entry._id+1} className="collapse" aria-labelledby={entry._id} data-parent="#accordionExample">
                                            <div className="card">
                                                <div className="card-body">
                                                    <Comments 
                                                        getAllEntries={this.props.getAllEntries} 
                                                        entry_id={entry._id} 
                                                        comments={entry.comments}
                                                        history={this.props.history}/>
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
