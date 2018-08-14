import React from "react";
import { Component } from "react";
import Comment from './Comments'
// import { Link } from "react-router-dom";
import API from '../../../../API/messenger';
import './comments.css';
import NewCommentForm from "./New_comments";
import EditCommentForm from "./Edit_comments";

class ShowComments extends Component {
  constructor(props) {
    super(props);
    this.state={
        comment:{
            body:''
        },
    }

    this.handleAction = e => {
      e.preventDefault();
      let comment_id = e.target.getAttribute("data-id")
      let action = e.target.getAttribute("action")
      if(action === 'delete'){
            this.handleDeleteComments(comment_id)
        }else{
            this.handleEditComments(comment_id)
        }
    };

    this.handleDeleteComments = (comment_id)=>{
        API.sendDeleteCommentInfo(comment_id).then(res => {
            this.props.getAllEntries()
        }).catch(err => console.log(err));
    }

    this.handleEditComments = (comment_id) => {
        // let entry_id = this.props.match.params.id
        // Takes the submitted data and pass it over to the API module
        API.getCommentToBeEdited(comment_id).then(res => {
            // If res is success
            if (res.data) {
                this.setState({
                    comment:{
                        body: res.data.body,
                    },
                })
            } 
        }).catch(err => console.log(err));
    }

    this.handleCancelEdit = () => {
        this.setState({
            comment:{
                body: "",
            },
        })
    }

  
    this.handleSubmit = e => {
        e.preventDefault();
        let entry_id = e.target.getAttribute('data-id')
        let data = e.target;
        let newComment = {
          author: localStorage.getItem('litH@user'),
          body: data.body.value,
        };
        data.reset();
        API.sendNewCommentInfo(entry_id, newComment).then(res => {
            this.props.getAllEntries();
        }).catch(err => console.log(err));
      }
  }

    render() {
        return (
                <div>
                    <div>
                        {this.props.comments.length && this.props.comments.length?this.props.comments.map((comment)=>
                           this.state.comment.body === comment.body? 
                            <EditCommentForm  
                                key={comment._id}
                                comment={comment}
                                getAllEntries={this.props.getAllEntries}
                                handleCancelEdit={this.handleCancelEdit}/>:
                            <Comment 
                                comment={comment} 
                                key={comment._id} 
                                handleAction={this.handleAction}/>
                        ):''}
                    </div>
                    <NewCommentForm entry_id={this.props.entry_id} onSubmit={this.handleSubmit}/>
                </div>
            );
        }
    }

export default ShowComments;