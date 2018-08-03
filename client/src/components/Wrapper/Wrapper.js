import React from 'react'
import './wrapper.css'

const Header = (props) => (
    <div className="wrapper">
        <header className="header">
            <div className="logo">
                <h1>LightHouse</h1>
            </div>
        </header>

        <div className="content">
            {props.children}
        </div>
    </div>
)

export default Header;