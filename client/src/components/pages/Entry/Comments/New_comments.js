import React from 'react'
import './comments.css'
let visible = {visibility:'visible'}
let hidden = {visibility:'hidden'}

const NewCommentForm = (props) => {
    return (
      <div className="new-comment">
        <form onSubmit={props.onSubmit}  data-id={props.entry_id}>
            <div className="input-group">
                <textarea onChange={props.handleOnChange} 
                          className="form-control newcomme-textbox"
                          data-id={props.entry_id} name='body' aria-label="With textarea" 
                          placeholder="Add comments"
                          value={props.commentBody}>
                </textarea>
                <hr/>
            </div>
            <span className="error-text" style={props.commentError?visible:hidden}>This field cannot be empty.</span>
            <div className="input-group">
            <button type="submit" data-id={props.entry_id} className="btn-light">Submit</button>
            </div>
      </form>
    </div>);
  }


export default NewCommentForm;