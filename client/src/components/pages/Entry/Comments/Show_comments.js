import React from "react";
import { Component } from "react";
import Comment from './Comments'
import API from '../../../../API/messenger';
import './comments.css';
import NewCommentForm from "./New_comments";
import EditCommentForm from "./Edit_comments";

class ShowComments extends Component {
  constructor(props) {
    super(props);
    this.state={
        comment:{
            body:'',
            _id:''
        },
        commentError:false,
        commentBody:""
    }

    this.handleOnChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            commentBody:e.target.value,
            commentError:this.state.commentBody.length?false:true,
        })
    }

    this.handleAction = e => {
      e.preventDefault();
      let comment_id = e.target.getAttribute("data-id")
      let action = e.target.getAttribute("action")
      if(action === 'delete'){
            this.handleDeleteComments(comment_id)
        }else if(action === 'edit'){
            this.handleEditComments(comment_id)
        }else{
            this.handleAddOrDeleteLikes(comment_id) 
        }
    };

    this.handleDeleteComments = (comment_id)=>{
        API.sendDeleteCommentInfo(comment_id).then(res => {
            this.props.getAllEntries()
        }).catch(err => console.log(err));
    }

    this.handleEditComments = (comment_id) => {
        // Takes the submitted data and pass it over to the API module
        API.getCommentToBeEdited(comment_id).then(res => {
            // If res is success
            if (res.data) {
                this.setState({
                    comment:{
                        body: res.data.body,
                        _id: res.data._id,
                    },
                })
            } 
        }).catch(err => console.log(err));
    }


    this.handleAddOrDeleteLikes = (comment_id) => {
        let like = {
            likeBy: localStorage.getItem('litH@user_id')
        }
        // Takes the submitted data and pass it over to the API module
        API.sendLikeForAction(comment_id, like).then(res => {
            // If res is success
            this.props.getAllEntries();
            
        }).catch(err => console.log(err));
    }

    this.handleCancelEdit = () => {
        this.setState({
            comment:{
                body: "",
                _id: "",
            },
        })
    }

  
    this.handleSubmit = e => {
        e.preventDefault();
        if(!this.state.commentBody.length){
            this.setState({commentError:true})
            return;
        }
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
                        {this.props.comments && this.props.comments.length?this.props.comments.map((comment)=>
                           this.state.comment.body.length && this.state.comment.body === comment.body? 
                            <EditCommentForm  
                                key={comment._id}
                                comment={comment}
                                getAllEntries={this.props.getAllEntries}
                                handleCancelEdit={this.handleCancelEdit}
                            />:
                            <Comment 
                                comment={comment} 
                                key={comment._id} 
                                handleAction={this.handleAction}
                            /> 
                        ):''}
                    </div>
                        <NewCommentForm 
                            entry_id={this.props.entry_id} 
                            onSubmit={this.handleSubmit}
                            handleOnChange={this.handleOnChange}
                            commentError={this.state.commentError}
                            commentBody={this.state.commentBody}
                        />
                </div>
            );
        }
    }

export default ShowComments;