import React from 'react'
import { Link } from "react-router-dom";

import './wrapper.css'

const Header = (props) => (
    <div className="ui secondary pointing menu">
        <a className="action item" href="/"> <h1>LightHouse</h1></a>
    <div className="right menu">
        <a className="ui item">{localStorage.getItem('user')}</a>
        <a className="ui item"><Link to={'/logout'} className="btn btn-default" aria-hidden="true"></Link>Logout</a>
        <a className="ui item"><Link className="ui item" to={'/new_entry'} className="btn btn-default" aria-hidden="true"></Link>Add Entry</a>
        <a className="ui item"><Link className="ui item" to={'/entries'} className="btn btn-default" aria-hidden="true"></Link>Entries</a>
    </div>
    </div>
)

export default Header;