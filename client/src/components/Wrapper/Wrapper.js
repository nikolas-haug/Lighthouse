import React from 'react'
import { Link } from "react-router-dom";

import './wrapper.css'

const Header = (props) => (
    <div>
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">
                   <a href="/"> <h1>LightHouse</h1></a>
                </div>
                <nav>
                    <a>{localStorage.getItem('user')}</a>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <Link to={'/logout'} className="btn btn-default" aria-hidden="true">Logout</Link>
                    <Link to={'/new_entry'} className="btn btn-default" aria-hidden="true">Add Entry</Link>
                    <Link to={'/entries'} className="btn btn-default" aria-hidden="true">Entries</Link>
                </nav>
            </div>
        </header>

        <div className="content">
            {props.children}
        </div>
    </div>
)

export default Header;