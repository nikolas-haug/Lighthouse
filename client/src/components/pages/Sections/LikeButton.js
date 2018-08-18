import React from 'react';
import "../Entry/Comments/comments.css";


const LikeButton = (props) => {
    return (
        <button 
        data-id={props.comment._id} 
        action="like"
        onClick={props.handleAction} 
        type="button" 
        className="btn-link">
        <span>{props.comment.likes.length?props.comment.likes.length:''} </span>
        <b className="fa fa-thumbs-up" aria-hidden="true"></b>
       Like</button>
        
    );
}

export default LikeButton;