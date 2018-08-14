import React from "react";
import Moment from 'moment';
import './comments.css';


const Comments =(props)=> {
        return (
                <div>
                    <div>
                            <div>
                                <div>
                                    <h6>
                                        {props.comment.author}
                                    </h6>
                                </div>
                                <div>
                                    <span>
                                    {Moment(props.comment.createdAt).format('llll')}
                                    </span>
                                </div>
                                 <div>
                                    <p>
                                       {props.comment.body}
                                    </p>
                                </div>
                                <div>
                                    <button data-id={props.comment._id} action="delete"
                                         onClick={props.handleAction} type="button" className="btn-danger">Delete</button>
                                    <button data-id={props.comment._id} action="edit"
                                    onClick={props.handleAction} type="button" className="btn-warning">Edit</button>  
                                
                                </div>
                            </div>
                    </div>
                </div>
            );
        }

export default Comments;