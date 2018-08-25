import React from 'react'
import { Component } from 'react';
import API from '../../../../API/messenger';
import './comments.css'

let visible = {visibility:'visible'}
let hidden = {visibility:'hidden'}
let valid = "is-valid form-control ";
let invalid = "is-invalid form-control";
class  EditCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:{
                body:this.props.comment.body,
            },
            error:false
        }


    this.handleSubmit = e => {
        e.preventDefault();
        if(!this.state.comment.body.length){
            return;
        }
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
                },
                error:this.state.comment.body.length?false:true
            })
        }
    }
    render() { 
    return (
      <div>
          <form onSubmit={this.handleSubmit}  data-id={this.props.comment._id}>
          <div className="input-group">
              <textarea 
                    onChange={this.handleInputChange}  
                    className={this.state.error?invalid:valid}
                    name='body' aria-label="With textarea" placeholder="Add comments" 
                    value={this.state.comment.body}>
              </textarea>
              <hr/>
          </div>
          <div className="input-group">
          <button onClick={this.props.handleCancelEdit} color="#2800B2" className="btn-primary">Cancel</button>
          <button type="submit" className="btn-light">Submit</button>
          </div>
          <span className="error-text" style={this.state.error?visible:hidden}>This field cannot be empty.</span>
      </form>
    </div>);
  }
  }
  


export default EditCommentForm;


