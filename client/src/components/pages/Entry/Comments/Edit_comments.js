import React from 'react'
import { Component } from 'react';
import API from '../../../../API/messenger';
import './comments.css'

class  EditCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:{
                body:this.props.comment.body,
            }
        }


    this.handleSubmit = e => {
        e.preventDefault();
        let comment_id = e.target.getAttribute('data-id')
        let data = e.target;
        let editedComment = {
          body: data.body.value,
        };
        
        API.sendEditedCommentInfo(comment_id, editedComment)
           .then((res) => {
              this.props.getAllEntries();
         }).catch(err => console.log(err));
    }
    

    this.handleInputChange = (e) => {
            let target = e.target;
            let value = target.value;
            let name  = target.name;
            this.setState({
                comment:{
                [name]:value
                }
            })
        }
    }
    render() { 
    return (
      <div>
          <form onSubmit={this.handleSubmit}  data-id={this.props.comment._id}>
          <div className="input-group">
              <textarea 
                    onChange={this.handleInputChange} className="form-control" 
                    name='body' aria-label="With textarea" placeholder="Add comments" 
                    value={this.state.comment.body}>
              </textarea>
              <hr/>
          </div>
          <div className="input-group">
          <button onClick={this.props.handleCancelEdit} color="#2800B2" className="btn-primary">Cancel</button>
          <button type="submit" className="btn-light">Submit</button>
          </div>
      </form>
    </div>);
  }
  }
  


export default EditCommentForm;


