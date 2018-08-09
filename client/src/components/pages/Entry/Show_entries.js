import React from 'react'
import {
    Component
} from 'react';

class ShowEntries extends Component {
    constructor(props) {
        super(props);
    this.handleAction = (e)=>{
        e.preventDefault()
        let entry_id = e.target.getAttribute('data-id')
        let action = e.target.getAttribute('action')
        action==='edit'? console.log("edit"):
        action==='comment'? console.log("comment"):
        this.props.handleDeleteEntry(entry_id)
        }        
    }

    componentDidMount() {
        this.props.getAllEntries()
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
                          <div>  <h5>{entry.title}</h5></div>    
                          <div>  <p>{entry.text}</p></div>    
                          <div> <a className="btn btn-link" type="button" data-toggle="collapse" data-target={"#"+entry._id+1} aria-expanded="true" aria-controls={entry._id+1}>
                          Comments
                          </a>
                          <button data-id={entry._id} action="edit"
                                onClick={this.handleAction}>Edit</button> 
                            <button data-id={entry._id} action="delete"
                                onClick={this.handleAction}>Delete</button>
                            <button data-id={entry._id} action="comment"
                                onClick={this.handleAction}>Add Comment</button>
                          </div>    
                      </div>
                      <div id={entry._id+1} className="collapse" aria-labelledby={entry._id} data-parent="#accordionExample">
                            <div className="card-body">
                            <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen 
                             book. It has survived not only five c
                             </p>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                            content here', making it look like readable English. Many desktop publishing packages and 
                            web page editors now use Lorem Ipsum as their default 
                            </p>
                            <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                            <p> Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum.   </p>

                            <p>Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page 
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                            distribution of letters, as opposed to using 'Content here, content here', making it look like 
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
                            their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on 
                            purpose (injected humour and the like).
                            </p>

                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        </div>
                        </div>
                    )}
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default ShowEntries;