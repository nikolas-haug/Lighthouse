import React from "react";
import Moment from 'moment';
import './comments.css';
import LikeButton from "../../Services/LikeButton";


const Comments =(props)=> {
        return (
                <div>
                    <div>
                            <div className="comment-content">
                                <div>
                                    <h5>
                                        {props.comment.author}
                                    </h5>
                                </div>
                                <div>
                                    <span className="comment-date">
                                    {Moment(props.comment.createdAt).format('llll')}
                                    </span>
                                </div>
                                <hr/>
                                 <div>
                                    <p className='comment-body'>
                                       {props.comment.body}
                                    </p>
                                </div>
                                <div className="row">
                                <LikeButton {...props}/>
                                {props.comment.author===localStorage.getItem('litH@user')?
                                    <div className="comment-buttons">
                                        <button data-id={props.comment._id} action="delete"
                                            onClick={props.handleAction} type="button" className="btn-danger">Delete</button>
                                        <button data-id={props.comment._id} action="edit"
                                        onClick={props.handleAction} type="button" className="btn-warning">Edit</button>
                                    </div>:""
                                }</div>
                            </div>
                    </div>
                </div>
            );
        }

export default Comments;