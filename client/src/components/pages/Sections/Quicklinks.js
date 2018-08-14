import React from 'react';
import About from './About';
import { Link } from "react-router-dom";



const Quicklinks = () => {
    return (
    <div className="login-wrapper">
        <div className="login-block">
            <ul className="list-group">
                <h3   className="list-group-item active">Quick links</h3>
                <Link to={'/entries'} className="list-group-item">Journal Entries</Link>
                <Link to={'/new_entry'} className="list-group-item">Add New Entry</Link>
                <Link to={'/my_journals'} className="list-group-item">My Journals</Link>
                <Link to={'/services'} className="list-group-item">Services</Link>
            </ul>
        </div>
            <About/>
        </div>
    );
}

export default Quicklinks;