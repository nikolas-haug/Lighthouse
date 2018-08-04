import React from 'react'
import './wrapper.css'

const Header = (props) => (
    <div>
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">
                    <h1>LightHouse</h1>
                </div>
                <nav>
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <i class="fa fa-user" aria-hidden="true"></i>
                </nav>
            </div>
        </header>

        <div className="content">
            {props.children}
        </div>
    </div>
)

export default Header;