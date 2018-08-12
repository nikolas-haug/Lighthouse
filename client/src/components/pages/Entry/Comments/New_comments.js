import React from 'react'
import './comments.css'


const NewCommentForm = (props) => {
    return (
      <div>
          <form onSubmit={props.onSubmit}  data-id={props.entry_id} ref={(el) => this.myFormRef = el}>
          <div className="input-group">
              <textarea className="form-control" data-id={props.entry_id} name='body' aria-label="With textarea" placeholder="Add comments"></textarea>
              <hr/>
          </div>
          <div className="input-group">
          <button type="submit" data-id={props.entry_id} className="btn btn-light">Submit</button>
          </div>
      </form>
    </div>);
  }


export default NewCommentForm;