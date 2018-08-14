import React from 'react';

const Header = (props) => {
    return (
        <div className="card">
            <h5 className="card-header">{props.heading}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
    );
}

export default Header;