import React from "react";
import { Component } from "react";
// import { Link } from "react-router-dom";
import Moment from 'moment';
import API from '../../../../API/messenger';


class ShowComments extends Component {
  constructor(props) {
    super(props);
    this.state={
        comments:{
            author:'',
            body:''
        }
    }

    this.handleAction = e => {
      e.preventDefault();
      let comment_id = e.target.getAttribute("data-id")
        API.sendDeleteCommentInfo(comment_id).then(res => {
                this.props.getAllEntries()
            }).catch(err => console.log(err));
    };

  
    this.handleSubmit = e => {
        e.preventDefault();
        let entry_id = e.target.getAttribute('data-id')
        let data = e.target;
        let newComment = {
          author: localStorage.getItem('user'),
          body: data.body.value,
        };
        API.sendNewCommentInfo(entry_id, newComment).then(res => {
            this.props.getAllEntries()
        }).catch(err => console.log(err));
      }
  }
   
    render() {
        return (
                <div>
                    <div>
                        {this.props.comments.length?this.props.comments.map((comment, i )=>
                            <div key={comment._id + i}>
                                <div>
                                    <h6>
                                        {comment.author}
                                    </h6>
                                </div>
                                <div>
                                    <span>
                                    {Moment(comment.createdAt).format('llll')}
                                    </span>
                                </div>
                                 <div>
                                    <p>
                                       {comment.body}
                                    </p>
                                </div>
                                <div>
                                    <button data-id={comment._id} action="delete"
                                         onClick={this.handleAction} type="button" className=" btn-danger">Delete</button>
                                    <button type="button" className=" btn-warning">Edit</button>  
                                
                                </div>
                            </div>
                        ):''}
                    </div>
                    <form  onSubmit={this.handleSubmit}  data-id={this.props.entry_id}>
                        <div className="input-group">
                            <textarea className="form-control" data-id={this.props.entry_id} name='body' aria-label="With textarea"></textarea>
                         </div>
                         <div className="input-group">
                         <button type="submit" data-id={this.props.entry_id} className="btn btn-light">Submit</button>
                         </div>
                    </form>
                </div>
            );
        }
    }

export default ShowComments;