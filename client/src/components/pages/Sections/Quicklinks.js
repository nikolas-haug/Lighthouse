import React from 'react';
import About from './About';
import { Link } from "react-router-dom";



const Quicklinks = () => {
    return (
    <div className="login-wrapper">
        <div className="login-block">
            <ul className="list-group quicklink-block">
                <h3   className="list-group-item active">Quick links</h3>
                <Link to={'/entries'} className="list-group-item">Forum</Link>
                <Link to={'/new_entry'} className="list-group-item">Add New Post</Link>
                <Link to={'/my_journals'} className="list-group-item">My Journals</Link>
                <Link to={'/services'} className="list-group-item">Services</Link>
                <Link to={'/assessment'} className="list-group-item">Assessment Quiz</Link>
            </ul>
        </div>
            <About/>
        </div>
    );
}

export default Quicklinks;